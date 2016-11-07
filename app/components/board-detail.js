import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedAnswer: Ember.computed.sort('board.answer', 'sortBy'),


  actions: {
    delete(board) {
      if (confirm('delete this board?')) {
        this.sendAction('destroyBoard', board);
      }
    }
  }
});
