import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    board: this.store.findAll('board'),
    answer: this.store.findAll('answer')
  });
  },

  actions: {
     saveBoard(params) {
       var newBoard = this.store.createRecord('board', params);
       newBoard.save();
       this.transitionTo('index');
       //save feature
     }
  }
});
