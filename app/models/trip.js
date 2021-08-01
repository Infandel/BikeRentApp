import DS from 'ember-data';

export default DS.Model.extend({
  rentPoint: DS.attr('string'),
  rentHours: DS.attr('number'),
  rentDate: DS.attr('date-string'),
  bicycleId: DS.attr('number'),
  
  bicycle: DS.belongsTo('bicycle')
});