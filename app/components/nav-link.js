import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ["nav_link"],

  action: "toggleDrawer",

  route: null,

  click: function() {
    var route = this.get("route");
    this.sendAction("action", route);
  }
});
