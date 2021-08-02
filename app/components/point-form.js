import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    async savePoint(e) {
      e.preventDefault();
      this.get('onSubmit')({
        rentPoint: this.get('rentPoint'),
        bicycle: this.get('bicycle')
      });
    },

    searchBicycle(query) {
      return this.get('store').query('bicycle', { q: query })
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      rentPoint: this.get('point.rentPoint'),
      bicycle: this.get('point.bicycle')
    });
  },
});

