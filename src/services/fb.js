import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
};

const version = 'v0';

export class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.database().ref(version);
    this.data = {}
  }

  itemRef(id) {
    return this.db.child(`item/${id}`)
  }

  storiesRef(type) {
    return this.db.child(`${type}stories`)
  }

  async getItem(id) {
    const item = await this.itemRef(id).once('value');
    return item.val()
  }

  async getStories(type) {
    const stories = await this.storiesRef(type).once('value');
    return this.data[type] = stories.val()
  }

  async getItems(ids, page) {
    if (page === undefined) {
      const items = await Promise.all(ids.map(id => this.getItem(id)));
      return items
    } else {
      const startId = page * 5;
      const items = await Promise.all(ids.splice(startId, 5).map(id => this.getItem(id)))
      return items
    }
  }

  async getPage(type, page) {
    const ids = await this.getStories(type);
    const items = await this.getItems(ids, page);
    console.log(items);
    return items
  }
}
