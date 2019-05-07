/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .controller('MailDetailCtrl', MailDetailCtrl);

  /** @ngInject */
  function MailDetailCtrl($stateParams, mailMessages, $scope, toastr) {
    var vm = this;
    vm.mail = mailMessages.getMessageById($stateParams.id);
    vm.label = $stateParams.label;

    $scope.showSuccessMsg = function() {
      toastr.success('Уведомление принято в обработку успешно!');
    };

    $scope.showInfoMsg = function() {
      toastr.info("You've got a new email!", 'Information');
    };

    $scope.showErrorMsg = function() {
      toastr.error("Уведомление отклонено!", 'Спам');
    };

    $scope.showWarningMsg = function() {
      toastr.warning('Уведомление успешно перемещено в данную категорию.', 'Анализ');
    };



  }

})();
