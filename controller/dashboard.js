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

exports.support = (req, res, next) => {
    res.render('dashboard/support', {
        pageTitle: 'Support',
        path: '/support'
    });
};

// exports.signout = (req, res, next) => {
//     res.render('dashboard/signout', {
//         pageTitle: 'Dashboard',
//         path: '/signout'
//     });
// };