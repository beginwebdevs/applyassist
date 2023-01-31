const express = require('express');
const router = express.Router()
const Users = require('../models/Users');


router.get('/allusers', async (req, res) => {
    let usersdata = await Users.find();
    res.json(usersdata);
})



router.post('/adduser', async (req, res) => {
    let useradd = await Users.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_phone: req.body.user_phone,
        user_password: req.body.user_password,
        is_active: req.body.is_active,
    });
    success = true;
    message = "User added";
    res.json({ success, message, useradd });

})


module.exports = router