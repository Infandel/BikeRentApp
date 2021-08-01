import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  brand: DS.attr('string'),
  pricePerHour: DS.attr('number'),

  trips: DS.hasMany('trip'),

  averageRentTime: computed('trips.@each.rentHours', function() {
    return this.get('trips').reduce(function(sum, trip) {
      return sum += trip.get('rentHours');
    }, 0) / this.get('trips').get('length');
  })
});