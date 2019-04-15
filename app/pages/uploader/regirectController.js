(function () {
  'use strict';

  angular.module('BlurAdmin.pages.smart_index').controller('regirectController', regirectController); 

    /** @ngInject */
    function regirectController($scope, $state, $uibModal, baProgressModal) {
        
        // $scope.openProgressDialog = function () {
        //     $state.go('smart_index');
        // }  

        $scope.open = baProgressModal.open;
        
    }
})();


