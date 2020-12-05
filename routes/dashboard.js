const path = require('path');

const express = require('express');

const dashboardController = require('../controller/dashboard');

const router = express.Router();


router.get('/main', dashboardController.main);

router.get('/investment', dashboardController.investment);

router.get('/transaction', dashboardController.transaction);

router.get('/deposit', dashboardController.deposit);

router.get('/withdraw', dashboardController.withdraw);

router.get('/settings', dashboardController.settings);

router.get('/support', dashboardController.support);





module.exports = router;