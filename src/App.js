import React from 'react';

import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import { updateUser, apiRequest } from "./actions/user-action"; 

import { createSelector } from "reselect"; 
class App extends React.Component {

  componentDidMount() {
    setTimeout(() => {
        this.props.onApiRequest(); 
    }, 2000);
    
  }

  onUpdateUser1 = () => {
    this.props.onUpdateUser('hyeonwoo'); 
    document.querySelector('input').value = ''; 
  }

  onUpdateUser2 = (e) => {
    this.props.onUpdateUser(e.target.value); 
  }
  render() {
    return (
    <div>
      <h1>Update user</h1>  
      <div>{this.props.userPlusProp}</div><br/>
      <button onClick={this.onUpdateUser1}>click</button>
      <input type="text" onChange={this.onUpdateUser2}/>
      <h2>{this.props.user}</h2>
    </div>
  );
  }
}

const productsSelector = createSelector(
  state =>state.products,
  products => products
); 
const userSelector = createSelector(
  state =>state.user,
  user => user
); 
const mapStateToProps = createSelector(
  productsSelector, 
  userSelector, 
  (products, user) => ({
    products,
    user 
  })
)

const mapActionsToProps = {
    onUpdateUser: updateUser, 
    onApiRequest: apiRequest
}

export default connect(mapStateToProps, mapActionsToProps)(App);
