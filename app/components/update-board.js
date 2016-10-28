import Ember from 'ember';

export default Ember.Component.extend({
  updateBoardForm: false,
  actions: {
    updateBoardForm() {
      this.set('updateBoardForm', true);
    },
    update(board) {
      var params = {
        question: this.get('question'),
      };

      this.set('updateBoardForm', false);
      this.sendAction('update', board, params);
    }
  }
});
