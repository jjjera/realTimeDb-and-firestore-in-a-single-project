import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import {fbConfig} from '../config';

//Storing Firebase developement configuration(dash board)
const config = fbConfig.devConfig;

//Initialize Firebase in the application
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

//Fire store creation
const fireStore = firebase.firestore();

//Real time db creation
const realTime  = firebase.database();

export {realTime, fireStore};
