import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    // async deletePoint(point) {
    //   await point.destroyRecord();

    //   this.transitionToRoute('point.index');
    // }
    async deletePoint() {
      try {
        let trips = this.model.trips.toArray();

        await this.model.destroyRecord();

        trips.forEach(trip => {
          trip.unloadRecord();
        });

        this.transitionToRoute('point.index');
      }
      catch(e) {
        this.send('error', e);
      }
    }
  }
});