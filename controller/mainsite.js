exports.home = (res, req, next) => {
    if (err) {
        res.send('there was an error')
    }
    else{
        res.render('mainsite/index', {
            pageTitle: 'Homepage',
            path: '/'
        });
    }
};

exports.about = (res, req, next) => {
    res.render('mainsite/about', {
        pageTitle: 'About',
        path: '/about'
    });
};

exports.service = (res, req, next) => {
    res.render('mainsite/service', {
        pageTitle: 'Services',
        path: '/services'
    });
};

exports.pricing = (res, req, next) => {
    res.render('mainsite/pricing', {
        pageTitle: 'Pricing',
        path: '/pricing'
    });
};

exports.contact = (res, req, next) => {
    res.render('mainsite/contact-form', {
        pageTitle: 'Contact-Us',
        path: '/contact'
    });
};

exports.faq = (res, req, next) => {
    res.render('mainsite/faq', {
        pageTitle: 'FAQ',
        path: '/FAQ'
    });
};

exports.error = (res, req, next) => {
    res.render('mainsite/error-404', {
        pageTitle: 'Error Page',
        path: '/error'
    });
};

exports.login = (res, req, next) => {
    res.render('mainsite/login', {
        pageTitle: 'Login',
        path: '/sign-in'
    });
};

exports.recover = (res, req, next) => {
    res.render('mainsite/recover', {
        pageTitle: 'Recover Password',
        path: '/recover-password'
    });
};

exports.register = (res, req, next) => {
    res.render('mainsite/sign-up', {
        pageTitle: 'Error Page',
        path: '/sign-up'
    });
};