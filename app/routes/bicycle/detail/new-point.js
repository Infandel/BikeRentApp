import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const bicycle = this.modelFor('bicycle.detail');

    return {
      bicycle,
      point: {
        rentPoint: '',
        rentDate: '',
        bicycle
      }
    }
  }
});

