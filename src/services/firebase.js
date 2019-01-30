import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
};

firebase.initializeApp(config);

const database = firebase.database();

const version = 'v0';

const databaseRef = database.ref(version);

const itemRef = id => databaseRef.child(`item/${id}`);

const storiesRef = type => databaseRef.child(`${type}stories`);

const getItem = id => (
  itemRef(id).once('value')
    .then(snapshot => snapshot.val())
);

const getItems = (ids, limit) => (
  Promise.all(
    ids.splice(0, limit).map(id => getItem(id))
  ).then(items => items)
);

export const getStories = (type, limit) => (
  storiesRef(type).once('value')
    .then(snapshot => getItems(snapshot.val(), limit))
);
