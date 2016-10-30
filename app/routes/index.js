import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    rentals: this.store.findAll('model'),
    reviews: this.store.findAll('answer')
  });
  },

  actions: {
   saveBoard(params) {
     var newBoard = this.store.createRecord('board', params);
     newBoard.save();
     this.transitionTo('index');
   },
   saveAnswer(params) {
     var newAnswer = this.store.createRecord('answer', params);
     newAnswer.save();
     this.transitionTo('index');
   }
  }
});
