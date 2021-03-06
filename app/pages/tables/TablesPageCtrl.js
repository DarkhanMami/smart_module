/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePageSize = 10;

    $scope.smartTableData = [
      {
        id: 1,
        mestorojdenie: 'Жанаталап',
        skv: 'ZHT_0001',
        gtm: 'КРС',
        email: 'Ликвидация скважины',
        age: '27.10.2018'
      },
      {
        id: 2,
        mestorojdenie: 'Гран',
        skv: 'GRN_0001',
        gtm: 'ПРС',
        email: '44',
        age: '45'
      },
      {
        id: 3,
        mestorojdenie: 'Прорва',
        skv: 'PRO_0001',
        gtm: 'ГРП',
        email: '20',
        age: '18'
      },
      {
        id: 4,
        mestorojdenie: 'Досмухамедовское',
        skv: 'DOS_0001',
        gtm: 'ПРС',
        email: '19',
        age: '20'
      },
      {
        id: 5,
        mestorojdenie: 'УАЗ',
        skv: 'UAZ_0001',
        gtm: 'КРС',
        email: '28',
        age: 'Ликвидация скважины'
      },
      {
        id: 6,
        mestorojdenie: 'Восточный УАЗ',
        skv: 'UAZ_001V',
        gtm: 'ГРП',
        email: '21',
        age: '21'
      },
      {
        id: 7,
        mestorojdenie: 'С. Балгимбаева',
        skv: 'BAL_0001',
        gtm: 'ПРС',
        email: '42',
        age: '43'
      },
      {
        id: 8,
        mestorojdenie: 'Забурунье',
        skv: 'ZAB_0001',
        gtm: 'КРС',
        email: '13',
        age: '13'
      },
      {
        id: 9,
        mestorojdenie: 'Кенбай',
        skv: 'KEN_0001',
        gtm: 'ГРП',
        email: '20',
        age: '22'
      },
      {
        id: 10,
        mestorojdenie: 'Жамансор',
        skv: 'JMS_0001',
        gtm: 'ПРС',
        email: '31',
        age: '33'
      },
      {
        id: 11,
        mestorojdenie: 'Жанаталап',
        skv: 'ZHT_0001',
        gtm: '@mark',
        email: '37',
        age: '38'
      },
      {
        id: 12,
        mestorojdenie: 'Гран',
        skv: 'GRN_0001',
        gtm: '@jacob',
        email: '45',
        age: '48'
      },
      {
        id: 13,
        mestorojdenie: 'Жоламанов',
        skv: 'Hakob',
        gtm: '@haik',
        email: '47',
        age: '48'
      },
      {
        id: 14,
        mestorojdenie: 'Макат',
        skv: 'Jirair',
        gtm: '@garegin',
        email: '39',
        age: '40'
      },
      {
        id: 15,
        mestorojdenie: 'Ботахан',
        skv: 'Bedros',
        gtm: '@krikor',
        email: 'Ликвидация скважины',
        age: '32'
      },
      {
        "id": 16,
        "mestorojdenie": "Корсак",
        "skv": "Brady",
        "gtm": "@Gibson",
        "email": "franciscagibson@comtours.com",
        "age": 11
      },
      {
        "id": 17,
        "mestorojdenie": "Байчуназ",
        "skv": "Figueroa",
        "gtm": "@Snow",
        "email": "tillmansnow@comtours.com",
        "age": 34
      },
      {
        "id": 18,
        "mestorojdenie": "Кульсары",
        "skv": "Morris",
        "gtm": "@Bryant",
        "email": "jimenezbryant@comtours.com",
        "age": 45
      },
      {
        "id": 19,
        "mestorojdenie": "Sandoval",
        "skv": "Jacobson",
        "gtm": "@Mcbride",
        "email": "sandovalmcbride@comtours.com",
        "age": 32
      },
      {
        "id": 20,
        "mestorojdenie": "Griffin",
        "skv": "Torres",
        "gtm": "@Charles",
        "email": "griffincharles@comtours.com",
        "age": 19
      },
      {
        "id": 21,
        "mestorojdenie": "Cora",
        "skv": "Parker",
        "gtm": "@Caldwell",
        "email": "coracaldwell@comtours.com",
        "age": 27
      },
      {
        "id": 22,
        "mestorojdenie": "Cindy",
        "skv": "Bond",
        "gtm": "@Velez",
        "email": "cindyvelez@comtours.com",
        "age": 24
      },
      {
        "id": 23,
        "mestorojdenie": "Frieda",
        "skv": "Tyson",
        "gtm": "@Craig",
        "email": "friedacraig@comtours.com",
        "age": 45
      },
      {
        "id": 24,
        "mestorojdenie": "Cote",
        "skv": "Holcomb",
        "gtm": "@Rowe",
        "email": "coterowe@comtours.com",
        "age": 20
      },
      {
        "id": 25,
        "mestorojdenie": "Trujillo",
        "skv": "Mejia",
        "gtm": "@Valenzuela",
        "email": "trujillovalenzuela@comtours.com",
        "age": 16
      },
      {
        "id": 26,
        "mestorojdenie": "Pruitt",
        "skv": "Shepard",
        "gtm": "@Sloan",
        "email": "pruittsloan@comtours.com",
        "age": 44
      },
      {
        "id": 27,
        "mestorojdenie": "Sutton",
        "skv": "Ortega",
        "gtm": "@Black",
        "email": "suttonblack@comtours.com",
        "age": 42
      },
      {
        "id": 28,
        "mestorojdenie": "Marion",
        "skv": "Heath",
        "gtm": "@Espinoza",
        "email": "marionespinoza@comtours.com",
        "age": 47
      },
      {
        "id": 29,
        "mestorojdenie": "Newman",
        "skv": "Hicks",
        "gtm": "@Keith",
        "email": "newmankeith@comtours.com",
        "age": 15
      },
      {
        "id": "Ликвидация скважины",
        "mestorojdenie": "Boyle",
        "skv": "Larson",
        "gtm": "@Summers",
        "email": "boylesummers@comtours.com",
        "age": 32
      },
      {
        "id": 31,
        "mestorojdenie": "Haynes",
        "skv": "Vinson",
        "gtm": "@Mckenzie",
        "email": "haynesmckenzie@comtours.com",
        "age": 15
      },
      {
        "id": 32,
        "mestorojdenie": "Miller",
        "skv": "Acosta",
        "gtm": "@Young",
        "email": "milleryoung@comtours.com",
        "age": 55
      },
      {
        "id": 33,
        "mestorojdenie": "Johnston",
        "skv": "Brown",
        "gtm": "@Knight",
        "email": "johnstonknight@comtours.com",
        "age": 29
      },
      {
        "id": 34,
        "mestorojdenie": "Lena",
        "skv": "Pitts",
        "gtm": "@Forbes",
        "email": "lenaforbes@comtours.com",
        "age": 25
      },
      {
        "id": 35,
        "mestorojdenie": "Terrie",
        "skv": "Kennedy",
        "gtm": "@Branch",
        "email": "terriebranch@comtours.com",
        "age": 37
      },
      {
        "id": 36,
        "mestorojdenie": "Louise",
        "skv": "Aguirre",
        "gtm": "@Kirby",
        "email": "louisekirby@comtours.com",
        "age": 44
      },
      {
        "id": 37,
        "mestorojdenie": "David",
        "skv": "Patton",
        "gtm": "@Sanders",
        "email": "davidsanders@comtours.com",
        "age": 26
      },
      {
        "id": 38,
        "mestorojdenie": "Holden",
        "skv": "Barlow",
        "gtm": "@Mckinney",
        "email": "holdenmckinney@comtours.com",
        "age": 11
      },
      {
        "id": 39,
        "mestorojdenie": "Baker",
        "skv": "Rivera",
        "gtm": "@Montoya",
        "email": "bakermontoya@comtours.com",
        "age": 47
      },
      {
        "id": 40,
        "mestorojdenie": "Belinda",
        "skv": "Lloyd",
        "gtm": "@Calderon",
        "email": "belindacalderon@comtours.com",
        "age": 21
      },
      {
        "id": 41,
        "mestorojdenie": "Pearson",
        "skv": "Patrick",
        "gtm": "@Clements",
        "email": "pearsonclements@comtours.com",
        "age": 42
      },
      {
        "id": 42,
        "mestorojdenie": "Alyce",
        "skv": "Mckee",
        "gtm": "@Daugherty",
        "email": "alycedaugherty@comtours.com",
        "age": 55
      },
      {
        "id": 43,
        "mestorojdenie": "Valencia",
        "skv": "Spence",
        "gtm": "@Olsen",
        "email": "valenciaolsen@comtours.com",
        "age": 20
      },
      {
        "id": 44,
        "mestorojdenie": "Leach",
        "skv": "Holcomb",
        "gtm": "@Humphrey",
        "email": "leachhumphrey@comtours.com",
        "age": 28
      },
      {
        "id": 45,
        "mestorojdenie": "Moss",
        "skv": "Baxter",
        "gtm": "@Fitzpatrick",
        "email": "mossfitzpatrick@comtours.com",
        "age": 51
      },
      {
        "id": 46,
        "mestorojdenie": "Jeanne",
        "skv": "Cooke",
        "gtm": "@Ward",
        "email": "jeanneward@comtours.com",
        "age": 59
      },
      {
        "id": 47,
        "mestorojdenie": "Wilma",
        "skv": "Briggs",
        "gtm": "@Kidd",
        "email": "wilmakidd@comtours.com",
        "age": 53
      },
      {
        "id": 48,
        "mestorojdenie": "Beatrice",
        "skv": "Perry",
        "gtm": "@Gilbert",
        "email": "beatricegilbert@comtours.com",
        "age": 39
      },
      {
        "id": 49,
        "mestorojdenie": "Whitaker",
        "skv": "Hyde",
        "gtm": "@Mcdonald",
        "email": "whitakermcdonald@comtours.com",
        "age": 35
      },
      {
        "id": 50,
        "mestorojdenie": "Rebekah",
        "skv": "Duran",
        "gtm": "@Gross",
        "email": "rebekahgross@comtours.com",
        "age": 40
      },
      {
        "id": 51,
        "mestorojdenie": "Earline",
        "skv": "Mayer",
        "gtm": "@Woodward",
        "email": "earlinewoodward@comtours.com",
        "age": 52
      },
      {
        "id": 52,
        "mestorojdenie": "Moran",
        "skv": "Baxter",
        "gtm": "@Johns",
        "email": "moranjohns@comtours.com",
        "age": 20
      },
      {
        "id": 53,
        "mestorojdenie": "Nanette",
        "skv": "Hubbard",
        "gtm": "@Cooke",
        "email": "nanettecooke@comtours.com",
        "age": 55
      },
      {
        "id": 54,
        "mestorojdenie": "Dalton",
        "skv": "Walker",
        "gtm": "@Hendricks",
        "email": "daltonhendricks@comtours.com",
        "age": 25
      },
      {
        "id": 55,
        "mestorojdenie": "Bennett",
        "skv": "Blake",
        "gtm": "@Pena",
        "email": "bennettpena@comtours.com",
        "age": 13
      },
      {
        "id": 56,
        "mestorojdenie": "Kellie",
        "skv": "Horton",
        "gtm": "@Weiss",
        "email": "kellieweiss@comtours.com",
        "age": 48
      },
      {
        "id": 57,
        "mestorojdenie": "Hobbs",
        "skv": "Talley",
        "gtm": "@Sanford",
        "email": "hobbssanford@comtours.com",
        "age": 28
      },
      {
        "id": 58,
        "mestorojdenie": "Mcguire",
        "skv": "Donaldson",
        "gtm": "@Roman",
        "email": "mcguireroman@comtours.com",
        "age": 38
      },
      {
        "id": 59,
        "mestorojdenie": "Rodriquez",
        "skv": "Saunders",
        "gtm": "@Harper",
        "email": "rodriquezharper@comtours.com",
        "age": 20
      },
      {
        "id": 60,
        "mestorojdenie": "Lou",
        "skv": "Conner",
        "gtm": "@Sanchez",
        "email": "lousanchez@comtours.com",
        "age": 16
      }
    ];

    $scope.editableTableData = $scope.smartTableData.slice(0, 36);

    $scope.peopleTableData = [
      {
        id: 1,
        mestorojdenie: 'Жанаталап',
        skv: 'ZHT_0001',
        gtm: 'КРС',
        email: 'Ликвидация скважины',
        age: '28',
        status: 'info'
      },
      {
        id: 2,
        mestorojdenie: 'Гран',
        skv: 'GRN_0001',
        gtm: 'ПРС',
        email: '44',
        age: '45',
        status: 'primary'
      },
      {
        id: 3,
        mestorojdenie: 'Прорва',
        skv: 'PRO_0001',
        gtm: 'ГРП',
        email: '20',
        age: '18',
        status: 'success'
      },
      {
        id: 4,
        mestorojdenie: 'Досмухамедовское',
        skv: 'DOS_0001',
        gtm: 'ПРС',
        email: '19',
        age: '20',
        status: 'danger'
      },
      {
        id: 5,
        mestorojdenie: 'УАЗ',
        skv: 'UAZ_0001',
        gtm: 'КРС',
        email: '28',
        age: 'Ликвидация скважины',
        status: 'warning'
      }
    ];

    $scope.metricsTableData = [
      {
        image: 'app/browsers/chrome.svg',
        browser: 'Google Chrome',
        visits: '10,392',
        isVisitsUp: true,
        purchases: '4,214',
        isPurchasesUp: true,
        percent: '45%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/firefox.svg',
        browser: 'Mozilla Firefox',
        visits: '7,873',
        isVisitsUp: true,
        purchases: '3,031',
        isPurchasesUp: false,
        percent: '28%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/ie.svg',
        browser: 'Internet Explorer',
        visits: '5,890',
        isVisitsUp: false,
        purchases: '2,102',
        isPurchasesUp: false,
        percent: '17%',
        isPercentUp: false
      },
      {
        image: 'app/browsers/safari.svg',
        browser: 'Safari',
        visits: '4,001',
        isVisitsUp: false,
        purchases: '1,001',
        isPurchasesUp: false,
        percent: '14%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/opera.svg',
        browser: 'Opera',
        visits: '1,833',
        isVisitsUp: true,
        purchases: '83',
        isPurchasesUp: true,
        percent: '5%',
        isPercentUp: false
      }
    ];

    $scope.users = [
      {
        "id": 1,
        "name": "Esther Vang",
        "status": 4,
        "group": 3
      },
      {
        "id": 2,
        "name": "Leah Freeman",
        "status": 3,
        "group": 1
      },
      {
        "id": 3,
        "name": "Mathews Simpson",
        "status": 3,
        "group": 2
      },
      {
        "id": 4,
        "name": "Buckley Hopkins",
        "group": 4
      },
      {
        "id": 5,
        "name": "Buckley Schwartz",
        "status": 1,
        "group": 1
      },
      {
        "id": 6,
        "name": "Mathews Hopkins",
        "status": 4,
        "group": 2
      },
      {
        "id": 7,
        "name": "Leah Vang",
        "status": 4,
        "group": 1
      },
      {
        "id": 8,
        "name": "Vang Schwartz",
        "status": 4,
        "group": 2
      },
      {
        "id": 9,
        "name": "Hopkin Esther",
        "status": 1,
        "group": 2
      },
      {
        "id": 10,
        "name": "Mathews Schwartz",
        "status": 1,
        "group": 3
      }
    ];

    $scope.statuses = [
      {value: 1, text: 'Good'},
      {value: 2, text: 'Awesome'},
      {value: 3, text: 'Excellent'},
    ];

    $scope.groups = [
      {id: 1, text: 'user'},
      {id: 2, text: 'customer'},
      {id: 3, text: 'vip'},
      {id: 4, text: 'admin'}
    ];

    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else return 'Not set'
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };


    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
