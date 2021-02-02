const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')
// User model 
const User = require('../Models/User');



router.get('/main', ensureAuthenticated, (req, res, next) => {
    request('https://coinlib.io/api/v1/coinlist?key=9b79bb5181f4b204', (error, response, body) => {
        
        let data = JSON.parse(body);
        let BTC = parseFloat(data.coins[0].price).toFixed(4);
        let ETH = parseFloat(data.coins[1].price).toFixed(4);
        let XRP = parseFloat(data.coins[2].price).toFixed(6);
        let LTC = parseFloat(data.coins[3].price).toFixed(4);
        let BCH = parseFloat(data.coins[4].price).toFixed(4);
        let BNB = parseFloat(data.coins[5].price).toFixed(6);
        let USDT = parseFloat(data.coins[6].price).toFixed(6);
        let XLM = parseFloat(data.coins[9].price).toFixed(6);


        res.render('dashboard/main', {
            pageTitle: 'Dashboard',
            path: '/main',
            BTC,
            ETH,
            XRP,
            LTC,
            BCH,
            BNB,
            USDT,
            XLM,
        });
});

});

router.get('/investment', ensureAuthenticated, (req, res, next) => {
    res.render('dashboard/investment', {
        pageTitle: 'Invesment',
        path: '/investment'
    });
});

router.get('/transaction', ensureAuthenticated, (req, res, next) => {
    User.findById({_id: req.user._id})
    .then(data => {
        if (!data) {
            console.log('Error')
        } else {
            let list = data.trans
            res.render('dashboard/transaction', {
                pageTitle: 'Transactions',
                path: '/transaction',
                list
            });
        }
    })
    .catch(err => next(err));
});

router.get('/deposit', ensureAuthenticated, (req, res, next) => {
    res.render('dashboard/deposit', {
        pageTitle: 'Deposit',
        path: '/deposit'
    });
});

router.post('/btc-deposit', ensureAuthenticated, (req, res, next) => {
    const { desc, amtInput } = req.body;

    const deposit =  {
        desc,
        amount: amtInput
    }

    User.findById({_id: req.user._id})
    .then(data => {
        if (!data) {
            console.log('Error')
        } else {
            data.trans.push(deposit);

            data.save();
            res.redirect('/transaction')
        }
    })
    .catch(err => next(err));
});

router.post('/eth-deposit', ensureAuthenticated, (req, res, next) => {
    const { desc, amtInput } = req.body;

    const deposit =  {
        desc,
        amount: amtInput
    }

    User.findById({_id: req.user._id})
    .then(data => {
        if (!data) {
            console.log('Error')
        } else {
            data.trans.push(deposit);

            data.save();
            res.redirect('/transaction')
        }
    })
    .catch(err => next(err));
});

router.get('/withdraw', ensureAuthenticated, (req, res, next) => {
    res.render('dashboard/withdraw', {
        pageTitle: 'Withdraw',
        path: '/withdraw'
    });
});

router.post('/bank-withdraw', ensureAuthenticated, (req, res, next) => {
    const { desc, amtInput } = req.body;

    const deposit =  {
        desc,
        amount: amtInput
    }

    User.findById({_id: req.user._id})
    .then(data => {
        if (!data) {
            console.log('Error')
        } else {
            data.trans.push(deposit);

            data.save();
            res.redirect('/transaction')
        }
    })
    .catch(err => next(err));
});

router.post('/btc-withdraw', ensureAuthenticated, (req, res, next) => {
    const { desc, amtInput } = req.body;

    const deposit =  {
        desc,
        amount: amtInput
    }

    User.findById({_id: req.user._id})
    .then(data => {
        if (!data) {
            console.log('Error')
        } else {
            data.trans.push(deposit);

            data.save();
            res.redirect('/transaction')
        }
    })
    .catch(err => next(err));
});

router.get('/settings', ensureAuthenticated, (req, res, next) => {
    res.render('dashboard/settings', {
        pageTitle: 'Settings',
        path: '/settings',
        userName: `${req.user.firstName} ${req.user.lastName}`,
        userEmail: req.user.email,
        userNumber: req.user.number,
        userFirst: req.user.firstName,
        userLast: req.user.lastName,
        userBank: req.user.bank,
        userAcct: req.user.acct,
        userRTN: req.user.rtn,
        userBTC: req.user.btc,
    });
});

router.post('/settings', (req, res, next) => {
    const { fname, lname } = req.body;

    User.updateOne({ _id: req.user._id }, { firstName: fname, lastName: lname })
    .then(data => {
        if (!data) {
            console.log('Error')
        } else {
            res.redirect('/settings')
        }
    })
    .catch(err => next(err));
});

router.get('/settings-withdrawal', ensureAuthenticated, (req, res, next) => {
    res.render('dashboard/settings-withdrawal-info', {
        pageTitle: 'Settings',
        path: '/settings-withdrawal',
        userName: `${req.user.firstName} ${req.user.lastName}`,
        userEmail: req.user.email,
        userNumber: req.user.number,
        userFirst: req.user.firstName,
        userLast: req.user.lastName,
        userBank: req.user.bank,
        userAcct: req.user.acct,
        userRTN: req.user.rtn,
        userBTC: req.user.btc,
    });
});

router.post('/settings-withdrawal', (req, res, next) => {

    const { bank, acct, btc, rtn } = req.body;

    User.updateOne({ _id: req.user._id }, { bank: bank, acct: acct, btc: btc, rtn: rtn })
    .then(data => {
        if (!data) {
            console.log('Error')
        } else {
            res.redirect('/settings')
        }
    })
    .catch(err => next(err));

});

router.get('/settings-security', ensureAuthenticated, (req, res, next) => {
    res.render('dashboard/settings-security', {
        pageTitle: 'Settings',
        path: '/settings-security',
        userName: `${req.user.firstName} ${req.user.lastName}`,
        userEmail: req.user.email,
        userNumber: req.user.number,
        userFirst: req.user.firstName,
        userLast: req.user.lastName,
        userBank: req.user.bank,
        userAcct: req.user.acct,
        userRTN: req.user.rtn,
        userBTC: req.user.btc,
    });
});

router.post('/settings-security', (req, res, next) => {
    const { password, newPassword } = req.body;

    User.findByIdAndUpdate({ _id: req.user._id }) 
        .then(data => {
        if (!data) {
            console.log('Error')
        }

        // Match password
        bcrypt.compare(password, data.password, (err, isMatch) => {
            if (err) {
                throw err
            }
            if (isMatch) {
                return done(null, data.setPassword(newPassword))
            } else {
                return done(null, false, { message: 'Incorrect password!' })
            }
        })
    })
    .catch(err => console.log(err))
});

router.get('/support', ensureAuthenticated, (req, res, next) => {
    res.render('dashboard/support', {
        pageTitle: 'Support',
        path: '/support'
    });
});






module.exports = router;