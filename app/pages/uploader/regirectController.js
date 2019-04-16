(function () {
  'use strict';

  angular.module('BlurAdmin.pages.new_page').controller('regirectController', regirectController); 

    /** @ngInject */
    function regirectController($scope, $state, $uibModal, baProgressModal) {
        
        // $scope.openProgressDialog = function () {
        //     $state.go('new_page');
        // }  

        $scope.open = baProgressModal.open;
        
    }
})();


