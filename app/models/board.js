import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  note: DS.attr(),
  answer: DS.hasMany('answer', { async: true })

});
