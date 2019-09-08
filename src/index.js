import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import thunk from 'redux-thunk'; 
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'; 
import { Provider } from "react-redux"; 

// reducer
import productsReducer from "./reducers/products-reducer"; 
import userReducer from "./reducers/user-reducer"; 

const allReducers = combineReducers({
    products: productsReducer, 
    user: userReducer
}); 

const allStoreEnhancers = compose(
    applyMiddleware(thunk), 
    window.devToolsExtension && window.devToolsExtension()
); 

// store
const store = createStore(allReducers, {
    products: [{ name: 'iPhone'}], 
    user: 'Michael' 
}, allStoreEnhancers); 

console.log(store.getState()); 

// action 
// const updateUserAction = {
//     type: 'updateUser', 
//     payload: {
//         user: 'John'
//     }
// }; 

// store.dispatch(updateUserAction); 

ReactDOM.render(<Provider store={store}><App aRandomProps="whatever"/></Provider>, document.getElementById("root"));

