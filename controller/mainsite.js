exports.home = (req, res, next) => {
    res.render('mainsite/index', {
        pageTitle: 'Homepage',
        path: '/'
    });
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