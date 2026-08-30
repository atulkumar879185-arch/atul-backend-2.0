const express = require('express');
const router = express.Router();
const usermodel = require('../model/usermodel');

const dotenv = require('dotenv');
dotenv.config();

const { registercontroller, logincontroller } = require('../controller/user.authcontroller');



//  api/user/register:
router.post('/register',registercontroller)


router.post('/login',logincontroller)

    module.exports = router;