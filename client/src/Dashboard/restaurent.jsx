import React from 'react';
import {connect} from 'react-redux';
import {orderList,orderConfirm} from '../Action/food'
import { relative } from 'path';

class Restaurent extends React.Component{
  componentDidMount(){
   this.props.orderList()
   
  }
  onClicks =(id)=>{
    this.props.orderConfirm(id)
  }

  renderButton =(id)=>{
    return this.props.list.map(data=>{
       if(data.orderConfirm){
         return (
           <>
           <button className ="ui green button">order is preparing</button>
           </>
         )
       }else{
         return (
           <>
           <button  onClick = {()=>this.onClicks(data._id,data)}  className ="ui red button">confirm</button>
           </>
         )
       }
     })
  }

  renderList =()=>{
    if(this.props.list){
        return this.props.list.map(data=>{
            return (
              <div class="ui card">
                <div class="content">
                  <div class="header">item:{data.item}</div>
                  <div class="meta">
                    <span class="category">quantity:  {data.quantity}</span>
                  </div>
                  <div class="description">
                    <p>Address   {data.billingAddress}</p>
                  </div>
                </div>
                <div class="extra content">
                  <div class="right floated author">
                   <h3>Name {data.name}</h3>
                  </div>
                </div>
               {this.renderButton(data._id)}
              </div>
            )
          })
    
    }
  }



  render(){
    console.log(this.props.list)
  return (
    <div style ={{display:"flex",justifyContent:"center",alignContent:"center",position:"absolute",top:"10rem",padding:"3rem"}}>
    {this.renderList()}
    </div>
  )
  }
  
}
const mapStateToProps = (state)=>{
  return {list:state.list}
}

export default connect(mapStateToProps,{orderList,orderConfirm})(Restaurent)