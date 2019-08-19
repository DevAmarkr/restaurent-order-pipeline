const express = require('express');
const {Food} = require('../model/FoodOrderModel');
const {$authenticateUser} = require('../middleware/auth')
const router = express.Router();

router.post('/order',$authenticateUser ,async(req,res)=>{
    try {
        let {name,item,billingAddress,quantity} = req.body;
        
        let userId =  req.user.id;
     
        let newFood = new Food({
            name,item,billingAddress,quantity,userId
        })
        
        let data = await newFood.save()
        console.log(data)
        res.send({
            notice:'your order is placed please wait we will confirm soon',
            success:true,
            status:201,
            data
        })
  } catch (error) {
        res.send({
            notice:'something went wrong'|| error,
            success:false,
            status:500
        })
    }
})

router.get('/getAllOrder', $authenticateUser,async(req,res)=>{
    try {
        let foodOrderList =  await Food.find();
        res.send({
            data:foodOrderList,
            success:true,
            status:200,
        })
    } catch (error) {
        res.send({
            notice:error||'something went wrong',
            success:false,
            status:500
        })
    }
})

router.put('/orderConfirm/:id',$authenticateUser, async(req,res)=>{
  try {
      let {orderConfirm} = req.query;
    //   console.log(req.query)
      let findFood = await Food.findOneAndUpdate({_id:req.params.id},{$set:{orderConfirm:orderConfirm}},{new:true})
      res.send({
          notice:'order is preparing',
          success:true,
          status:201
      })
  } catch (error) {
      res.send({
          notice:error||"something went wrong",
          success:false,
          status:500
      })
  }
})

router.get('/getUserFood', $authenticateUser, async(req,res)=>{
    try {
        let userFood = await Food.findOne({userId:req.user.id});
        res.send({
            data:userFood,
            status:200,
            success:true
        })
    } catch (error) {
        res.send({
            notice:error||"something went wrong",
            success:false,
            status:500
        })
    }
})

module.exports = {
    foodController:router
}
