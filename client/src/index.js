import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './config/reactReduxConfig'

render(

    <Provider store = {store}>
       <PersistGate loading={null} persistor={persistor}>
         <App/>
       </PersistGate>
    </Provider>
      
 
   
    , document.querySelector('#root')
)   