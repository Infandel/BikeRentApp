import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | point/detail/new-trip', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:point/detail/new-trip');
    assert.ok(route);
  });
});
