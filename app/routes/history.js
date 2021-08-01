import Route from '@ember/routing/route';

export default Route.extend({

// I have no idea what i need to pass here 
//from power-select to make a proper if-check (tried almost all the params)

  model({ selected }) {
    if (selected) {
      return this.get('store').query('trip', { q: selected });
    }
    return this.get('store').findAll('trip')
  },



  actions: {
    loading() {
      return false;
    }
  }, 
});