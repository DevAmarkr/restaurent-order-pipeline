import React from 'react';
import {connect} from 'react-redux';
import {orderFood,getUserFood } from '../Action/food'

class User extends React.Component{
   state ={
     name:'',
     item:'',
     address:'',
     quantity:''
   }
    //nameChange
    nameChange = (e)=>{
     this.setState({
       name:e.target.value
     })
    }

    //itemChange
    itemChange =(e)=>{
      this.setState({
        item:e.target.value
      })
    }

    //addressChange

    addressChange = (e) =>{
      this.setState({
        address:e.target.value
      })
    }

    //quantityChange

    quantityChange = (e)=>{
     this.setState({
       quantity:e.target.value
     })
    }

    onSubmit =(e)=>{
      e.preventDefault()

      let data ={
        name:this.state.name,
        item:this.state.item,
        billingAddress:this.state.address,
        quantity:this.state.quantity
      }
      this.props.orderFood(data)
      this.setState({
        name:'',
        item:'',
        address:'',
        quantity:''
      })
      
    }


  componentDidMount(){
    this.props.getUserFood()
  }

  render(){
    console.log(this.props.notice)
    return (
      <>
    
      <div style ={{textAlign:"center"}}>
      <h2>Please order food</h2>
      {!this.props.confirm?null:<h4 style ={{backgroundColor:"yellow",color:"#777",padding:"1rem",fontSize:"1rem"}}>your order is confirmd</h4>}
      {!this.props.notice?null:<h4 style ={{backgroundColor:"green",color:"white",padding:"1rem",fontSize:"1rem"}}>{this.props.notice}</h4>}
      </div>

      
      <form onSubmit ={this.onSubmit}   class="ui form" style ={{padding:"10rem"}}>

          <h4 class="ui dividing header">Shipping Information</h4>

          <div class="field">
            <label>Name</label>
            <div class="two fields">
            <div class="field">
            <input
             type="text" 
             name="shipping[first-name]" 
             placeholder="First Name"
             value ={this.state.name}
             onChange ={this.nameChange}/>
         </div>

        <div class="field">
           <input
           type="text" 
           name="shipping[last-name]" 
           placeholder="Food name"
           value ={this.state.item}
           onChange ={this.itemChange}
           />
        </div>
        </div>
       </div>

      <div class="field">
        <label>Billing Address</label>
        <div class="fields">
          <div class="twelve wide field">

            <input
             type="text" 
             name="shipping[address]" 
             placeholder="Street Address"
             value ={this.state.address}
             onChange ={this.addressChange}/>
            
          </div>
        </div>
      </div>

  <div class="two fields">

      <div class="field">
        <label>quantity</label>
          <select  value ={this.state.quantity} onChange ={this.quantityChange} class="ui fluid dropdown">
            <option>1</option>
            <option >2</option>
            <option>3</option>
          </select>
      </div>
      </div>
      <button class="ui button" tabindex="0">Submit Order</button>
    </form>
      </>
  )
  }
  
}

const mapStateToProps = (state)=>{
  return {notice:state.foodPost.notice,confirm:state.userFood.orderConfirm}
}
export default connect(mapStateToProps,{orderFood,getUserFood })(User)