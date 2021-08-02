import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async savePoint(point) {
      try {
        this.get('model').setProperties(point);
        await this.get('model').save();

        this.transitionToRoute('point.index');
      }
      catch(e) {
        this.send('error', e);
      }
    }
  }
});