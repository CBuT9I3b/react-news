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

  userRef(id) {
    return this.db.child(`user/${id}`)
  }

  storiesRef(type) {
    return this.db.child(`${type}stories`)
  }

  async getItem(id) {
    let item = await this.itemRef(id).once('value');
    return item.val()
  }

  async getUser(id) {
    let user = await this.userRef(id).once('value');
    return user.val()
  }

  async getStories(type) {
    let stories = await this.storiesRef(type).once('value');
    return stories.val()
  }
}
