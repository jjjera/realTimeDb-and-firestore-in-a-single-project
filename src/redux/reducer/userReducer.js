import {
  ADD_USER_STARTED,
  ADD_USER_COMPLETED,
  ADD_USER_ERROR
} from '../actionTypes/addDataActionTypes';

const INITIAL_STATE = {
  submitted: false,
  success: false,
  error: false,
  datas: {}
};

function userReducer(state = INITIAL_STATE, action) {
  // console.log('datas are',action);
  // console.log('state is',state);
  switch (action.type) {
    case ADD_USER_STARTED: {
      return {
        ...state,
        submitted: true
      };
    }
    case ADD_USER_COMPLETED: {
      let key = action.payLoad.id;
      let data = action.payLoad.data;
      state.datas[key] = data;
      return {
        ...state,
        submitted: false,
        success: true
      };
    }
    case ADD_USER_ERROR: {
      return {
        ...state,
        submitted: false,
        error: true
      };
    }
    default:
      return state;
  }
}

export default userReducer;
