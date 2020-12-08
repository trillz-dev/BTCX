const path = require('path');

const express = require('express');

const dashboardController = require('../controller/dashboard');

const router = express.Router();


router.get('/main', dashboardController.main);

router.get('/investment', dashboardController.investment);

router.get('/transaction', dashboardController.transaction);

router.get('/deposit', dashboardController.deposit);

router.get('/btc-deposit', dashboardController.btcDeposit);

router.get('/bch-deposit', dashboardController.bchDeposit);

router.get('/eth-deposit', dashboardController.ethDeposit);

router.get('/withdraw', dashboardController.withdraw);

router.get('/settings', dashboardController.settings);

router.get('/support', dashboardController.support);

router.get('/login', dashboardController.login);





module.exports = router;