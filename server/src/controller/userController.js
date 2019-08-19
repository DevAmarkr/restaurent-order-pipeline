const express = require('express');
const router = express.Router();
const {User} = require('../model/userModel')



router.post('/signUp',async(req,res)=>{
    try {
        console.log(req.body)
        let { email, password, roles } = req.body;
        let currentUser = await User.findOne({ email });
        currentUser
          ? res.send({
              notice: "Email is already in use!",
              status: 422,
              success: false
            })
          : (user = new User({ email, password, roles }));
    
        let newUser = await user.save();
        let token = await newUser.generateToken();
        res
          .send({
            message:'You are now successfully registerd',
            success:true,
            status: 201,
            token: token,
            userRoles: newUser.roles
          });
    
      } catch (err) {
        res.send({
          success: false,
          status: 501,
          error: err.message
        });
      }
})

router.post('/signIn',async(req,res)=>{
    try {
        let { email, password } = req.body;
        let currentUser = await User.findByCredentials(email, password);
        let token = await currentUser.generateToken();
        res
          .json({
            status: 200,
            success: true,
            userRoles: currentUser.roles,
            token: token
          })
          .status(200);
      } catch (err) {
        res
          .json({
            notice:err || "something went wrong",
            status: 422,
            success:false
          })
      }
})
router.delete('logout',(req,res)=>{

})



module.exports = {
    userController: router
}