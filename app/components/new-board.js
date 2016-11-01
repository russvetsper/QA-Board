import Ember from 'ember';

export default Ember.Component.extend({
  addNewBoard: false,
  actions: {
    boardFormShow() {
      this.set('addNewBoard', true);
    },

    saveBoard() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        note: this.get('note')




      };
      this.set('addNewBoard', false);
      this.sendAction('saveBoard', params);
    }
  }
});
