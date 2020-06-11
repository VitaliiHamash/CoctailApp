import {createStore, combineReducers, applyMiddleware} from 'redux';
import foodReducer from './reducers/foodReducer';
import listReducer from './reducers/listReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const rootReducer = combineReducers({
    foodReducer: foodReducer,
    listReducer: listReducer
})


const configureStore = () => createStore(rootReducer, applyMiddleware(logger,thunk));



export default configureStore;