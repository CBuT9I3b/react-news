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
    let item = await this.itemRef(id).once('value');
    return item.val()
  }

  async getStories(type) {
    let stories = await this.storiesRef(type).once('value');
    let idsWithoutNull = stories.val().filter(id => id !== null);
    let uniqueIds = new Set(idsWithoutNull);
    let newStories = Array.from(uniqueIds.values());
    this.data[type] = newStories;
    return newStories
  }

  async getItems(ids, page) {
    if (page === undefined) {
      return await Promise.all(ids.map(id => this.getItem(id)))
    } else {
      let startId = page * 10;
      return await Promise.all(ids.splice(startId, 10).map(id => this.getItem(id)))
    }
  }

  async getPage(type, page) {
    let ids = this.data[type];

    if (ids) {
      ids = this.data[type]
    } else {
      ids = await this.getStories(type)
    }

    return await this.getItems(ids, page)
  }
}
