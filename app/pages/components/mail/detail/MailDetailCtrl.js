/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .controller('MailDetailCtrl', MailDetailCtrl);

  /** @ngInject */
  function MailDetailCtrl($stateParams, mailMessages, $scope, toastr, $uibModal, baProgressModal, $state, $location) {
    var vm = this;
    vm.mail = mailMessages.getMessageById($stateParams.id);
    vm.label = $stateParams.label;

    $scope.showSuccessMsg = function() {
      toastr.success('Уведомление принято в обработку успешно!');
      $location.path('components/mail');
    };

    $scope.showInfoMsg = function() {
      toastr.info("You've got a new email!", 'Information');
    };

    $scope.showErrorMsg = function() {
      toastr.error("Уведомление отклонено!", 'Спам');
      $location.path('components/mail');
    };

    $scope.showWarningMsg = function() {
      toastr.warning('Уведомление успешно перемещено в данную категорию.', 'Анализ');
    };

    $scope.openModal = function (page, size) {
        $uibModal.open({
          animation: true,
          templateUrl: page,
          controller: MailDetailCtrl,
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });
    };
    $scope.addComment = function (modal) {
        modal.$close();
        $location.path('components/mail/important');
    };

  }

})();
