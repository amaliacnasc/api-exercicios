const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();


router.post('/register', register);
router.post('/login', login); // por que login tambem é um post?

module.exports = router;
