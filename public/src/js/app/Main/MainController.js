define([
  'app',
  'Backbone.Marionette',

  'Header/HeaderController',
  'Main/MainEventController',
  'Navigation/NavigationController'

], function (
  app,
  Marionette,

  HeaderController,
  MainEventController,
  NavigationController

) {
  'use strict';

  var MainLayout =  Marionette.Layout.extend({
    initialize: function () {
    },
    template: '#mainTemplate',
    regions: {
      header: '.jsHeaderRegion',
      navigation: '.jsNavigationRegion'
    }
  });

  var MainController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
      this.mainEventSandbox = new MainEventController();
    },

    _getLayout: function () {
      var self = this;
      var layout = new MainLayout();

      self.listenTo(layout, {
        'render': function () { self._showWidgets(layout); }
      });

      return layout ;
    },

    show: function () {
      var self = this;
      self.region.show(self._getLayout());
    },

    _showWidgets: function (layout) {
      this._showNavigation(layout.navigation);
    },
    _showNavigation: function (region) {
      var navigationController = 
        new NavigationController({
          mainEventSandbox: this.mainEventSandbox,
          region: region 
        });
    }
  });
  return MainController;
});
