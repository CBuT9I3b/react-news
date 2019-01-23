import firebase from 'firebase/app'
import 'firebase/database'

import { configHN } from '../config'

const firebaseHN = firebase.initializeApp(configHN, 'firebaseHN');

const databaseHN = firebaseHN.database();

const version = 'v0';

const databaseHNRef = databaseHN.ref(version);

const itemRef = id => databaseHNRef.child('item/' + id);

const storiesRef = type => databaseHNRef.child(type + 'stories');

const getItem = id => (
  itemRef(id).once('value')
    .then(snapshot => snapshot.val())
);

const getItems = ids => (
  Promise.all(
    ids.splice(0, 10).map(id => getItem(id))
  )
);

export const getStories = type => (
  storiesRef(type).once('value')
    .then(snapshot => (
      getItems(snapshot.val())
        .then(values => values)
    ))
);
