(function () {
  'use strict';

  angular.module('BlurAdmin.pages.new_page', [])
      .config(routeConfig);


  .controller('regirectController', ['$scope', function ($scope) {
      $scope.loadXl = function () {
        if (!!$scope.filename) return;
        console.log("Test");
        console.log($scope.filename);
        var reader = new FileReader();
        reader.onload = function (e) {
          var data = new Uint8Array(e.target.result);
          var wb = XLSX.read(data, { type: 'array' });

          var ws = wb.Sheets[wb.SheetNames[0]];
          var res = XLSX.utils.sheet_to_json(ws, { header: 6 });
          console.log(res);
        };
        reader.readAsArrayBuffer($scope.filename);

      };
    }]);

})();