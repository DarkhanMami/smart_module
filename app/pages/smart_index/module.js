(function () {
  'use strict';

  angular.module('BlurAdmin.pages.smart_index', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('smart_index', {
          url: '/smart_index',
          templateUrl: 'app/pages/smart_index/smart_index.html',
          controller: 'SmartPageCtrl',
          title: 'Модуль',
          sidebarMeta: {
            icon: 'fa fa-bar-chart',
            order: 800,
            // abstract: true,
          },
        });
  }

})();