import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('board');
  },

  actions: {
   saveBoard(params) {
     var newBoard = this.store.createRecord('board', params);
     newBoard.save();
     this.transitionTo('index');
   },

    destroyBoard(board) {
      board.destroyRecord();
      this.transitionTo('index');
    }
  }
});
