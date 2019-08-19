import food from '../Network/axios'

export const orderFood = (data) => async(dispatch)=>{
    const Response = await food({
       method:'post',
       url:'/food/order',
       data:data,
       headers:{
           "x-auth":localStorage.getItem("token")
       } 
    })
    if(Response.data.success === true){
        dispatch({type:'ORDER_FOOD',payload:Response.data})
    }else{
        alert(Response.data.notice)
    }
}

export const orderList = ()=>async(dispatch)=>{
    const Response = await food({
        method:'get',
        url:'/food/getAllOrder',
        headers:{
            "x-auth":localStorage.getItem("token")
        } 
     })
     if(Response.data.success === true){
         dispatch({type:'ORDER_LIST',payload:Response.data.data})
     }else{
         alert(Response.data.notice)
     }
}

export const orderConfirm = (id,status)=>async(dispatch)=>{
    const Response = await food({
        method:'put',
        url:`/food/orderConfirm/${id}?orderConfirm=true`,
        headers:{
            "x-auth":localStorage.getItem("token")
        } 
     })
     console.log(Response)
     if(Response.data.success === true){
         dispatch({type:'ORDER_CONFIRM',payload:Response.data.data})
       alert(Response.data.notice)
     }else{
        alert('something went wrong')
     }
}

export const getUserFood = ()=> async(dispatch)=>{
    const Response = await food({
        method:'get',
        url:'/food/getUserFood',
        headers:{
            "x-auth":localStorage.getItem("token")
        } 
     })
     console.log(Response.data)
     if(Response.data.success === true){
         dispatch({type:'GET_USER_FOOD',payload:Response.data.data})
     }else{
         alert(Response.data.notice)
     } 
}

// axios({ method: 'get', url: 'your URL', headers: { Authorization: `Bearer ${token}` } })