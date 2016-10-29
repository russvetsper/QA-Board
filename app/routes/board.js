import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('board', params.board_id);
  },
  actions: {
    update(board, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          board.set(key,params[key]);
        }
      });
      board.save();
      this.transitionTo('index');
    },
    destroyRental(board) {
      board.destroyRecord();
      this.transitionTo('index');
    }
  }
});
