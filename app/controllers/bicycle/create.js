import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  
  actions: {
    async saveBicycle(bicycle) {
      let newBicycle = this.get('store').createRecord('bicycle', bicycle);
      newBicycle.serialize();
      await newBicycle.save();

      this.transitionToRoute('bicycle.index');
    },
  }
});
