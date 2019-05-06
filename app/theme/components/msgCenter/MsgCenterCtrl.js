/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce) {
    $scope.users = {
      0: {
        name: 'Кайрат Кайратович',
      },
      1: {
        name: 'Гамзат Кайратович',
      },
      2: {
        name: 'Алия Кайратовна',
      },
      3: {
        name: 'Бекарслан Кайратович',
      }
    };

    $scope.notifications = [
      {
        userId: 0,
        template: '&name\ заявка на проведение ГТМ.',
        time: '1 мин назад'
      },
      {
        userId: 1,
        template: '&name\ изменил контактные данные.',
        time: '2 часа назад'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Получена новая заявка на закуп.',
        time: '5 часов назад'
      },
      {
        userId: 2,
        template: '&name\ получен ответ на комментарий.',
        time: '1 день назад'
      },
      {
        userId: 3,
        template: 'сегодня &name\ день рождение.',
        time: '2 дня назад'
      },
      {
        image: 'assets/img/comments.svg',
        template: 'Новые комментарий.',
        time: '3 дня назад'
      },
      {
        userId: 1,
        template: '&name новая заявка.',
        time: '1 неделю назад'
      }
    ];

    $scope.messages = [
      {
        userId: 3,
        text: 'After you get up and running, you can place Font Awesome icons just about...',
        time: '1 минуту назад'
      },
      {
        userId: 0,
        text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
        time: '2 часа назад'
      },
      {
        userId: 1,
        text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
        time: '10 часов назад'
      },
      {
        userId: 2,
        text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
        time: '1 день назад'
      },
      {
        userId: 3,
        text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
        time: '1 день назад'
      },
      {
        userId: 1,
        text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
        time: '2 дня назад'
      },
      {
        userId: 0,
        text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
        time: '1 неделю назад'
      }
    ];

    $scope.getMessage = function(msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
  }
})();