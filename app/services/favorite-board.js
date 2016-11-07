import Ember from 'ember';

export default Ember.Service.extend({
  board: [],

  add(board) {
    this.get('board').pushObject(board);
  }
});
