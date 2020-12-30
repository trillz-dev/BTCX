const path = require('path');
const express = require('express');
const dashboardController = require('../controller/dashboard');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')


router.get('/main', ensureAuthenticated, dashboardController.main);

router.get('/investment', ensureAuthenticated, dashboardController.investment);

router.get('/transaction', ensureAuthenticated, dashboardController.transaction);

router.get('/deposit', ensureAuthenticated, dashboardController.deposit);

router.get('/btc-deposit', ensureAuthenticated, dashboardController.btcDeposit);

router.get('/bch-deposit', ensureAuthenticated, dashboardController.bchDeposit);

router.get('/eth-deposit', ensureAuthenticated, dashboardController.ethDeposit);

router.get('/withdraw', ensureAuthenticated, dashboardController.withdraw);

router.get('/settings', ensureAuthenticated, dashboardController.settings);

router.get('/settings-security', ensureAuthenticated, dashboardController.settingSecurity);

router.get('/support', ensureAuthenticated, dashboardController.support);

// router.get('/login', dashboardController.login);





module.exports = router;