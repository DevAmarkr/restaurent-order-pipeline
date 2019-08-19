import {combineReducers} from 'redux'
import {authReducer} from './authReducer';
import {orderFood,orderList,orderConfirm,getUserFood } from './foodReducer';



export default combineReducers({
    auth:authReducer,
    foodPost:orderFood,
    list:orderList,
    confirList:orderConfirm,
    userFood:getUserFood 
})