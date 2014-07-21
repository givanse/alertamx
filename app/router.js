import Ember from 'ember';

var Router = Ember.Router.extend({
  location: AlertaMxENV.locationType
});

Router.map(function() {
  this.route('alerts', {path: '/'});
  this.route('alerts-xml');
  this.route('map');
  this.route('help');
  this.route('messages');
  this.route('preferences');
});

export default Router;
