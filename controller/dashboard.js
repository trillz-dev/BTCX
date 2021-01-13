const bodyParser = require('body-parser');
const request = require('request');
// const User = require('../Models/User');

exports.main = (req, res, next) => {
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

};

exports.investment = (req, res, next) => {
    res.render('dashboard/investment', {
        pageTitle: 'Invesment',
        path: '/investment'
    });
};

exports.transaction = (req, res, next) => {
    res.render('dashboard/transaction', {
        pageTitle: 'Transactions',
        path: '/transaction'
    });
};

exports.deposit = (req, res, next) => {
    res.render('dashboard/deposit', {
        pageTitle: 'Deposit',
        path: '/deposit'
    });
};

exports.btcDeposit = (req, res, next) => {
    res.render('dashboard/btc-deposit', {
        pageTitle: 'Deposit',
        path: '/btc-deposit'
    });
};

exports.bchDeposit = (req, res, next) => {
    res.render('dashboard/bch-deposit', {
        pageTitle: 'Deposit',
        path: '/bch-deposit'
    });
};

exports.ethDeposit = (req, res, next) => {
    res.render('dashboard/eth-deposit', {
        pageTitle: 'Deposit',
        path: '/eth-deposit'
    });
};

exports.withdraw = (req, res, next) => {
    res.render('dashboard/withdraw', {
        pageTitle: 'Withdraw',
        path: '/withdraw'
    });
};

exports.settings = (req, res, next) => {
    res.render('dashboard/settings', {
        pageTitle: 'Settings',
        path: '/settings',
        userName: `${req.user.firstName} ${req.user.lastName}`,
        userEmail: req.user.email,
        userNumber: req.user.number,
        userFirst: req.user.firstName,
        userLast: req.user.lastName
    });
};

exports.settingSecurity = (req, res, next) => {
    res.render('dashboard/settings-security', {
        pageTitle: 'Settings',
        path: '/settings-security'
    });
};

exports.support = (req, res, next) => {
    res.render('dashboard/support', {
        pageTitle: 'Support',
        path: '/support'
    });
};
