const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createJWT, } = require('../utils/auth');

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const signup = async (req, res, next) => {

    const { name, email, password, password_confirmation } = req.body;

    let errors = [];

    if (!name) {
        errors.push({ name: "Field required" });
    }
    if (!email) {
        errors.push({ email: "Field required" });
    }
    if (!emailRegexp.test(email)) {
        errors.push({ email: "Invalid email" });
    }
    if (!password) {
        errors.push({ password: "Field required" });
    }
    if (!password_confirmation) {
        errors.push({
            password_confirmation: "Field required",
        });
    }
    if (password != password_confirmation) {
        errors.push({ password: "Passwords doesn't match" });
    }
    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }

    try {
        let user = await User.findOne({ email: email })

        if (user) {
            return res.status(422).json({
                errors: [{ user: "Email already exists" }]
            })
        }

        user = new User ({
            name: name,
            email: email,
            password: password,
        });

        let salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        user.save().then(response => {
            res.status(200).json({
                success: true,
                result: response
            });
        }).catch(error => {
            res.status(500).json({
                errors: [{
                    error: error
                }]
            });
        });

    } catch (error) {
        res.status(500).json({
            errors: [{ error: error }]
        })
    }
}

const signin = (req, res) => {

    const { email, password } = req.body;

    let errors = [];
    if (!email) {
        errors.push({ email: "Field required" });
    }
    if (!emailRegexp.test(email)) {
        errors.push({ email: "Invalid email" });
    }
    if (!password) {
        errors.push({ passowrd: "Field required" });
    }
    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }

    User.findOne({ 
        email: email 
    }).then(user => {

        if (!user) {
          return res.status(404).json({
            errors: [{ user: "Not found" }],
          });
        } else {
           bcrypt.compare(password, user.password).then(isMatch => {

            if (!isMatch) {
                return res.status(400).json({ 
                   errors: [{ password: "Passwords doesn't match" }] 
                });
            }

            let access_token = createJWT(
                user.email,
                user._id,
                3600
            );
       
            jwt.verify(access_token, process.env.TOKEN_SECRET, (err, decoded) => {

                if (err) {
                    res.status(500).json({ 
                        erros: err 
                    });
                }

                if (decoded) {
                    return res.status(200).json({
                        success: true,
                        token: access_token,
                        message: user
                    });
                }
            });
            }).catch(err => {
            res.status(500).json({ errors: err });
            });
        }
    }).catch(err => {
        res.status(500).json({ erros: err });
    });
}

module.exports = {
    signin,
    signup
}