exports.login = (req, res, next) => {
    res.render('mainsite/login', {
        pageTitle: 'Login',
        path: '/login'
    });
};



