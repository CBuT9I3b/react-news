import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import { configMy } from '../config'

firebase.initializeApp(configMy);

// auth

export const auth = firebase.auth();

export const createUser = (email, password) => (
  auth.createUserWithEmailAndPassword(email, password)
);

export const signIn = (email, password) => (
  auth.signInWithEmailAndPassword(email, password)
);

export const signOut = () => (
  auth.signOut()
);

// fav list

const database = firebase.database();

const usersRef = database.ref('users');

const favList = user => usersRef.child(user + '/fav');

export const setFav = (user, item) => (
  favList(user).child(item.id).set(item)
);

export const getFav = user => (
  favList(user).once('value')
    .then(snapshot => snapshot.val())
);
