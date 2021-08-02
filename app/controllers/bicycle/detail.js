import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async deleteBicycle(bicycle) {
      try {
        await bicycle.destroyRecord();

        this.transitionToRoute('bicycle.index');
      }
      catch(e) {
        this.send('error', e);
      }     
    }
  }
});
