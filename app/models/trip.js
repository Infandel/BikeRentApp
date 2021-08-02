import DS from 'ember-data';

export default DS.Model.extend({
  rentHours: DS.attr('number'),
  rentDate: DS.attr('date-string'),
  
  point: DS.belongsTo('point'),
});