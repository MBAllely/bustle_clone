import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(story) {
      if(confirm('Are sure you want to kill this bitch?!')) {
        this.sendAction('destroyStory', story);
      }
    }
  }
});
