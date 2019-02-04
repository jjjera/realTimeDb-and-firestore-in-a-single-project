// import formReducer from './formReducer';
import userReducer from './userReducer';
import {combineReducer} from 'redux';

const rootreducer = combineReducer({userState: userReducer});

export default rootreducer;
