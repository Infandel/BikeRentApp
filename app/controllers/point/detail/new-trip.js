import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  actions: {
    async saveTrip(trip) {
      try {
        const newTrip = this.get('store').createRecord('trip', trip);

        await newTrip.save();

        this.transitionToRoute('point.detail', this.get('model.point.id'));
      }
      catch(e) {
        this.send('error', e);
      }
    }
  }
});