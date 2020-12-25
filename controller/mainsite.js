const bodyParser = require('body-parser');
const request = require('request');




exports.home = (req, res, next) => {
//     request('https://coinlib.io/api/v1/coinlist?key=9b79bb5181f4b204', (error, response, body) => {
        
//         let data = JSON.parse(body);
//         let btcData = data.coins[0];
//         let ETH = data.coins[1];
//         let XRP = data.coins[2];
//         let LTC = data.coins[3];

//         let btcPrice = Math.round(btcData.price)
//         // let btcFixed = Math.round(btcPrice)
//         let btcMarket = btcData.market_cap
//         let btc24 = btcData.volume_24h
//         console.log (btcData)

// });

    res.render('mainsite/index', {
        pageTitle: 'Homepage',
        path: '/',
        // btcPrice,
        // btcMarket,
        // btc24
    });

// });

};

exports.about = (req, res, next) => {
    res.render('mainsite/about', {
        pageTitle: 'About',
        path: '/about'
    });
};

exports.service = (req, res, next) => {
    res.render('mainsite/service', {
        pageTitle: 'Services',
        path: '/services'
    });
};

exports.pricing = (req, res, next) => {
    res.render('mainsite/pricing', {
        pageTitle: 'Pricing',
        path: '/pricing'
    });
};

exports.contact = (req, res, next) => {
    res.render('mainsite/contact-form', {
        pageTitle: 'Contact-Us',
        path: '/contact'
    });
};

exports.faq = (req, res, next) => {
    res.render('mainsite/faq', {
        pageTitle: 'FAQ',
        path: '/FAQ'
    });
};

exports.error = (req, res, next) => {
    res.render('mainsite/error-404', {
        pageTitle: 'Error Page',
        path: '/error'
    });
};

exports.login = (req, res, next) => {
    res.render('mainsite/login', {
        pageTitle: 'Login',
        path: '/sign-in'
    });
};

exports.recover = (req, res, next) => {
    res.render('mainsite/recover', {
        pageTitle: 'Recover Password',
        path: '/recover-password'
    });
};

exports.register = (req, res, next) => {
    res.render('mainsite/sign-up', {
        pageTitle: 'Sign-up',
        path: '/sign-up'
    });
};