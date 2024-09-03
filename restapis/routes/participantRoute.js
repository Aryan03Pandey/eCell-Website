const express = require('express');
const { generateQRCode ,register, getuser } = require('../controller/participantController.js');

const router = express.Router();

router.post('/register', register)

router.get('/getuser', getuser)

router.post('/generate-qr', generateQRCode);

module.exports = router;
