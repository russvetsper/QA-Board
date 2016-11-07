import Ember from 'ember';

export default Ember.Component.extend({
  
  heading: Ember.computed('answer.author', 'answer.rating', function() {
    return this.get('answer.author') + ' - ' + this.get('answer.rating');
  })
});
