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
    this.data[type] = stories.val();
    return stories.val()
  }

  async getItems(ids, page) {
    let items;
    if (page === undefined) {
      items = await Promise.all(ids.map(id => this.getItem(id)));
      return items.filter(id => id !== null)
    } else {
      let startId = page * 10;
      let rangeId = ids.slice(startId, startId + 10);
      items = await Promise.all(rangeId.map(id => this.getItem(id)));
      return items.filter(id => id !== null)
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
