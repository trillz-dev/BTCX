exports.main = (req, res, next) => {
    res.render('dashboard/main', {
        pageTitle: 'Dashboard',
        path: '/main'
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
        path: '/settings'
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

exports.login = (req, res, next) => {
    res.redirect('mainsite/login', {
        pageTitle: 'Sign In',
        path: '/sign-in'
    });
};