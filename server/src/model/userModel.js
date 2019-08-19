const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema=  mongoose.Schema;

const userSchema = new Schema({

    roles: {
        type: String,
        enum: ['restaurent','pickup','safe','user'],
        default: "user"
      },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens: [
        {
          token: {
            type: String
          }
        }
      ],
},{timestamps:true})

userSchema.pre("save", function(next) {
    let user = this;
    if (user.isNew) {
      bcrypt
        .genSalt(10)
        .then(function(salt) {
          bcrypt.hash(user.password, salt).then(function(encrypted) {
            user.password = encrypted;
            next();
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    } else {
      next();
    }
  });

  
userSchema.statics.findByCredentials = function(email, password) {
    let User = this;
    return User.findOne({ email: email }).then(function(user) {
      if (!user) {
        return Promise.reject("check your email and password");
      }
      return bcrypt.compare(password, user.password).then(function(result) {
        if (result) {
          return Promise.resolve(user);
        } else {
          return Promise.reject("check your email and password");
        }
      });
    });
  };

  
userSchema.methods.generateToken = function() {
    let user = this;
    let payloadData = {
      userId: this._id
    };
    let jwtToken = jwt.sign(payloadData, "supersecret");
    user.tokens.push({ token: jwtToken });
    return user.save().then(function() {
      return jwtToken;
    });
  };

  userSchema.statics.findByToken = function(token) {
    let User = this;
    let tokenData;
    try {
      tokenData = jwt.verify(token, "supersecret");
    } catch (err) {
      return Promise.reject(err.message);
    }
    return User.findOne({
      _id: tokenData.userId,
      "tokens.token": token
    });
  };

const User = mongoose.model('User',userSchema)



module.exports= {
    User
}