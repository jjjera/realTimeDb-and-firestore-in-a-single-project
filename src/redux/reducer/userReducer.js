import {
  ADD_DATA_STARTED,
  ADD_DATA_COMPLETED,
  ADD_DATA_ERROR
} from '../actionTypes/addDataActionTypes';

const INITIAL_STATE = {
  submitted: false,
  success: false,
  error: false,
  datas: {}
};

function userReducer(state = INITIAL_STATE, action) {
  console.log('datas are',action);
  switch (action) {
    case ADD_DATA_STARTED: {
      return {
        ...state,
        submitted: true
      };
    }
    case ADD_DATA_COMPLETED: {
      let key = action.payLoad.id;
      let data = action.payLoad.data;
      state.datas[key] = data;
      return {
        ...state,
        submitted: false,
        success: true
      };
    }
    case ADD_DATA_ERROR: {
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
