define([
  'app',
  'backbone',
  'Backbone.Marionette'

], function (
  app,
  Backbone,
  Marionette
) {
  'use strict';

  var HeaderView =  Marionette.ItemView.extend({
  });

  var HeaderController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
    },

    show: function () {
      var headerView = new HeaderView();
//      this.region.show(headerView);
    }

  });
  return HeaderController;
});
