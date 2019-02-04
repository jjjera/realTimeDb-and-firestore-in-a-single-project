import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducer/userReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const store = createStore(middleware , rootReducer);

export default store;
