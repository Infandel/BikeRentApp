import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  rentPoint: DS.attr('string'),
  
  bicycle: DS.belongsTo('bicycle'),
  trips: DS.hasMany('trip'),


  averageRentTime: computed('trips.@each.rentHours', function() {
    return this.get('trips').reduce(function(sum, trip) {
      return sum += trip.get('rentHours');
    }, 0) / this.get('trips').get('length');
  })
});
