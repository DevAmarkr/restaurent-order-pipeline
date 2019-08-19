import React, {Component} from 'react';
import SignUp from './Auth/signUp';
import SignIn from './Auth/signIn';
import {Router,Route,Switch} from 'react-router-dom';
import history  from './Helper/history';
import User from './Dashboard/user'
import Restaurent from './Dashboard/restaurent'
import Safe from './Dashboard/safe'
import DelieveryBoy from './Dashboard/delieveryBoy';
import {connect} from 'react-redux'


const  NotFound = ()=>(
    <div>Not Found</div>
)



class App extends Component{

    

    render(){
        console.log(this.props.isSignedIn)
        return (
            <>
             <Router history = {history}>
                 <Switch>
                     <Route path = "/auth/signup" component = {SignUp} />
                     <Route path = "/auth/signin" component = {SignIn} />
                     <Route path = "/dash/user" component =   {User} />
                     <Route path = "/dash/restaurent" component = {Restaurent} />
                     <Route path = "/dash/pickup" component = {DelieveryBoy} />
                     <Route path = "/dash/user" component =   {Safe} />
                     <Route path ="*" component ={NotFound}/>
                 </Switch>
             </Router>  
            </>
        )
    }
}
const MapStateToProps = (state)=>{
    return {isSignedIn:state.auth.isSignedIn,role:state.auth.userRoles}
}
export default connect(MapStateToProps,null)(App)