const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User')

/**
 * @route POST api/users/register
 * @desc Register the USER
 * @access Public
 */

router.post('register', (req, res) => {
    let {name, username, email, password, confirm_password } = req.body
    if(password !== confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }
})
module.exports = router;

