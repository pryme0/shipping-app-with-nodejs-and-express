const localStrategy = require('passport-local')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/Users')

module.exports = function(passport) {
    passport.use(new localStrategy({ usernameField: 'email' }, (email, password, done) => {
        User.findOne({ email: email }).then(user => {
            if (!user) {
                return done(null, false, { mesage: 'that email is not registered' })
            }
            //match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user)

                } else {
                    return done(null, false, { message: 'password donot match' })
                }
            })
        }).catch(err => console.log(err))
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}