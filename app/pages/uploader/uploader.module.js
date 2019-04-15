(function () {
  'use strict';

  angular.module('BlurAdmin.pages.uploader', [])
    .config(routeConfig)
    var uploader = angular.module('my-uploader', [
    'angularFileUpload'
]);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('uploader', {
        url: '/uploader',
        templateUrl: 'app/pages/uploader/uploader.html',
        //controller: 'TablesPageCtrl',
        controller: 'ModalsPageCtrl',
        title: 'Загрузка данных',
        sidebarMeta: {
          icon: 'ion-archive',
          order: 800,
          // abstract: true,
        },
      });
  }

})();