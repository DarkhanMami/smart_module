/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
    'BlurAdmin.pages.new_page',
    'BlurAdmin.pages.uploader',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/new_page');

    baSidebarServiceProvider.addStaticItem({
      title: 'Вход',
      icon: 'ion-document',
      subMenu: [{
        title: 'Войти в систему',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Регистрация',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'Профиль',
        stateRef: 'profile'
      }, {
        title: '404 Стр.',
        fixedHref: '404.html',
        blank: true
      }]
    });
    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Menu Level 1',
    //   icon: 'ion-ios-more',
    //   subMenu: [{
    //     title: 'Menu Level 1.1',
    //     disabled: true
    //   }, {
    //     title: 'Menu Level 1.2',
    //     subMenu: [{
    //       title: 'Menu Level 1.2.1',
    //       disabled: true
    //     }]
    //   }]
    // });
  }

})();
