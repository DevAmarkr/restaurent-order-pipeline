const passport  = require('passport')

const signInStrategy = require('./signInStrategy');
const signUpStrategy = require('./signUpStrategy');

passport.use('local-signIn',signInStrategy);
passport.use('local-signUp',signUpStrategy)

module.exports = passport