const express = require('express');
const mongoose = require('mongoose');
const {User} = require('../model/userModel')

module.exports = {
    $authenticateUser: (req, res, next) => {
        let token = req.header("x-auth");
        console.log(token)
        console.log(User)
        User.findByToken(token)
          .then(user => {
            if (!user) {
              res
                .send({
                  notice: "Invalid token",
                  status: 500,
                  success:false
                })
            } else {
              req.user = user;
              req.token = token;
              next();
            }
          })
          .catch(err => {
            res.send({
              notice: "Token invalid",
              success:false,
              status:401
            });
          });
      },
    
}