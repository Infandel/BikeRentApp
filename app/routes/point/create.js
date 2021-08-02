import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      rentPoint: '',
      rentDate: null,
      bicycle: null
    };
  }
});