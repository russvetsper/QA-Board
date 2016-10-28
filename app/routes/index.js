import Ember from 'ember';

  var boards = [{
    id: 1,
    author: "mike",
    question: "whats up",
    answer: "chilling"
  }, {
    id: 2,
    author: "joe",
    question: "where you at",
    answer: "here"
  }, {
    id: 3,
    author: "yi",
    question: "hungry?",
    answer: "always"
  }];

  export default Ember.Route.extend({
    model() {
      return boards;
  },
});
