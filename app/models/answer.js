import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  answer: DS.attr(),
  board: DS.belongsTo('board', { async: true }),

});
