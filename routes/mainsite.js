const path = require('path');

const express = require('express');

const mainsiteController = require('../controller/mainsite');

const router = express.Router();



router.get('/', mainsiteController.home);

router.get('/about', mainsiteController.about);

router.get('/service', mainsiteController.service);

router.get('/pricing', mainsiteController.pricing);

router.get('/contact', mainsiteController.contact);

router.get('/faq', mainsiteController.faq);

router.get('/error', mainsiteController.error);

router.get('/sign-in', mainsiteController.login);

router.get('/recover', mainsiteController.recover);

router.get('/sign-up', mainsiteController.register);











module.exports = router;