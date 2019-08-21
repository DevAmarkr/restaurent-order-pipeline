import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'


const PrivateRoute = ({component:Component,isSignedIn,...rest})=>{
 
  return (
      <Route  {...rest} render = {props=>
        
        isSignedIn? (
        <Component {...props}/>
        ):(
         <Redirect
         to={{
          pathname: "/auth/signin",
          state: { from: props.location }
        }}/>
        )
      } />
  )
}

const MapStateToProps = (state)=>{
  return {isSignedIn:state.auth.isSignedIn}
}

export default connect(MapStateToProps,null)(PrivateRoute)