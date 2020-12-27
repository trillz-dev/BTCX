const path = require('path');
const express = require('express');
const usersController = require('../controller/users');
const router = express.Router();
const bcrypt = require('bcryptjs');


// User model 
const User = require('../Models/User');




router.get('/login', usersController.login);

router.get('/register',(req, res, next) => {
    res.render('mainsite/register', {
        pageTitle: 'Sign-up',
        path: '/register'
    });

    // console.log(req.body)

});

router.post('/register',(req, res, next) => {

    const { firstName, lastName, email, password, password2 } = req.body;
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
        errors.push({ msg: 'Password should be at least 6 characters!'})
    }

    if(errors.length > 0) {
        res.render('mainsite/register', {
            pageTitle: 'Sign-up',
            path: '/register',
            errors,
            firstName,
            lastName,
            email
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
                        email
                    });
                } else {
                    // Create New User
                    const newUser = new User({
                        firstName,
                        lastName,
                        email,
                        password,
                        password2
                    });

                    // Hash password
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) console.log(err);
                            // Set password to hashed
                            newUser.password = hash;
                            newUser.password2 =hash;

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



module.exports = router;