import {createStore, applyMiddleware,compose} from 'redux';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import reducers from '../Reducer'
import {persistStore,persistReducer } from 'redux-persist';
import reduxThunk from 'redux-thunk'

const reducer = persistReducer({key:'root',storage},reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer,{},composeEnhancers(applyMiddleware(createLogger(),reduxThunk)))
let persistor = persistStore(store)
export {store,persistor}