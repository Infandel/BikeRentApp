import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async savePoint(e) {
      try {
        e.preventDefault();
        let newPoint = this.get('store').createRecord('point', this.get('model.point'));
        await newPoint.save();

        this.transitionToRoute('bicycle.detail', this.get('model.bicycle.id'));
      }
      catch(e) {
        this.send('error', e);
      }
    }
  }
});