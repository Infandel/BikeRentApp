import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  actions: {
    async savePoint(point) {
      try {
        let newPoint = this.get('store').createRecord('point', point);
        await newPoint.save();
        this.transitionToRoute('point.index');
      }
      catch(e) {
        this.send('error', e)
      }
    },
  }
});