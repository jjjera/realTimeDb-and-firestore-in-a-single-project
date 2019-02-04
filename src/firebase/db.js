import { realTime } from './firebase';

//USER API
export const addUser = (values) => realTime.ref('users').push(values);
