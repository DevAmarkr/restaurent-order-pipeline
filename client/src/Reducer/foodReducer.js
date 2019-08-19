export const orderFood = (state ={},action) =>{
    if(action.type === 'ORDER_FOOD'){
        return {...state,...action.payload}
    }else{
        return state
    }
}
export const orderList = (state=[],action)=>{
    if(action.type ==='ORDER_LIST'){
      
        return [...state,...action.payload]
    }else{
        return state
    }
}
export const orderConfirm = (state={},action)=>{
    if(action.type ==='ORDER_LIST'){
      
        return {...state,...action.payload}
    }else{
        return state
    }
}
export const getUserFood = (state = {},action)=>{
    if(action.type ==='GET_USER_FOOD'){
        return {...state,...action.payload}
    }
    else{
        return state
    }
}