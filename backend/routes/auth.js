const express = require('express');
const router = express.Router()
const Users = require('../models/Users');


router.put('/checkauth', async (req, res) => {
    // let usersdata = await Users.findOne({ user_email: req.body.user_email, user_password: req.body.user_password });
    const accountSid = 'ACe791d84060d9303901422749171e698e';
    const authToken = 'dbaa1134e2fa355d7f815a3f45a97517';
    const client = require('twilio')(accountSid, authToken);
    const crypto = require("crypto");
    const otp = crypto.randomBytes(3).toString("hex");

    await client.messages.create({
        body: `Your OTP is ${otp}`,
        from: '+19897182244',
        to: `+91`+req.body.phone
    });

    const filter = { user_phone: req.body.phone };
    const update = { otp: otp };
    let usersdata = await Users.findOneAndUpdate(filter, update);

    if (usersdata) {
        success = true;
        message = "OTP Sent";
        res.json(success, message, usersdata);
    }
    else {
        success = false;
        message = "Invalid User";
        res.json(success, message, usersdata);
    }
})


router.put('/verifyauth', async (req, res) => {
    let otpdata = await Users.findOne({ user_phone: req.body.number, otp: req.body.otp });
    if (otpdata) {

        const filter = { user_phone: req.body.phone };
        const update = { otp: null };
        let updateotp = await Users.findOneAndUpdate(filter, update);

        success = true;
        message = "User Verified";
        res.json(success, message, otpdata);
    }
    else {
        success = false;
        message = "Invalid User";
        res.json(success, message, otpdata);
    }
})





module.exports = router