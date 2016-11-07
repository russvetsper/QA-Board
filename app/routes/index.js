import Ember from 'ember';

export default Ember.Route.extend({
  favoriteBoard: Ember.inject.service(),
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
    },

    addToFavorites(board){
      this.get('favoriteBoard').add(board);
      this.transitionTo('favorites');
    }
  }
});
