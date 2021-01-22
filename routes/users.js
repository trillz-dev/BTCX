const path = require('path');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const async = require('async')
const crypto = require('crypto')
const nodeMailer = require('nodemailer')



// User model 
const User = require('../Models/User');


// Login GET
router.get('/login', (req, res, next) => {
    res.render('mainsite/login', {
        pageTitle: 'Login',
        path: '/login'
    });
});

// Register GET
router.get('/register',(req, res, next) => {
    res.render('mainsite/register', {
        pageTitle: 'Sign-up',
        path: '/register'
    });

    // console.log(req.body)

});

// Login POST
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/main',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
});

// Register POST
router.post('/register',(req, res, next) => {

    const { firstName, lastName, email, password, password2, number } = req.body;
    let errors = [];

    // Check required fields
    // if(!firstName || !lastName || !userName || !email || !password || password2) {
    //     errors.push({ msg: 'Please fill in all fields' });
    // }

    // Check password match
    if(password !== password2) {
        errors.push({ msg: 'Passwords do not match!' });
    }

    // Check password length
    if(password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters!' })
    }

    

    if(errors.length > 0) {
        res.render('mainsite/register', {
            pageTitle: 'Sign-up',
            path: '/register',
            errors,
            firstName,
            lastName,
            email,
            number
        });
    } else {
        // Validation passed
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    // User exists
                    errors.push({ msg: 'Email already exists!' })
                    res.render('mainsite/register', {
                        pageTitle: 'Sign-up',
                        path: '/register',
                        errors,
                        firstName,
                        lastName,
                        email,
                        number
                    });
                } else {
                    // Create New User
                    const newUser = new User({
                        firstName,
                        lastName,
                        email,
                        number,
                        password,
                    });

                    // Hash password
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) console.log(err);
                            // Set password to hashed
                            newUser.password = hash;

                            // Save user
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered and can log in')
                                    res.redirect('/login');
                                })
                                .catch(err => console.log(err));
                        })
                    })

                }
            });
    }

});

// logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out!');
    res.redirect('/login')
});

// Recover GET
router.get('/recover', (req, res, next) => {
    res.render('mainsite/recover', {
        pageTitle: 'Recover Password',
        path: '/recover-password'
    });
});

// Recover POST
router.post('/recover', (req, res, next) => {
    const email  = req.body.email;
    async.waterfall([
        done => {
            crypto.randomBytes(20, (err, buf) => {
                let token = buf.toString('hex');
                done(err, token)
            })
        },
        (token, done) => {
            User.findOne({ email: email }, (err, user) => {
                if (!user) {
                    req.flash('error', 'No account with email adresss exists!')
                    return res.redirect('/recover')
                }

                user.resetPasswordToken = token;
                user.restPasswordExpires = Date.now() + 3600000; // 1 hour

                user.save(err => {
                    done(err, token, user)
                })
            });
        },
        (token, user, done) => {
            // let smtpTransport = nodeMailer.createTransport({
            //     service: 'Gmail',
            //     auth: {
            //         user: 'williamclevethacker@gmail.com',
            //         pass: process.env.GMAILPW
            //     }
            // });
            var smtpTransport = nodeMailer.createTransport({
                host: "Gmail",
                port: 587,
                auth: {
                  user: "helloadetomiwa@gmail.com",
                  pass: process.env.GMAILPW
                }
              });
            let mailOptions = {
                to: user.email,
                from: 'williamclevethacker@gmail.com',
                subject: 'Node.js Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            smtpTransport.sendMail(mailOptions, err => {
                req.flash('success_msg', 'An e-mail has been sent to ' + user.email + ' with further instructions');
                done(err, 'done')
            });
        }
    ], err => {
        if (err) {
            res.redirect('/recover')
        } else {
            console.log('email sent')
        }
    });
});

// Reset GET
router.get('/reset/:token', (req, res, next) => {
    const token = req.params.token;
    user.findOne({ 
        resetPasswordToken: token,
        restPasswordExpires: { $gt: Date.now() },
      }, (err, user) => {
          if (!user) {
              req.flash('error', 'Password reset token is invalid or has expired!');
              return res.redirect('/recover');
          }
          res.render('mainsite/reset', { token: token });
      })
});

// Reset POST
router.post('/reset/:token', (req, res, next) => {
    const token = req.params.token;
    
});


module.exports = router;