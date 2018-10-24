import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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
const firebaseMatches = firebaseDB.ref('matches');
const firebasePlayers = firebaseDB.ref('players');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');

export {
  firebase,
  firebaseMatches,
  firebasePlayers,
  firebasePromotions,
  firebaseTeams,
  firebaseDB
};
