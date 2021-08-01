import Component from '@ember/component';
// import { computed } from '@ember/object';
// import { validator, buildValidations } from 'ember-cp-validations';


// const Validations = buildValidations({

  // rentHours: [
  //   validator('ds-error'),
  //   validator('presence', {
  //     presence: true,
  //     dependentKeys: ['model.trip.rentPoint']
  //   })
    // validator('number', {
    //   allowString: false,
    //   integer: true,
    //   gt: 1,
    //   lte: 1000
    // })
  // ],
//   rentPoint: [
//     validator('presence', true),
//     validator('length', {
//       min: 1,
//       max: 64
//     })
//   ],
  // rentDate: [
  //     validator('presence', true, { debounce: 100 }),
//     validator('format', {
//       regex: /^\d{4}-\d{2}-\d{2}$/,
//       message: 'Date should be in a format YYYY-MM-DD'
//     })
//   ]
// });

export default Component.extend({
  // isFormValid: computed.alias('validations.isValid'),
  actions: {
    async saveTrip(e) {
      e.preventDefault();
      // if (this.get('isFormValid')) {
        this.get('onSubmit')({
          rentPoint: this.get('rentPoint'),
          rentHours: this.get('rentHours'),
          rentDate: this.get('rentDate'),
          bicycle: this.get('bicycle')
        });
      // }
    },
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      rentPoint: this.get('trip.rentPoint'),
      rentHours: this.get('trip.rentHours'),
      rentDate: this.get('trip.rentDate'),
      bicycle: this.get('trip.bicycle')
    });
  },
});
