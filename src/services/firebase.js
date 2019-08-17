import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
};

const version = 'v0';

export class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.database().ref(version)
  }

  itemRef(id) {
    return this.db.child(`item/${id}`)
  }

  storiesRef(type) {
    return this.db.child(`${type}stories`)
  }

  async getItem(id) {
    let item = await this.itemRef(id).once('value');
    return item.val()
  }

  async getStories(type) {
    let stories = await this.storiesRef(type).once('value');
    return stories.val()
  }
}
