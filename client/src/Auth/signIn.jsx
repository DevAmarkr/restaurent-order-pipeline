import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../Action/auth'


class SignIn extends React.Component{

   state = {
       email:'',
       password:'',
       emailError :'',
       passwordError:''
   }

   emailHandle = (e)=>{
       this.setState({
           email:e.target.value
       })
   }

   passwordHandle = (e)=>{
    this.setState({
        password:e.target.value
    })
}

 onSubmit = (e)=>{
   const data = {
     email:this.state.email,
     password:this.state.password
   }
   this.props.signIn(data)

     e.preventDefault()

 }

 onEmailValidation = (e)=>{
    const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    
    const matchEmail = e.target.value.match(regEmail)
   
     if(!matchEmail){
         this.setState({
             emailError:'plase enter valid email id',
         })
     }
     if(matchEmail){
         this.setState({
             emailError:''
         })
     }
}
  onPasswordValidation=(e)=>{
    const matchPass = e.target.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    if(!matchPass){
        this.setState({
            passwordError:'plase enter valid password',
        })
    }
    if(matchPass){
        this.setState({
            passwordError:''
        })
    }
  }
  renderComponent =()=>{
    return (
        <div className="ui middle aligned center aligned grid" style = {{padding:"6rem"}}>
        <div className="column"style ={{width:"30rem"}}>
          <h2 className="ui teal image header">
            <div className="content">
              Sign In to your account
            </div>
          </h2>

          <form onSubmit ={this.onSubmit} className="ui large form" >
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input 
                  type="text" 
                  name="email" 
                  placeholder="E-mail address"
                  value = {this.state.email}
                  onChange= {this.emailHandle}
                  autoComplete ="Off"
                  onMouseOut={this.onEmailValidation}/>
                </div>
              </div>
              <div style ={{color:"red"}} >{this.state.emailError?this.state.emailError:null}</div>

              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                   type="password" 
                   name="password" 
                   placeholder="Password"
                   value = {this.state.password}
                   onChange ={this.passwordHandle}
                   onMouseOut={this.onPasswordValidation}/>
                </div>
              </div>
              <div style ={{color:"red"}}>{this.state.passwordError?this.state.passwordError:null}</div>

              <button className="ui fluid large teal submit button">Login</button>
            </div>
           <div className="ui error message"></div>
           </form>
      
          <div className="ui message">
            New to us? <Link to ="/auth/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    )
  }


    render(){
        return <div>{this.renderComponent()}</div>
            
    }
  
};

export default connect(null,{signIn})(SignIn);