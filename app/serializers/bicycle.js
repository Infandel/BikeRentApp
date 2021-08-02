import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    points: {
      serialize: false,
      deserialize: 'records'
    },
  },
  
  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  }, 
})