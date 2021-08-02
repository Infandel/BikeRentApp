import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  rentHours: [
    validator('presence', true),
    validator('length', {
      min: 1,
      max: 4
    })
  ],
  rentDate: [
    validator('presence', true)
  ]
});

export default Component.extend(Validations, {
  store: service(),
  isFormValid: computed.alias('validations.isValid'),

  actions: {
    async saveTrip(e) {
      try {
        e.preventDefault();
        if (this.get('isFormValid')) {
        this.get('onSubmit')({
          rentHours: this.get('rentHours'),
          rentDate: this.get('rentDate'),
          point: this.get('trip.point')
        })
        }
      }
      catch(e) {
        this.send('error', e);
      }
    },
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      rentHours: this.get('trip.rentHours'),
      rentDate: this.get('trip.rentDate'),
      point: this.get('trip.point')
    });
  },
});
