import {db} from '../../../src/firebase/db';
// import { db } from '../../../firebase';
import {
  ADD_USER_STARTED,
  ADD_USER_COMPLETED,
  ADD_USER_ERROR
} from '../actionTypes/addDataActionTypes';

export const addDataStart = () => ({
  type: ADD_USER_STARTED
});
export const addDataSuccess = (data) => ({
  type: ADD_USER_COMPLETED,
  payLoad: data
});
export const addDataFailure = () => ({
  type: ADD_USER_ERROR
});

export const addData = (values) => {
  return (dispatch) =>
    new Promise(function(resolve, reject) {
      dispatch(addDataStart());
      db.addUser(values)
        .then((snapshot) => {
          let data = {id: snapshot.key, data: values};
          dispatch(addDataSuccess(data));
          resolve('User added successfully');
        })
        .catch((error) => {
          dispatch(addDataFailure(error));
          reject(error);
        });
    });
};
