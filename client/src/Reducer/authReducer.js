const ININTIAL_STATE = {
    isSignedIn:false
}

export const authReducer = (state= ININTIAL_STATE,action)=>{
    switch(action.type){
        case 'SIGN_UP':
        return {...state,isSignedIn:true,...action.payload}   
        break
        case 'SIGN_IN':
            return {...state,isSignedIn:true,...action.payload}
            break
        default:
        return state
    }
    
}