'use strict';

define('bike-rent-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n13:50 - \'query\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/bicycle-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bicycle-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/bicycle-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bicycle-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/history-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/history-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/trip-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/trip-form.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/bicycle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bicycle.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/bicycle/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bicycle/create.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/bicycle/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bicycle/detail.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/bicycle/detail/new-trip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bicycle/detail/new-trip.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/bicycle/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bicycle/edit.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/history.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-bicycle-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-bicycle-name.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-trip-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-trip-name.js should pass ESLint\n\n');
  });

  QUnit.test('models/bicycle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/bicycle.js should pass ESLint\n\n');
  });

  QUnit.test('models/point.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/point.js should pass ESLint\n\n');
  });

  QUnit.test('models/trip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/trip.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/404.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/404.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bicycle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bicycle.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bicycle/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bicycle/create.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bicycle/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bicycle/detail.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bicycle/detail/new-trip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bicycle/detail/new-trip.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bicycle/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bicycle/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bicycle/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bicycle/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/history.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n5:20 - \'hash\' is defined but never used. (no-unused-vars)\n9:38 - \'method\' is defined but never used. (no-unused-vars)\n16:46 - \'relationshipHash\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/bicycle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/bicycle.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/trip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/trip.js should pass ESLint\n\n');
  });

  QUnit.test('services/data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/data.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/date-string.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/date-string.js should pass ESLint\n\n');
  });
});
define('bike-rent-app/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('bike-rent-app/tests/integration/components/bicycle-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | bicycle-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "MkRs0Sn0",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"bicycle-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4/a2x7dd",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"bicycle-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('bike-rent-app/tests/integration/components/bicycle-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | bicycle-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "c0YMDkLa",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"bicycle-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "2++4aN5d",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"bicycle-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('bike-rent-app/tests/integration/components/history-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | history-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "GG1PBOIM",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"history-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ns4NnAv3",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"history-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('bike-rent-app/tests/integration/components/trip-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | trip-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UbL1MPln",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"trip-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "salbW0Ks",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"trip-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('bike-rent-app/tests/integration/helpers/get-bicycle-by-id-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | get-bicycle-by-id', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mMjUO23Y",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-bicycle-by-id\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('bike-rent-app/tests/integration/helpers/get-bicycle-name-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | get-bicycle-name', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "+S4uShE6",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-bicycle-name\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('bike-rent-app/tests/integration/helpers/get-trip-name-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | get-trip-name', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QudJ5aFa",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-trip-name\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('bike-rent-app/tests/test-data/server', ['json-server'], function (jsonServer) {
  'use strict';

  const server = jsonServer.create(); /* eslint-disable no-console */
  // eslint-disable-next-line no-undef

  const router = jsonServer.router('./tests/test-data/db.json');
  const middlewares = jsonServer.defaults();

  // Set default middlewares (logger, static, cors and no-cache)
  server.use(middlewares);

  // To handle POST, PUT and PATCH you need to use a body-parser
  // You can use the one used by JSON Server
  server.use(jsonServer.bodyParser);

  function responseInterceptor(req, res, next) {
    var originalSend = res.send;

    res.send = function () {
      let body = arguments[0];

      if (req.method === 'DELETE') {
        let urlSegms = req.url.split('/');
        let idStr = urlSegms[urlSegms.length - 1];
        let id = parseInt(idStr);
        id = isNaN(id) ? idStr : id;

        let newBody = Object.assign({}, JSON.parse(body));
        newBody.id = id;
        arguments[0] = JSON.stringify(newBody);
      }

      originalSend.apply(res, arguments);
    };

    next();
  }

  server.use(responseInterceptor);

  // Use default router
  server.use(router);

  let port = 3000;
  server.listen(port, () => {
    console.log(`JSON Server is running at port ${port}`);
  });
});
define('bike-rent-app/tests/test-helper', ['bike-rent-app/app', 'bike-rent-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('bike-rent-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/bicycle-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/bicycle-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/bicycle-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/bicycle-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/history-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/history-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/trip-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/trip-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-bicycle-by-id-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-bicycle-by-id-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-bicycle-name-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-bicycle-name-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-trip-name-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-trip-name-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-data/server.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-data/server.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/bicycle-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/bicycle-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/bicycle/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/bicycle/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/bicycle/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/bicycle/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/bicycle/detail/new-trip-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/bicycle/detail/new-trip-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/bicycle/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/bicycle/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/history-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/history-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/bicycle-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/bicycle-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/point-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/point-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/trip-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/trip-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/404-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/404-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/bicycle-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bicycle-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/bicycle/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bicycle/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/bicycle/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bicycle/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/bicycle/detail/new-trip-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bicycle/detail/new-trip-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/bicycle/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bicycle/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/bicycle/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bicycle/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/history-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/history-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/bicycle-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/bicycle-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/trip-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/trip-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/date-string-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/date-string-test.js should pass ESLint\n\n');
  });
});
define('bike-rent-app/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('bike-rent-app/tests/unit/controllers/bicycle-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | bicycle', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:bicycle');
      assert.ok(controller);
    });
  });
});
define('bike-rent-app/tests/unit/controllers/bicycle/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | bicycle/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:bicycle/create');
      assert.ok(controller);
    });
  });
});
define('bike-rent-app/tests/unit/controllers/bicycle/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | bicycle/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:bicycle/detail');
      assert.ok(controller);
    });
  });
});
define('bike-rent-app/tests/unit/controllers/bicycle/detail/new-trip-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | bicycle/detail/new-trip', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:bicycle/detail/new-trip');
      assert.ok(controller);
    });
  });
});
define('bike-rent-app/tests/unit/controllers/bicycle/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | bicycle/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:bicycle/edit');
      assert.ok(controller);
    });
  });
});
define('bike-rent-app/tests/unit/controllers/history-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | history', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:history');
      assert.ok(controller);
    });
  });
});
define('bike-rent-app/tests/unit/models/bicycle-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | bicycle', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('bicycle', {}));
      assert.ok(model);
    });
  });
});
define('bike-rent-app/tests/unit/models/point-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | point', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('point', {}));
      assert.ok(model);
    });
  });
});
define('bike-rent-app/tests/unit/models/trip-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | trip', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('trip', {}));
      assert.ok(model);
    });
  });
});
define('bike-rent-app/tests/unit/routes/404-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | 404', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:404');
      assert.ok(route);
    });
  });
});
define('bike-rent-app/tests/unit/routes/bicycle-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | bicycle', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bicycle');
      assert.ok(route);
    });
  });
});
define('bike-rent-app/tests/unit/routes/bicycle/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | bicycle/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bicycle/create');
      assert.ok(route);
    });
  });
});
define('bike-rent-app/tests/unit/routes/bicycle/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | bicycle/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bicycle/detail');
      assert.ok(route);
    });
  });
});
define('bike-rent-app/tests/unit/routes/bicycle/detail/new-trip-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | bicycle/detail/new-trip', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bicycle/detail/new-trip');
      assert.ok(route);
    });
  });
});
define('bike-rent-app/tests/unit/routes/bicycle/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | bicycle/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bicycle/edit');
      assert.ok(route);
    });
  });
});
define('bike-rent-app/tests/unit/routes/bicycle/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | bicycle/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bicycle/index');
      assert.ok(route);
    });
  });
});
define('bike-rent-app/tests/unit/routes/history-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | history', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:history');
      assert.ok(route);
    });
  });
});
define('bike-rent-app/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('bike-rent-app/tests/unit/serializers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('application');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = Ember.run(() => store.createRecord('application', {}));

      let serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('bike-rent-app/tests/unit/serializers/bicycle-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | bicycle', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('bicycle');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = Ember.run(() => store.createRecord('bicycle', {}));

      let serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('bike-rent-app/tests/unit/serializers/trip-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | trip', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('trip');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = Ember.run(() => store.createRecord('trip', {}));

      let serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('bike-rent-app/tests/unit/services/data-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | data', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:data');
      assert.ok(service);
    });
  });
});
define('bike-rent-app/tests/unit/transforms/date-string-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('transform:date-string', 'Unit | Transform | date string', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let transform = this.owner.lookup('transform:date-string');
      assert.ok(transform);
    });
  });
});
define('bike-rent-app/config/environment', [], function() {
  var prefix = 'bike-rent-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('bike-rent-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
