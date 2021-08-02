"use strict";



define('bike-rent-app/adapters/application', ['exports', 'ember-data', 'bike-rent-app/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: _environment.default.backendURL,

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
});
define('bike-rent-app/app', ['exports', 'bike-rent-app/resolver', 'ember-load-initializers', 'bike-rent-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('bike-rent-app/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('bike-rent-app/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('bike-rent-app/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('bike-rent-app/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('bike-rent-app/components/bicycle-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      submitForm(e) {
        e.preventDefault();

        this.onsubmit({
          id: this.get('idBicycle'),
          brand: this.get('brand'),
          pricePerHour: this.get('pricePerHour')
        });
      }
    },

    didReceiveAttrs() {
      this._super(...arguments);

      this.setProperties({
        idBicycle: this.get('bicycle.id') ? this.get('bicycle.id') : undefined,
        brand: this.get('bicycle.brand'),
        pricePerHour: this.get('bicycle.pricePerHour')
      });
    }
  });
});
define('bike-rent-app/components/bicycle-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('bike-rent-app/components/history-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('bike-rent-app/components/point-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
      async savePoint(e) {
        e.preventDefault();
        this.get('onSubmit')({
          rentPoint: this.get('rentPoint'),
          bicycle: this.get('bicycle')
        });
      },

      searchBicycle(query) {
        return this.get('store').query('bicycle', { q: query });
      }
    },

    didReceiveAttrs() {
      this._super(...arguments);

      this.setProperties({
        rentPoint: this.get('point.rentPoint'),
        bicycle: this.get('point.bicycle')
      });
    }
  });
});
define('bike-rent-app/components/point-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('bike-rent-app/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('bike-rent-app/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('bike-rent-app/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('bike-rent-app/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('bike-rent-app/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('bike-rent-app/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('bike-rent-app/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('bike-rent-app/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('bike-rent-app/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('bike-rent-app/components/trip-form', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Validations = (0, _emberCpValidations.buildValidations)({
    rentHours: [(0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('length', {
      min: 1,
      max: 4
    })],
    rentDate: [(0, _emberCpValidations.validator)('presence', true)]
  });

  exports.default = Ember.Component.extend(Validations, {
    store: Ember.inject.service(),
    isFormValid: Ember.computed.alias('validations.isValid'),

    actions: {
      async saveTrip(e) {
        try {
          e.preventDefault();
          if (this.get('isFormValid')) {
            this.get('onSubmit')({
              rentHours: this.get('rentHours'),
              rentDate: this.get('rentDate'),
              point: this.get('trip.point')
            });
          }
        } catch (e) {
          this.send('error', e);
        }
      }
    },

    didReceiveAttrs() {
      this._super(...arguments);

      this.setProperties({
        rentHours: this.get('trip.rentHours'),
        rentDate: this.get('trip.rentDate'),
        point: this.get('trip.point')
      });
    }
  });
});
define('bike-rent-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('bike-rent-app/controllers/bicycle', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    queryParams: ["search"],
    search: ''
  });
});
define('bike-rent-app/controllers/bicycle/create', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    store: Ember.inject.service(),

    actions: {
      async saveBicycle(bicycle) {
        let newBicycle = this.get('store').createRecord('bicycle', bicycle);
        newBicycle.serialize();
        await newBicycle.save();

        this.transitionToRoute('bicycle.index');
      }
    }
  });
});
define('bike-rent-app/controllers/bicycle/detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      async deleteBicycle(bicycle) {
        try {
          await bicycle.destroyRecord();

          this.transitionToRoute('bicycle.index');
        } catch (e) {
          this.send('error', e);
        }
      }
    }
  });
});
define('bike-rent-app/controllers/bicycle/detail/new-point', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      async savePoint(e) {
        try {
          e.preventDefault();
          let newPoint = this.get('store').createRecord('point', this.get('model.point'));
          await newPoint.save();

          this.transitionToRoute('bicycle.detail', this.get('model.bicycle.id'));
        } catch (e) {
          this.send('error', e);
        }
      }
    }
  });
});
define('bike-rent-app/controllers/bicycle/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      async saveBicycle(bicycle) {
        let bicycleModel = this.get('model');
        bicycleModel.set('brand', bicycle.brand);
        bicycleModel.set('pricePerHour', bicycle.pricePerHour);

        await bicycleModel.save();

        this.transitionToRoute('bicycle.index');
      }
    }
  });
});
define('bike-rent-app/controllers/history', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    store: Ember.inject.service(),

    actions: {
      searchTrip(query) {
        return this.get('store').query('trip', { q: query });
      }
    }
  });
});
define('bike-rent-app/controllers/point', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    queryParams: ["search"],
    search: ''
  });
});
define('bike-rent-app/controllers/point/create', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    store: Ember.inject.service(),

    actions: {
      async savePoint(point) {
        try {
          let newPoint = this.get('store').createRecord('point', point);
          await newPoint.save();
          this.transitionToRoute('point.index');
        } catch (e) {
          this.send('error', e);
        }
      }
    }
  });
});
define('bike-rent-app/controllers/point/detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      // async deletePoint(point) {
      //   await point.destroyRecord();

      //   this.transitionToRoute('point.index');
      // }
      async deletePoint() {
        try {
          let trips = this.model.trips.toArray();

          await this.model.destroyRecord();

          trips.forEach(trip => {
            trip.unloadRecord();
          });

          this.transitionToRoute('point.index');
        } catch (e) {
          this.send('error', e);
        }
      }
    }
  });
});
define('bike-rent-app/controllers/point/detail/new-trip', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    store: Ember.inject.service(),

    actions: {
      async saveTrip(trip) {
        try {
          const newTrip = this.get('store').createRecord('trip', trip);

          await newTrip.save();

          this.transitionToRoute('point.detail', this.get('model.point.id'));
        } catch (e) {
          this.send('error', e);
        }
      }
    }
  });
});
define('bike-rent-app/controllers/point/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      async savePoint(point) {
        try {
          this.get('model').setProperties(point);
          await this.get('model').save();

          this.transitionToRoute('point.index');
        } catch (e) {
          this.send('error', e);
        }
      }
    }
  });
});
define('bike-rent-app/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('bike-rent-app/helpers/app-version', ['exports', 'bike-rent-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('bike-rent-app/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('bike-rent-app/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('bike-rent-app/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('bike-rent-app/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('bike-rent-app/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('bike-rent-app/helpers/get-bicycle-name', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBicycleName = getBicycleName;
  function getBicycleName(params /*, hash*/) {
    let [brand, pricePerHour] = params;
    return Ember.String.htmlSafe(`<strong>${brand}</strong>. ${pricePerHour}$`);
  }

  exports.default = Ember.Helper.helper(getBicycleName);
});
define('bike-rent-app/helpers/get-point-name', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBicycleName = getBicycleName;
  function getBicycleName(params /*, hash*/) {
    let [rentPoint, bicycleItself, averageRentTime] = params;
    return Ember.String.htmlSafe(`<strong>${rentPoint}</strong>.
  ${bicycleItself} bicycle.
   Average rent time is: ${averageRentTime}
   `);
  }

  exports.default = Ember.Helper.helper(getBicycleName);
});
define('bike-rent-app/helpers/get-trip-name', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getTripName = getTripName;
  function getTripName(params /*, hash*/) {
    let [rentHours, rentDate, pointName] = params;
    return Ember.String.htmlSafe(`Bike was rented for <strong>${rentHours} hours</strong>
    at the ${pointName} point
    on ${rentDate}
    `);
  }

  exports.default = Ember.Helper.helper(getTripName);
});
define('bike-rent-app/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('bike-rent-app/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('bike-rent-app/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('bike-rent-app/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('bike-rent-app/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('bike-rent-app/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('bike-rent-app/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define('bike-rent-app/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('bike-rent-app/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('bike-rent-app/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('bike-rent-app/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('bike-rent-app/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('bike-rent-app/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('bike-rent-app/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('bike-rent-app/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('bike-rent-app/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('bike-rent-app/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('bike-rent-app/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('bike-rent-app/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('bike-rent-app/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('bike-rent-app/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('bike-rent-app/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('bike-rent-app/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('bike-rent-app/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('bike-rent-app/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('bike-rent-app/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('bike-rent-app/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('bike-rent-app/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('bike-rent-app/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('bike-rent-app/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('bike-rent-app/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('bike-rent-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('bike-rent-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('bike-rent-app/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('bike-rent-app/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('bike-rent-app/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
define('bike-rent-app/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('bike-rent-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'bike-rent-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('bike-rent-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('bike-rent-app/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('bike-rent-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('bike-rent-app/initializers/export-application-global', ['exports', 'bike-rent-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("bike-rent-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('bike-rent-app/models/bicycle', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    brand: _emberData.default.attr('string'),
    pricePerHour: _emberData.default.attr('number'),

    points: _emberData.default.hasMany('point')

  });
});
define('bike-rent-app/models/point', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    rentPoint: _emberData.default.attr('string'),

    bicycle: _emberData.default.belongsTo('bicycle'),
    trips: _emberData.default.hasMany('trip'),

    averageRentTime: Ember.computed('trips.@each.rentHours', function () {
      return this.get('trips').reduce(function (sum, trip) {
        return sum += trip.get('rentHours');
      }, 0) / this.get('trips').get('length');
    })
  });
});
define('bike-rent-app/models/trip', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    rentHours: _emberData.default.attr('number'),
    rentDate: _emberData.default.attr('date-string'),

    point: _emberData.default.belongsTo('point')
  });
});
define('bike-rent-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('bike-rent-app/router', ['exports', 'bike-rent-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('bicycle', { path: '/bicycles' }, function () {
      this.route('create');
      this.route('detail', { path: '/:id' }, function () {
        this.route('new-point');
      });
      this.route('edit', { path: '/:id/edit' });
    });
    this.route('history', { path: '/history' });
    this.route('error', { path: '/:error' });
    this.route('404', { path: '*path' });
    this.route('point', { path: '/points' }, function () {
      this.route('create');
      this.route('detail', { path: '/:id' }, function () {
        this.route('new-trip');
      });
      this.route('edit', { path: '/:id/edit' });
    });
  });

  exports.default = Router;
});
define('bike-rent-app/routes/404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('bike-rent-app/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    actions: {
      error(error, transition) {
        if (transition) {
          transition.abort();
        }
        this.intermediateTransitionTo('error', { error: error.message });
        return true;
      }
    }
  });
});
define('bike-rent-app/routes/bicycle', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      search: {
        refreshModel: true
      }
    },
    model({ search }) {
      if (search) {
        return this.get('store').query('bicycle', { q: search });
      }
      return this.get('store').findAll('bicycle');
    },

    actions: {
      loading() {
        return false;
      }
    }
  });
});
define('bike-rent-app/routes/bicycle/create', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return Ember.Object.create({
        brand: '',
        pricePerHour: ''
      });
    }
  });
});
define('bike-rent-app/routes/bicycle/detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model({ id }) {
      return this.get('store').findRecord('bicycle', id);
    }
  });
});
define('bike-rent-app/routes/bicycle/detail/new-point', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      const bicycle = this.modelFor('bicycle.detail');

      return {
        bicycle,
        point: {
          rentPoint: '',
          rentDate: '',
          bicycle
        }
      };
    }
  });
});
define('bike-rent-app/routes/bicycle/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model({ id }) {
      return this.get('store').findRecord('bicycle', id);
    }
  });
});
define('bike-rent-app/routes/bicycle/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('bike-rent-app/routes/history', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    // I have no idea what i need to pass here 
    //from power-select to make a proper if-check (tried almost all the params)

    model({ search }) {
      if (search) {
        return this.get('store').query('trip', { q: search });
      }
      return this.get('store').findAll('trip');
    },

    actions: {
      loading() {
        return false;
      }
    }
  });
});
define('bike-rent-app/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('bike-rent-app/routes/point', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      search: {
        refreshModel: true
      }
    },

    model({ search }) {
      if (search) {
        return this.get('store').query('point', { q: search });
      }
      return this.get('store').findAll('point');
    },

    actions: {
      loading() {
        return false;
      }
    }
  });
});
define('bike-rent-app/routes/point/create', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return {
        rentPoint: '',
        rentDate: null,
        bicycle: null
      };
    }
  });
});
define('bike-rent-app/routes/point/detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model({ id }) {
      return this.get('store').findRecord('point', id);
    }
  });
});
define('bike-rent-app/routes/point/detail/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('bike-rent-app/routes/point/detail/new-trip', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      const point = this.modelFor('point.detail');

      return {
        point,
        trip: {
          rentHours: '',
          point
        }
      };
    }
  });
});
define('bike-rent-app/routes/point/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model({ id }) {
      return this.get('store').findRecord('point', id);
    }
  });
});
define('bike-rent-app/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({
    normalize(model, hash) {
      return this._super(...arguments);
    },

    keyForRelationship(key, typeClass, method) {
      if (typeClass === 'belongsTo') {
        return `${key}Id`;
      }
      return this._super(...arguments);
    },

    extractRelationship(relationshipModelName, relationshipHash) {
      return this._super(...arguments);
    },

    serializeBelongsTo(snapshot, json, relationship) {
      let key = relationship.key;
      let belongsTo = snapshot.belongsTo(key);

      key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
      json[key] = Ember.isNone(belongsTo) ? belongsTo : parseInt(belongsTo.record.get('id'));
    }
  });
});
define('bike-rent-app/serializers/bicycle', ['exports', 'ember-data', 'bike-rent-app/serializers/application'], function (exports, _emberData, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {
      points: {
        serialize: false,
        deserialize: 'records'
      }
    },

    normalize(model, hash) {
      hash = this._super(...arguments);
      return hash;
    }
  });
});
define('bike-rent-app/serializers/point', ['exports', 'ember-data', 'bike-rent-app/serializers/application'], function (exports, _emberData, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {
      trips: { embedded: "always" }
    },

    normalize(model, hash) {
      hash = this._super(...arguments);
      return hash;
    }
  });
});
define('bike-rent-app/serializers/trip', ['exports', 'bike-rent-app/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({

    normalize(model, hash) {
      hash = this._super(...arguments);
      return hash;
    }
  });
});
define('bike-rent-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('bike-rent-app/services/data', ['exports', 'bike-rent-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    getBicycles(search) {
      let queryParams = '';
      if (search) {
        queryParams = `?q=${search}`;
      }

      return fetch(`${_environment.default.backendURL}/bicycles${queryParams}`).then(response => response.json());
    },

    getBicycle(id) {
      return fetch(`${_environment.default.backendURL}/bicycles/${id}`).then(response => response.json());
    },

    deleteBicycle(bicycle) {
      return fetch(`${_environment.default.backendURL}/bicycles/${bicycle.id}`, { method: 'DELETE' });
    },

    createBicycle(bicycle) {
      return fetch(`${_environment.default.backendURL}/bicycles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bicycle)
      });
    },

    updateBicycle(bicycle) {
      return fetch(`${_environment.default.backendURL}/bicycles/${bicycle.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bicycle)
      });
    }
  });
});
define('bike-rent-app/services/moment', ['exports', 'ember-moment/services/moment', 'bike-rent-app/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { get } = Ember;

  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('bike-rent-app/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define("bike-rent-app/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "T/rSdGBy", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[8],[0,\"\\n  \"],[6,\"img\"],[10,\"src\",\"/404image.png\"],[10,\"alt\",\"Page not found\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/404.hbs" } });
});
define("bike-rent-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ragQMJOZ", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"app\"],[8],[0,\"\\n  \"],[6,\"nav\"],[10,\"class\",\"main-nav\"],[8],[0,\"\\n    \"],[6,\"h1\"],[10,\"class\",\"logo\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"        \"],[6,\"img\"],[10,\"src\",\"/Bike-icon.png\"],[10,\"alt\",\"Bike Rent\"],[8],[9],[0,\"\\n        \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Bike Rent\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[6,\"ul\"],[8],[0,\"\\n      \"],[6,\"li\"],[8],[4,\"link-to\",[\"bicycle\"],null,{\"statements\":[[0,\"Bicycles\"]],\"parameters\":[]},null],[9],[0,\"\\n      \"],[6,\"li\"],[8],[4,\"link-to\",[\"point\"],null,{\"statements\":[[0,\"Rent points\"]],\"parameters\":[]},null],[9],[0,\"\\n      \"],[6,\"li\"],[8],[4,\"link-to\",[\"history\"],null,{\"statements\":[[0,\"History\"]],\"parameters\":[]},null],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"main\"],[10,\"class\",\"app-content\"],[8],[1,[20,\"outlet\"],false],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/application.hbs" } });
});
define("bike-rent-app/templates/bicycle", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "In3WPrkL", "block": "{\"symbols\":[\"bicycle\"],\"statements\":[[6,\"div\"],[10,\"class\",\"panel-heading\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"search\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Search by Bicycle brand or rent price per hour\",[22,[\"search\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"link-to\",[\"bicycle.create\"],[[\"class\"],[\"btn-new\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"sr-only\"],[8],[0,\"Add new bicycle\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"panel-content\"],[8],[0,\"\\n  \"],[6,\"h3\"],[10,\"class\",\"panel-title\"],[8],[0,\"Bicycles models and rent price\"],[9],[0,\"\\n\\n  \"],[6,\"ul\"],[10,\"class\",\"collection\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"bicycle-item\",null,[[\"brand\",\"pricePerHour\",\"idBicycle\",\"tagName\"],[[21,1,[\"brand\"]],[21,1,[\"pricePerHour\"]],[21,1,[\"id\"]],\"li\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/bicycle.hbs" } });
});
define("bike-rent-app/templates/bicycle/create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vW/jlqsG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-bg\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"slide-out\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"slide-out-card\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"bicycle\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Back\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-heading\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n        \"],[6,\"h3\"],[8],[0,\"New Bicycle\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-content\"],[8],[0,\"\\n      \"],[1,[26,\"bicycle-form\",null,[[\"bicycle\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveBicycle\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/bicycle/create.hbs" } });
});
define("bike-rent-app/templates/bicycle/detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MPcsMwdT", "block": "{\"symbols\":[\"point\"],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-bg\"],[8],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"slide-out\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"slide-out-card\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"bicycle.index\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Back\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-heading\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n        \"],[6,\"h3\"],[8],[0,\"Model \\\"\"],[1,[22,[\"model\",\"brand\"]],false],[0,\"\\\"\"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"bicycle.edit\",[22,[\"model\",\"id\"]]],[[\"class\"],[\"btn-pop\"]],{\"statements\":[[0,\"            edit\\n\"]],\"parameters\":[]},null],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn-recessed\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteBicycle\",[22,[\"model\"]]],null],null],[8],[0,\"delete\"],[9],[0,\"\\n        \"],[9],[0,\"       \\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"details\"],[8],[0,\"\\n        \"],[6,\"p\"],[8],[0,\"\\n          \"],[6,\"strong\"],[8],[0,\"Rent is\"],[9],[0,\" \\n          \"],[1,[22,[\"model\",\"pricePerHour\"]],false],[0,\"$ per hour\\n        \"],[9],[0,\"        \\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-content\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"bicycle.detail.new-point\",[22,[\"model\",\"id\"]]],[[\"class\"],[\"btn-secondary btn-add\"]],{\"statements\":[[0,\"          Add a point\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"ul\"],[10,\"class\",\"book-list\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"points\"]]],null,{\"statements\":[[0,\"          \"],[6,\"li\"],[10,\"class\",\"book\"],[8],[0,\"\\n            \"],[6,\"p\"],[10,\"class\",\"book-title\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"point.detail\",[21,1,[]]],null,{\"statements\":[[0,\"                Rent location is: \"],[1,[21,1,[\"rentPoint\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/bicycle/detail.hbs" } });
});
define("bike-rent-app/templates/bicycle/detail/new-point", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rdw34WW2", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"modal\"],[8],[0,\"\\n  \"],[6,\"form\"],[10,\"class\",\"modal-card\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"savePoint\"],null],null],[8],[0,\"\\n    \"],[6,\"h3\"],[10,\"class\",\"modal-heading\"],[8],[0,\"Add New Rent Point for \"],[1,[22,[\"model\",\"bicycle\",\"brand\"]],false],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"modal-content\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[6,\"label\"],[8],[0,\"Rent Point is:\"],[9],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Rent Point Name\",[22,[\"model\",\"point\",\"rentPoint\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"modal-footer\"],[8],[0,\"\\n      \"],[4,\"link-to\",[\"bicycle.detail\",[22,[\"model\",\"bicycle\",\"id\"]]],[[\"class\"],[\"btn-clear\"]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"btn-submit\"],[10,\"type\",\"submit\"],[8],[0,\"Submit\"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/bicycle/detail/new-point.hbs" } });
});
define("bike-rent-app/templates/bicycle/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vlDK1XMu", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-bg\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"slide-out\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"slide-out-card\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"bicycle\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Back\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-heading\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n        \"],[6,\"h3\"],[8],[0,\"Edit Bicycle: \\\"\"],[1,[22,[\"model\",\"brand\"]],false],[0,\"\\\"\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"details\"],[8],[0,\"\\n        \"],[6,\"p\"],[8],[0,\"\\n          Rent price is \"],[6,\"strong\"],[8],[1,[22,[\"model\",\"pricePerHour\"]],false],[0,\"$ \"],[9],[0,\" per hour\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-content\"],[8],[0,\"\\n      \"],[1,[26,\"bicycle-form\",null,[[\"bicycle\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveBicycle\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/bicycle/edit.hbs" } });
});
define("bike-rent-app/templates/bicycle/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vnEjTKSR", "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/bicycle/index.hbs" } });
});
define("bike-rent-app/templates/components/bicycle-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sopr5RQD", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"submitForm\"],null],null],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"Bike Brand\"],[9],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Bike Brand\",[22,[\"brand\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"Price\"],[9],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Put Your price here\",[22,[\"pricePerHour\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-footer\"],[8],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn-submit\"],[10,\"type\",\"submit\"],[8],[0,\"save\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/components/bicycle-form.hbs" } });
});
define("bike-rent-app/templates/components/bicycle-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6nFhCWvK", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"bicycle.detail\",[22,[\"idBicycle\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"get-bicycle-name\",[[22,[\"brand\"]],[22,[\"pricePerHour\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/components/bicycle-item.hbs" } });
});
define("bike-rent-app/templates/components/history-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eJJ249P6", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"point.detail\",[22,[\"pointId\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"get-trip-name\",[[22,[\"rentHours\"]],[22,[\"rentDate\"]],[22,[\"pointName\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/components/history-item.hbs" } });
});
define("bike-rent-app/templates/components/point-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "E/dvVwbW", "block": "{\"symbols\":[\"bicycle\"],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"savePoint\"],null],null],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"Rent Point:\"],[9],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Rent Point\",[22,[\"rentPoint\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"Bicycle:\"],[9],[0,\"\\n    \"],[6,\"p\"],[10,\"class\",\"control\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"searchEnabled\",\"onchange\",\"selected\",\"search\"],[true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"bicycle\"]]],null]],null],[22,[\"bicycle\"]],[26,\"action\",[[21,0,[]],\"searchBicycle\"],null]]],{\"statements\":[[0,\"        \"],[1,[21,1,[\"brand\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-footer\"],[8],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn-submit\"],[10,\"type\",\"submit\"],[8],[0,\"Save\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/components/point-form.hbs" } });
});
define("bike-rent-app/templates/components/point-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K3af0uT1", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"point.detail\",[22,[\"idPoint\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"get-point-name\",[[22,[\"rentPoint\"]],[22,[\"bicycleItself\"]],[22,[\"avgRentTime\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/components/point-item.hbs" } });
});
define("bike-rent-app/templates/components/trip-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Uj8ipglw", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"saveTrip\"],null],null],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"Renting hours:\"],[9],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Trip Time(In hours)\",[22,[\"rentHours\"]]]]],false],[0,\"\\n    \\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"rentHours\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"rentHours\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"Renting date is:\"],[9],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"date\",\"Trip Date\",[22,[\"rentDate\"]]]]],false],[0,\"\\n    \\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"rentDate\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"rentDate\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-footer\"],[8],[0,\"\\n    \"],[4,\"link-to\",[\"point.detail\",[22,[\"point\",\"id\"]]],[[\"class\"],[\"btn-reset\"]],{\"statements\":[[0,\"Reset\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn-submit\"],[10,\"type\",\"submit\"],[8],[0,\"Save\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/components/trip-form.hbs" } });
});
define("bike-rent-app/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hNupR1ao", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[8],[0,\"\\n  \"],[6,\"img\"],[10,\"src\",\"/error.gif\"],[10,\"alt\",\"Error... Something went wrong\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/error.hbs" } });
});
define("bike-rent-app/templates/history", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ew05WYWu", "block": "{\"symbols\":[\"trip\",\"trip\"],\"statements\":[[6,\"div\"],[10,\"class\",\"panel-content\"],[8],[0,\"\\n  \"],[6,\"h3\"],[10,\"class\",\"panel-title\"],[8],[0,\"Rent history among all bicycles\"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"Rent point:\"],[9],[0,\"\\n    \"],[6,\"p\"],[10,\"class\",\"control\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"placeholder\",\"selected\",\"searchEnabled\",\"onchange\",\"search\",\"searchField\",\"allowClear\"],[\"Select a renting point\",[22,[\"trip\"]],true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"trip\"]]],null]],null],[26,\"action\",[[21,0,[]],\"searchTrip\"],null],\"rentPoint\",true]],{\"statements\":[[0,\"        \"],[1,[21,2,[\"point\",\"rentPoint\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"ul\"],[10,\"class\",\"collection\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"history-item\",null,[[\"rentHours\",\"rentDate\",\"pointName\",\"pointId\",\"tagName\"],[[21,1,[\"rentHours\"]],[21,1,[\"rentDate\"]],[21,1,[\"point\",\"rentPoint\"]],[21,1,[\"point\",\"id\"]],\"li\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/history.hbs" } });
});
define("bike-rent-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zBAAyObs", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"welcome-page\"],[8],[0,\"\\n  \"],[6,\"img\"],[10,\"src\",\"/Bike-rental.png\"],[10,\"alt\",\"Welcome\"],[8],[9],[0,\"\\n\\n  \"],[6,\"h2\"],[8],[0,\"Get your Unique Experience\"],[9],[0,\"\\n  \"],[6,\"hr\"],[8],[9],[0,\"\\n  \"],[6,\"h3\"],[8],[0,\"This is the place where you can rent a decent bicycle on cheap price\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/index.hbs" } });
});
define("bike-rent-app/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XVPmAIdI", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[8],[0,\"\\n  \"],[6,\"img\"],[10,\"src\",\"/loading.gif\"],[10,\"alt\",\"Loading...\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/loading.hbs" } });
});
define("bike-rent-app/templates/point", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "H4VkHCM8", "block": "{\"symbols\":[\"point\"],\"statements\":[[6,\"div\"],[10,\"class\",\"panel-heading\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"search\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Search by Renting point name\",[22,[\"search\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"link-to\",[\"point.create\"],[[\"class\"],[\"btn-new\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"sr-only\"],[8],[0,\"Add new Rent point\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"panel-content\"],[8],[0,\"\\n  \"],[6,\"h3\"],[10,\"class\",\"panel-title\"],[8],[0,\"Rent points with corresponding bicycles\"],[9],[0,\"\\n\\n  \"],[6,\"ul\"],[10,\"class\",\"collection\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"point-item\",null,[[\"rentPoint\",\"idPoint\",\"avgRentTime\",\"bicycleItself\",\"tagName\"],[[21,1,[\"rentPoint\"]],[21,1,[\"id\"]],[21,1,[\"averageRentTime\"]],[21,1,[\"bicycle\",\"brand\"]],\"li\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/point.hbs" } });
});
define("bike-rent-app/templates/point/create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3dRINRbo", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-bg\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"slide-out\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"slide-out-card\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"point.index\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Back\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-heading\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n        \"],[6,\"h3\"],[8],[0,\"New Rent Point\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-content\"],[8],[0,\"\\n      \"],[1,[26,\"point-form\",null,[[\"point\",\"onSubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"savePoint\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/point/create.hbs" } });
});
define("bike-rent-app/templates/point/detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PIziZOv4", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-bg\"],[8],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"slide-out\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"slide-out-card\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"point.index\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Back\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-heading\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n        \"],[6,\"h3\"],[8],[1,[21,0,[\"model\",\"rentPoint\"]],false],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n          \"],[4,\"link-to\",[\"point.edit\",[22,[\"model\",\"id\"]]],[[\"class\"],[\"btn-pop\"]],{\"statements\":[[0,\"edit\"]],\"parameters\":[]},null],[0,\"\\n\\n          \"],[6,\"button\"],[10,\"class\",\"btn-recessed\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deletePoint\"],null],null],[8],[0,\"delete\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"details\"],[8],[0,\"\\n        \"],[6,\"p\"],[8],[0,\"\\n          \"],[6,\"strong\"],[8],[0,\"Bicycle:\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"bicycle.detail\",[22,[\"model\",\"bicycle\",\"id\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,[\"model\",\"bicycle\",\"brand\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n        \"],[6,\"p\"],[8],[0,\"\\n          \"],[6,\"strong\"],[8],[0,\"Average bicycle trip time:\"],[9],[0,\"\\n          \"],[1,[22,[\"model\",\"averageRentTime\"]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[1,[26,\"outlet\",null,[[\"class\"],[\"no-overflow\"]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/point/detail.hbs" } });
});
define("bike-rent-app/templates/point/detail/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RxTShxOQ", "block": "{\"symbols\":[\"trip\"],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-content\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n      \"],[6,\"h3\"],[8],[1,[22,[\"model\",\"trips\",\"length\"]],false],[0,\" Trips\"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"point.detail.new-trip\",[22,[\"model\",\"id\"]]],[[\"class\"],[\"btn-secondary btn-add btn\"]],{\"statements\":[[0,\"Add a trip\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"ul\"],[10,\"class\",\"review-list\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"trips\"]]],null,{\"statements\":[[0,\"        \"],[6,\"li\"],[10,\"class\",\"review\"],[8],[0,\"\\n          \"],[6,\"p\"],[8],[0,\"Trip time is: \"],[6,\"strong\"],[8],[1,[21,1,[\"rentHours\"]],false],[9],[0,\" hours\"],[9],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"details\"],[8],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n              \"],[6,\"strong\"],[8],[0,\"Renting Date:\"],[9],[0,\"\\n              \"],[1,[26,\"moment-format\",[[21,1,[\"rentDate\"]],\"Do MMMM YYYY\"],null],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/point/detail/index.hbs" } });
});
define("bike-rent-app/templates/point/detail/new-trip", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EZSrS/qe", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-content\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n    \"],[6,\"h3\"],[8],[0,\"New Trip for \"],[1,[22,[\"model\",\"point\",\"rentPoint\"]],false],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[1,[26,\"trip-form\",null,[[\"trip\",\"point\",\"onSubmit\"],[[22,[\"model\",\"trip\"]],[22,[\"model\",\"point\"]],[26,\"action\",[[21,0,[]],\"saveTrip\"],null]]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/point/detail/new-trip.hbs" } });
});
define("bike-rent-app/templates/point/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8HhLrCg1", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-bg\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"slide-out\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"slide-out-card\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"point.index\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Back\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-heading\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n        \"],[6,\"h3\"],[8],[0,\"Editing \\\"\"],[6,\"strong\"],[8],[1,[22,[\"model\",\"rentPoint\"]],false],[9],[0,\"\\\" renting point\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-content\"],[8],[0,\"\\n      \"],[1,[26,\"point-form\",null,[[\"point\",\"onSubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"savePoint\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "bike-rent-app/templates/point/edit.hbs" } });
});
define('bike-rent-app/transforms/date-string', ['exports', 'ember-data/transforms/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _date.default.extend({
    moment: Ember.inject.service(),
    deserialize(serialized) {
      let date = this._super(serialized);
      if (date instanceof Date && !isNaN(date)) {
        let formattedDate = this.get('moment').moment(date).format('YYYY-MM-DD');
        return formattedDate;
      }

      return null;
    },

    serialize(deserialized) {
      let deserializedDate = deserialized ? this.get('moment').moment(deserialized).toDate() : null;
      return this._super(deserializedDate);
    }
  });
});
define('bike-rent-app/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('bike-rent-app/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('bike-rent-app/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('bike-rent-app/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('bike-rent-app/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('bike-rent-app/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('bike-rent-app/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('bike-rent-app/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('bike-rent-app/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('bike-rent-app/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('bike-rent-app/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('bike-rent-app/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('bike-rent-app/validators/messages', ['exports', 'ember-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('bike-rent-app/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('bike-rent-app/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
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

if (!runningTests) {
  require("bike-rent-app/app")["default"].create({"name":"bike-rent-app","version":"0.0.0+a4ef84ae"});
}
//# sourceMappingURL=bike-rent-app.map
