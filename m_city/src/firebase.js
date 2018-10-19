import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

import { apiKey } from './keys';

const config = {
  apiKey: apiKey,
  authDomain: 'keyspress-m-city.firebaseapp.com',
  databaseURL: 'https://keyspress-m-city.firebaseio.com',
  projectId: 'keyspress-m-city',
  storageBucket: 'keyspress-m-city.appspot.com',
  messagingSenderId: '568637583690'
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

firebaseDB
  .ref('matches')
  .once('value')
  .then(snapshot => {
    console.log(snapshot.val());
  });
