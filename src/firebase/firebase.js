import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import {fbConfig} from '../config';

const config = fbConfig.devConfig;
console.log('config is',config);

// console.log('condition is',!firebase.apps.length);
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


const fireStore = firebase.firestore();
const realTime  = firebase.database();
// const storage = firebase.storage();
// const auth = firebase.auth();

export {realTime, fireStore};
