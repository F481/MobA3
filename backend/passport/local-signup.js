var User = require('mongoose').model('User');
var PassportLocalStrategy = require('passport-local').Strategy;


// Passport local strategy for signup
module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim(),
        name: req.body.name.trim()
    };

    const newUser = new User(userData);
    newUser.save((err) => {
        if (err) { return done(err); }

        return done(null);
    });
});