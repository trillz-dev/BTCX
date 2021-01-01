const path = require('path');
const express = require('express');
// const http = require('http');
// const socketio = require('socket.io');
const mainsiteController = require('../controller/mainsite');
const router = express.Router();



router.get('/', mainsiteController.home);

router.post('/', mainsiteController.home)

router.get('/about', mainsiteController.about);

router.get('/service', mainsiteController.service);

router.get('/pricing', mainsiteController.pricing);

router.get('/contact', mainsiteController.contact);

router.get('/faq', mainsiteController.faq);

router.get('/error', mainsiteController.error);












module.exports = router;
