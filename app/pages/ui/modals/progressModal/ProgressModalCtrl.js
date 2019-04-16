/**
 * Created by n.poltoratsky
 * on 24.06.2016.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ui.modals')
        .controller('ProgressModalCtrl', ProgressModalCtrl);

    function ProgressModalCtrl($timeout, baProgressModal, $state) {

        baProgressModal.setProgress(0);

        (function changeValue() {
            if (baProgressModal.getProgress() >= 100) {
                $state.go('new_page')
                baProgressModal.close();
            } else {
                baProgressModal.setProgress(baProgressModal.getProgress() + 10);
                $timeout(changeValue, 250);
            }
        })();
    }
})();

