import Ajax from '../Network/axios';
import history from '../Helper/history'

export const signUp = (formValue)=>async(dispatch)=>{
   const Response = await Ajax({
        method: 'post',
        url: '/user/signUp',
        data:formValue
     });
     if(Response.data.success === false){
         alert(Response.data.notice);
         history.push('/auth/signup')
     }else{
         localStorage.setItem('token',Response.data.token)
         dispatch({type:'SIGN_UP',payload:Response.data});
        //check role and transfer to the role basded dashboard
        if(Response.data.userRoles ==='restaurent'){
            history.push('/dash/restaurent')    
        }
        if(Response.data.userRoles ==='user'){
            history.push('/dash/user')    
        }
        if(Response.data.userRoles ==='safe'){
            history.push('/dash/safe')    
        }
        if(Response.data.userRoles ==='pickup'){
            history.push('/dash/pickup')    
        }
        
     }
    

}

   

export const signIn = (formValue)=>async (dispatch)=>{
    const Response = await Ajax({
        method: 'post',
        url: '/user/signIn',
        data:formValue
     });
     console.log(Response)
     if(Response.data.success === false){
         alert(Response.data.notice||'something went wrong');
         history.push('/auth/signin')
     }else{
         localStorage.setItem('token',Response.data.token)
         dispatch({type:'SIGN_IN',payload:Response.data});
        //check role and transfer to the role basded dashboard
        if(Response.data.userRoles ==='restaurent'){
            history.push('/dash/restaurent')    
        }
        if(Response.data.userRoles ==='user'){
            history.push('/dash/user')      
        }
        if(Response.data.userRoles ==='safe'){
            history.push('/dash/safe')    
        }
        if(Response.data.userRoles ==='pickup'){
            history.push('/dash/pickup')    
        }
     }
}
 export const logout = (forValue)=>{
    return {
        type:'SIGN_IN',
    }
 }