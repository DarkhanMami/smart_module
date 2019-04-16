(function () {
  'use strict';

  angular.module('BlurAdmin.pages.new_page', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('new_page', {
          url: '/new_page',
          templateUrl: 'app/pages/new_page/new_page.html',
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