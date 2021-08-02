import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const point = this.modelFor('point.detail');

    return {
      point,
      trip: {
        rentHours: '',
        point
      }
    }
  }
});