const express = require('express');
const router = express.Router()
const Users = require('../models/Users');


router.get('/checkauth', async (req, res) => {
    let usersdata = await Users.findOne({ user_email: req.body.user_email, user_password: req.body.user_password });
    if (usersdata) {
        success = true;
        message = "User Authenticated";
        res.json(success, message, usersdata);
    }
    else {
        success = false;
        message = "Invalid User";
        res.json(success, message, usersdata);
    }
})


module.exports = router