import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    delete(board) {
      if (confirm('delete this board?')) {
        this.sendAction('destroyBoard', board);
      }
    }
  }
});
