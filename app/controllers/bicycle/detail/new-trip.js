import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveTrip() {
      try {
        let newTrip = this.get('store').createRecord('trip', this.get('model.trip'));
        await newTrip.save();

        this.transitionToRoute('bicycle.detail', this.get('model.bicycle.id'));
      }
      catch(e) {
        this.send('error', e);
      }
    }
  }
});