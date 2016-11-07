import Ember from 'ember';

export function boardPopularity(params/*, hash*/) {
  var board = params[0];

  if(board.get('answer').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon  glyphicon-triangle-bottom"></span>');
  }
  else{
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-triangle-top"></span>');
  }
}

export default Ember.Helper.helper(boardPopularity);
