// import formReducer from './formReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootreducer = combineReducers({userState: userReducer});

export default rootreducer;
