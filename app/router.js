import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bicycle', { path: '/bicycles'}, function() {
    this.route('create');
    this.route('detail', { path: '/:id'}, function() {
      this.route('new-point');
    });
    this.route('edit', { path: '/:id/edit'});
  });
  this.route('history', { path: '/history'});
  this.route('error', { path: '/:error'});
  this.route('404', { path: '*path'});
  this.route('point', { path: '/points'}, function() {
    this.route('create');
    this.route('detail', { path: '/:id'}, function() {
      this.route('new-trip');
    });
    this.route('edit', { path: '/:id/edit'});
  });
});

export default Router;
