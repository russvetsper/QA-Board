import Ember from 'ember';

export default Ember.Component.extend({
  updateBoardForm: false,
  actions: {
    updateBoardForm() {
      this.set('updateBoardForm', true);
    },
    update(board) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        note: this.get('note'),
      };

      this.set('updateBoardForm', false);
      this.sendAction('update', board, params);
    }
  }
});
