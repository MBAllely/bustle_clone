import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    newStoryForm() {
      this.set('addNewStory', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
        image: this.get('image'),
      };
      this.set('addNewStory', false);
      this.sendAction('save2', params);
    }
  }
});
