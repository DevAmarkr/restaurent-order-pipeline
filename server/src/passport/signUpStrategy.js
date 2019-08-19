const Strategy = require('passport-local').Strategy;
const {User} = require('../model/userModel')

const signUpStartegy = new Strategy(function(email,password,done){
  done('hello','hello')
})

module.exports = signUpStartegy