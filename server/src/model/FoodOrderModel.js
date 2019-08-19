const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    name:{
        type:String,
        require:true
    },
    item:{
        type:String,
        required:true
    },
    billingAddress:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    orderConfirm:{
        type:Boolean,
        default:false
    },
    orderPrepare:{
        type:Boolean,
        default:false,
    },
    orderPickedUp:{
        type:Boolean,
        default:false
    },
    orderDelieverd:{
      type:Boolean,
      default:false
    }
},{timestamps:true});

const Food = mongoose.model('Food',FoodSchema)
module.exports = {
    Food
}