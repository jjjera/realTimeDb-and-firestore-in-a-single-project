import {db} from '../../../src/firebase/db';
// import { db } from '../../../firebase';
import {
  ADD_DATA_STARTED,
  ADD_DATA_COMPLETED,
  ADD_DATA_ERROR
} from '../actionTypes/addDataActionTypes';

export const addDataStart = () => ({
  type: ADD_DATA_STARTED
});
export const addDataSuccess = (data) => ({
  type: ADD_DATA_COMPLETED,
  payLoad: data
});
export const addDataFailure = () => ({
  type: ADD_DATA_ERROR
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
