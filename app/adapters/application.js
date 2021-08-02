import DS from 'ember-data';
import ENV from 'bike-rent-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,

  init() {
    this._super(...arguments);
    this.set('headers', {
      'Content-Type': 'application/json'
    });
  },
  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(...arguments);
    if (modelName === 'bicycle' && requestType === 'findRecord' && id) {
      url += '?_embed=points';
    }

    if (modelName === 'point' && requestType === 'findRecord' && id) {
      url += '?_embed=trips';
    }

    return url;
  }
});

