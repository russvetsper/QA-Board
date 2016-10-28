import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShowing: false,
  actions: {
    answerShow: function() {
      this.set('isAnswerShowing', true);
    },
    delete(board) {
      if (confirm('delete this board?')) {
        this.sendAction('destroyBoard', board);
      }
    }
  }
});
