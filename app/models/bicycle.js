import DS from 'ember-data';

export default DS.Model.extend({
  brand: DS.attr('string'),
  pricePerHour: DS.attr('number'),

  points: DS.hasMany('point'),
  
});