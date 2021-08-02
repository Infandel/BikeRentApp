import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  
  model({ search,}) {
    if (search) {
      return this.get('store').query('point', { q: search })
    }
    return this.get('store').findAll('point')       
  },

  
  actions: {
    loading() {
      return false;
    }
  }
});