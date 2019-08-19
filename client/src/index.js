import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App';
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk'
import reducers from './Reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(reduxThunk)
        ))

render(

   <Provider store = {store}>
      <App/>
   </Provider>
   
    , document.querySelector('#root')
)   