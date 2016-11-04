import Ember from 'ember';

export function boardPopularity(params/*, hash*/) {
  var board = params[0];

  if(board.get('answer').get('length') >= 2) {
   return Ember.String.htmlSafe('<span class="glyphicon  glyphicon-thumbs-up"></span>');
 }
}

export default Ember.Helper.helper(boardPopularity);
