import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update(board, params) {
      this.sendAction('update', board, params);
    },

    delete(board) {
      if (confirm('delete this board?')) {
        this.sendAction('destroyBoard', board);
      }
    }
  }
});
