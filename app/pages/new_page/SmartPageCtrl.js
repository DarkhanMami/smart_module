/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.new_page')
      .controller('SmartPageCtrl', SmartPageCtrl);

  /** @ngInject */
  function SmartPageCtrl($element, baConfig, layoutPaths, $scope, $rootScope, $filter, editableOptions, editableThemes, $http) {
    $scope.remont_types = [];
    $scope.selectedRowTable = 0;
    $scope.byMonth = true;
    $scope.rem_type = "Общее";
    $scope.kpi_otm_effect = Math.floor(Math.random() * 100);
    $scope.kpi_economy = Math.floor(Math.random() * 100);
    $scope.kpi_rent = Math.floor(Math.random() * 100);
   
    $scope.kpi_poteri2015 = 0;
    $scope.kpi_prostoi2015 = 0;
    $scope.kpi_poteri2019 = 0;
    $scope.kpi_prostoi2019 = 0;

    $scope.otkl_poteri = 0;
    $scope.otkl_poteri_procent = 0;

    $scope.kpi_name1 = "Эффект от ОТМ (дополонительная добыча)";
    $scope.kpi_name2 = "Количество ГТМ";
    $scope.kpi_name3 = "Отклонения прогноз/факт";
    $scope.kpi_name4 = "";

    $scope.allMatrixData1 = true;
    $scope.allMatrixData2 = true;
    $scope.allMatrixData3 = true;

    $scope.allMatrixOtkl1 = false;
    $scope.allMatrixOtkl2 = false;
    $scope.allMatrixOtkl3 = false;

    $scope.matrix_data = {};
    $scope.matrix = [];


    $scope.change_kpi = function() {
        $scope.kpi_otm_effect = Math.floor(Math.random() * 100);
        $scope.kpi_economy = Math.floor(Math.random() * 100);
        $scope.kpi_rent = Math.floor(Math.random() * 100);
    }


    var layoutColors = baConfig.colors;
    var chart_data = {};
    function handleLegendClick( graph ) {
        var tmp_chart = graph.chart;
        if (graph.hidden) {
            tmp_chart.showGraph(graph);
        } else{
            tmp_chart.hideGraph(graph);
        }
    }
    var chart = AmCharts.makeChart("zoomAxisChart", {
      "type": "serial",
      "theme": "none",
      "language": "ru",
      "color": layoutColors.defaultText,
      "precision": 2,
      "valueAxes": [{
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "id": "v1",
        "title": "Добыча жидкости",
        "position": "left",
        "autoGridCount": false,
        "labelFunction": function(value) {
          return "" + Math.round(value) + "м³";
        }
      }, {
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "id": "v2",
        "title": "Удельный баланс",
        "gridAlpha": 0,
        "position": "right",
        "autoGridCount": false
      }, {
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "id": "v3",
        "title": "Простои (дни)",
        "gridAlpha": 0,
        "position": "left",
        "autoGridCount": false
      }, {
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "id": "v4",
        "title": "Потери (тонны)",
        "gridAlpha": 0,
        "position": "left",
        "autoGridCount": false
      }],
      "graphs": [
      // {
      //   "id": "g1",
      //   "valueAxis": "v1",
      //   "dataDateFormat": "YYYY-MM-DD",
      //   "bullet": "round",
      //   "bulletBorderAlpha": 1,
      //   "bulletColor": layoutColors.defaultText,
      //   color: layoutColors.defaultText,
      //   "bulletSize": 5,
      //   "hideBulletsCount": 50,
      //   "lineThickness": 2,
      //   "lineColor": layoutColors.primary,
      //   "type": "smoothedLine",
      //   "dashLength": 0.1,
      //   "title": "Исторические данные по добыче",
      //   "useLineColorForBulletBorder": true,
      //   "valueField": "market1",
      //   "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      // }, {
      //   "id": "g2",
      //   "valueAxis": "v1",
      //   "dataDateFormat": "YYYY-MM-DD",
      //   color: layoutColors.defaultText,
      //   "bullet": "round",
      //   "bulletBorderAlpha": 1,
      //   "bulletColor": layoutColors.defaultText,
      //   "bulletSize": 5,
      //   "hideBulletsCount": 50,
      //   "lineThickness": 2,
      //   "lineColor": layoutColors.danger,
      //   "type": "smoothedLine",
      //   "dashLength": 1.5,
      //   "title": "Факт ГТМ",
      //   "useLineColorForBulletBorder": true,
      //   "valueField": "market2",
      //   "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      // }, {
      //   "id": "g3",
      //   "valueAxis": "v1",
      //   "dataDateFormat": "YYYY-MM-DD",
      //   color: layoutColors.defaultText,
      //   "bullet": "round",
      //   "bulletBorderAlpha": 1,
      //   "bulletColor": layoutColors.defaultText,
      //   "bulletSize": 5,
      //   "hideBulletsCount": 50,
      //   "lineThickness": 2,
      //   "lineColor": layoutColors.success,
      //   "type": "smoothedLine",
      //   "dashLength": 0.5,
      //   "title": "Прогноз ГТМ",
      //   "useLineColorForBulletBorder": true,
      //   "valueField": "market3",
      //   "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      // },
       {
        "id": "g4",
        color: layoutColors.defaultText,
        "valueAxis": "v4",
        "dataDateFormat": "YYYY-MM",
        "lineColor": layoutColors.successLight,
        "fillColors": layoutColors.successLight,
        "fillAlphas": 0.8,
        "lineAlpha": 0.8,
        "type": "column",
        "title": "Потери нефти прогноз",
        "valueField": "sales2",
        "clustered": true,
        "columnWidth": 1,
        "legendValueText": "[[value]] тон",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]тон</b>"
      }, {
        "id": "g5",
        "valueAxis": "v4",
        "dataDateFormat": "YYYY-MM",
        color: layoutColors.defaultText,
        "lineColor": layoutColors.primary,
        "fillColors": layoutColors.primary,
        "fillAlphas": 0.9,
        "lineAlpha": 0.9,
        "type": "column",
        "title": "Потери нефти факт",
        "valueField": "sales1",
        "clustered": true,
        "columnWidth": 1,
        "legendValueText": "[[value]] тон",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]тон</b>"
      }, {
        "id": "g10",
        "valueAxis": "v4",
        "dataDateFormat": "YYYY-MM",
        color: layoutColors.defaultText,
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.danger,
        "type": "smoothedLine",
        "dashLength": 1.5,
        "title": "Потери факт",
        "useLineColorForBulletBorder": true,
        "valueField": "sales3",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      },
      // {
      //   "id": "g6",
      //   "valueAxis": "v4",
      //   "dataDateFormat": "YYYY-MM",
      //   color: layoutColors.defaultText,
      //   "bullet": "round",
      //   "bulletBorderAlpha": 1,
      //   "bulletColor": layoutColors.defaultText,
      //   "bulletSize": 5,
      //   "hideBulletsCount": 50,
      //   "lineThickness": 2,
      //   "lineColor": layoutColors.primaryLight,
      //   "type": "smoothedLine",
      //   "dashLength": 1.5,
      //   "title": "Потери факт",
      //   "useLineColorForBulletBorder": true,
      //   "valueField": "oil1",
      //   "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      // }, 
      {
        "id": "g7",
        "valueAxis": "v4",
        "dataDateFormat": "YYYY-MM",
        color: layoutColors.defaultText,
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.successLight,
        "type": "smoothedLine",
        "dashLength": 0.5,
        "title": "Потери прогноз",
        "useLineColorForBulletBorder": true,
        "valueField": "oil2",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g8",
        "valueAxis": "v3",
        "dataDateFormat": "YYYY-MM",
        color: layoutColors.defaultText,
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.primaryLight,
        "type": "smoothedLine",
        "dashLength": 0.5,
        "title": "Простои факт",
        "useLineColorForBulletBorder": true,
        "valueField": "loss1",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g9",
        "valueAxis": "v3",
        "dataDateFormat": "YYYY-MM",
        color: layoutColors.defaultText,
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.successLight,
        "type": "smoothedLine",
        "dashLength": 0.5,
        "title": "Простои прогноз",
        "useLineColorForBulletBorder": true,
        "valueField": "loss2",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      },

      ],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        scrollbarHeight: 50,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: layoutColors.defaultText,
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        selectedGraphLineColor: layoutColors.defaultText,
        selectedGraphLineAlpha: 1
      },
      "chartCursor": {
        "pan": true,
        "cursorColor" : layoutColors.danger,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2
      },
      "categoryField": "date",
      "categoryAxis": {
        "axisColor": layoutColors.defaultText,
        "color": layoutColors.defaultText,
        "gridColor": layoutColors.defaultText,
        "parseDates": true,
        "minPeriod": "DD",
        // "groupToPeriods": "MM",
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "legend": {
        "useGraphSettings": true,
        "position": "top",
        "color": layoutColors.defaultText,
        "clickMarker": handleLegendClick,
        "clickLabel": handleLegendClick
      },
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "export": {
        "enabled": true
      },
      pathToImages: layoutPaths.images.amChart
    });
    
    $rootScope.chart = chart;
    $scope.data = {};

    // $http.get("http://194.87.93.175/nova-api/get_remontsData")
    $http.get("data/data.json")
        .success(function (data) {
            var result = [];
            for (var rem in data['stats']) {
                var obj = {};
                obj['name'] = data['stats'][rem][0];
                obj['prostoi'] = data['stats'][rem][1];
                obj['poteri'] = data['stats'][rem][2];
                result.push(obj);
            }
            chart_data = data[$scope.rem_type];
            $scope.remont_types = result;
            $scope.rem_types = result;
            $scope.data = data;
            $scope.button_first();
        })
        .error(function (data) {
            console.log("there was an error");
        });

    // $http.get("http://194.87.93.175/nova-api/get_matrixData")
    $http.get("data/matrix_data.json")
        .success(function (data) {
            $scope.matrix_data = data;
            $scope.matrix = $scope.prepareMatrixData('Общее', 'Общее', 'Общее');
        })
        .error(function (data) {
            console.log("there was an error");
        });


    $scope.smartTablePageSize = 10;

    $scope.smartTableData = [
      {
        id: 1,
        mestorojdenie: 'Жанаталап',
        skv: 'ZHT_0182',
        gtm: 'ПРС',
        email: 'Смена насоса',
        age: 'Май'
      },
      {
        id: 2,
        mestorojdenie: 'Жанаталап',
        skv: 'ZHT_0115',
        gtm: 'ПРС',
        email: 'Смена насоса',
        age: 'Май'
      },
      {
        id: 3,
        mestorojdenie: 'Жанаталап',
        skv: 'ZHT_0114',
        gtm: 'ПРС',
        email: 'Смена насоса',
        age: 'Май'
      },
      {
        id: 4,
        mestorojdenie: 'Жанаталап',
        skv: 'ZHT_0141',
        gtm: 'ПРС',
        email: 'Смена насоса',
        age: 'Май'
      },
      {
        id: 5,
        mestorojdenie: 'УАЗ',
        skv: 'UAZ_0001',
        gtm: 'КРС',
        email: 'Отключение интервалов пласта',
        age: 'Июнь'
      },
      {
        id: 6,
        mestorojdenie: 'Восточный УАЗ',
        skv: 'UAZ_001V',
        gtm: 'ГРП',
        email: 'Подготовка к ГРП',
        age: 'Сентябрь'
      },
      {
        id: 7,
        mestorojdenie: 'С. Балгимбаева',
        skv: 'BAL_0001',
        gtm: 'ПРС',
        email: 'Смена насоса',
        age: 'Май'
      },
      {
        id: 8,
        mestorojdenie: 'Забурунье',
        skv: 'ZAB_0001',
        gtm: 'КРС',
        email: 'Перевод на другое назначение',
        age: 'Июль'
      },
      {
        id: 9,
        mestorojdenie: 'Кенбай',
        skv: 'KEN_0001',
        gtm: 'ГРП',
        email: 'Подготовка к ГРП',
        age: 'Октябрь'
      },
      {
        id: 10,
        mestorojdenie: 'Жамансор',
        skv: 'JMS_0001',
        gtm: 'ПРС',
        email: 'Очистка и промывка забоя',
        age: 'Июнь'
      },
      {
        id: 11,
        mestorojdenie: 'Жанаталап',
        skv: 'ZHT_0001',
        gtm: 'ПРС',
        email: 'Проверка винтовой пары',
        age: 'Август'
      },
      {
        id: 12,
        mestorojdenie: 'Гран',
        skv: 'GRN_0001',
        gtm: 'ПРС',
        email: 'Ревизия насоса',
        age: 'Май'
      },
      {
        id: 13,
        mestorojdenie: 'Жоламанов',
        skv: 'ZHM_0654',
        gtm: 'КРС',
        email: 'Смена насоса',
        age: 'Апрель'
      },
      {
        id: 14,
        mestorojdenie: 'Макат',
        skv: 'MKT_0034',
        gtm: 'ПРС',
        email: 'Замена полированного штока',
        age: 'Июнь'
      },
      {
        id: 15,
        mestorojdenie: 'Ботахан',
        skv: 'BTN_0068',
        gtm: 'ПРС',
        email: 'Смена насоса',
        age: 'Апрель'
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
        "id": 30,
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
        email: '30',
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
        age: '30',
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

    $scope.button_first = function () {
        var chart = $rootScope.chart;
        if ($scope.byMonth) {
            var result = [];
            chart.graphs[0].hidden = false;
            var data = chart_data;
            for (var x in data['month']['train']['date']) {
                var obj = {};
                obj["date"] = data['month']['train']['date'][x];
                obj["sales1"] = data['month']['train']['oilloss'][x];
                result.push(obj);
            }
            chart.categoryAxis.minPeriod = "MM";
            chart.categoryAxis.parseDates = true;
            chart.dataProvider = result;
            chart.validateData();
        } else {
            var result = [];
            chart.graphs[0].hidden = false;
            var data = chart_data;
            for (var x in data['train']['date']) {
                var obj = {};
                obj["date"] = data['train']['date'][x];
                obj["sales1"] = data['train']['oilloss'][x];
                result.push(obj);
            }
            chart.categoryAxis.minPeriod = "DD";
            chart.categoryAxis.parseDates = true;
            chart.dataProvider = result;
            chart.validateData();
        }
        
        $scope.kpi_poteri2015 = data['month']['train']['stat'][0];
        $scope.kpi_prostoi2015 = data['month']['train']['stat'][2];
        $scope.kpi_poteri2019 = data['month']['forecast']['stat'][0] + data['month']['forecast']['stat'][1];
        $scope.kpi_prostoi2019 = data['month']['forecast']['stat'][2] + data['month']['forecast']['stat'][3];
        $scope.otkl_poteri = data['month']['valid']['stat'][0] - data['month']['forecast']['stat'][0];
        $scope.otkl_poteri_procent = (data['month']['valid']['stat'][0] - data['month']['forecast']['stat'][0]) / data['month']['valid']['stat'][0] * 100;

        // $scope.change_kpi();
        // $scope.kpi_name1 = "Эффект от ОТМ (дополонительная добыча)";
        // $scope.kpi_name2 = "Количество ГТМ";
        // $scope.kpi_name3 = "Отклонения прогноз/факт";
        // $scope.kpi_name4 = "";
    }

    $scope.button_second = function () {
        var chart = $rootScope.chart;
        if ($scope.byMonth){
            var result = [];
            var data = chart_data;
            for (var x in data['month']['train']['date']) {
                var obj = {};
                obj["date"] = data['month']['train']['date'][x];
                obj["sales1"] = data['month']['train']['oilloss'][x];
                result.push(obj);
            }
            chart.dataProvider = result;
            for (var x in data['month']['valid']['date']) {
                var obj = {};
                obj["date"] = data['month']['valid']['date'][x];
                obj["sales2"] = data['month']['forecast']['oilloss'][x];
                obj["sales1"] = data['month']['valid']['oilloss'][x];
                chart["dataProvider"].push(obj);
                        
            }
            chart.validateData();
        } else {
            var result = [];
            var data = chart_data;
            for (var x in data['train']['date']) {
                var obj = {};
                obj["date"] = data['train']['date'][x];
                obj["sales1"] = data['train']['oilloss'][x];
                result.push(obj);
            }
            chart.dataProvider = result;
            for (var x in data['valid']['date']) {
                var obj = {};
                obj["date"] = data['valid']['date'][x];
                obj["sales2"] = data['forecast']['oilloss'][x];
                obj["sales1"] = data['valid']['oilloss'][x];
                chart["dataProvider"].push(obj);
                        
            }
            chart.validateData();
        }
        $scope.change_kpi();
        $scope.kpi_name1 = "Недоборы нефти";
        $scope.kpi_name2 = "Отклонения прогноз/факт";
        $scope.kpi_name3 = "Прочее";
        $scope.kpi_name4 = "";

    }

    $scope.button_third = function () {
        var chart = $rootScope.chart;
        if ($scope.byMonth){
            var result = [];
            var data = chart_data;
            for (var x in data['month']['train']['date']) {
                var obj = {};
                obj["date"] = data['month']['train']['date'][x];
                obj["sales1"] = data['month']['train']['remont'][x];
                result.push(obj);
            }
            chart.dataProvider = result;
            for (var x in data['month']['valid']['date']) {
                var obj = {};
                obj["date"] = data['month']['valid']['date'][x];
                obj["sales2"] = data['month']['forecast']['remont'][x];
                obj["sales1"] = data['month']['valid']['remont'][x];
                chart["dataProvider"].push(obj);
                        
            }
            chart.validateData();
        } else {
            var result = [];
            var data = chart_data;
            for (var x in data['train']['date']) {
                var obj = {};
                obj["date"] = data['train']['date'][x];
                obj["sales1"] = data['train']['remont'][x];
                result.push(obj);
            }
            chart.dataProvider = result;
            for (var x in data['valid']['date']) {
                var obj = {};
                obj["date"] = data['valid']['date'][x];
                obj["sales2"] = data['forecast']['remont'][x];
                obj["sales1"] = data['valid']['remont'][x];
                chart["dataProvider"].push(obj);
                        
            }
            chart.validateData();
        }
        $scope.change_kpi();
        $scope.kpi_name1 = "Количество прогнозируемых ремонтов";
        $scope.kpi_name2 = "Отклонения прогноз/факт";
        $scope.kpi_name3 = "Прочее";
        $scope.kpi_name4 = "";

    }

    $scope.button_fourth = function () {
        $rootScope.main_chart.dataProvider = [];
        var result = [];
        $rootScope.main_chart.graphs[0].hidden = false;
        var data = $rootScope.chart_data;
        for (var x in data['train']['date']) {
            var obj = {};
            obj["date"] = data['train']['date'][x];
            obj["loss1"] = data['train']['remont'][x];
            result.push(obj);
        }
        $rootScope.main_chart.categoryAxis.parseDates = true;
        $rootScope.main_chart.dataProvider = result;

        for (var x in $rootScope.chart_data['valid']['date']) {
            var obj = {};
            obj["date"] = $rootScope.chart_data['valid']['date'][x];
            obj["loss2"] = $rootScope.chart_data['forecast']['remont'][x];
            $rootScope.main_chart["dataProvider"].push(obj);
                    
        }

        $rootScope.main_chart.validateData();
        $scope.change_kpi();
        $scope.kpi_name1 = "Время реакции ";
        $scope.kpi_name2 = "Сокращение недоборов нефти";
        $scope.kpi_name3 = "Отклонения прогноз/факт";
        $scope.kpi_name4 = "";
    }


    $scope.button_prognoz = function() {
        for (var x in $rootScope.chart_data['valid']['date']) {
            var obj = {};
            obj["date"] = $rootScope.chart_data['valid']['date'][x];
            // obj["market2"] = $rootScope.chart_data['valid']['fluid'][x];
            obj["market3"] = $rootScope.chart_data['forecast']['fluid'][x];
            $rootScope.main_chart["dataProvider"].push(obj);
                    
        }
        $rootScope.main_chart.categoryAxis.parseDates = true;
        $rootScope.main_chart.validateData();
    }
    $scope.button_fakt = function() {
        for (var x in $rootScope.chart_data['valid']['date']) {
            var obj = {};
            obj["date"] = $rootScope.chart_data['valid']['date'][x];
            obj["market2"] = $rootScope.chart_data['valid']['fluid'][x];
            // obj["market3"] = $rootScope.chart_data['forecast']['fluid'][x];
            $rootScope.main_chart["dataProvider"].push(obj);
        }
        $rootScope.main_chart.categoryAxis.parseDates = true;
        $rootScope.main_chart.validateData();
    }
    $scope.button_nasos = function() {
        $rootScope.main_chart.graphs[0].hidden = true;
        $rootScope.main_chart.dataProvider = [
            {
              "date": "2018-01",
              "sales1": 5,
              "sales2": 8,
              "oil1": 4,
              "oil2": 5
            }, {
              "date": "2018-02",
              "sales1": 4,
              "sales2": 6,
              "oil1": 6,
              "oil2": 3
            }, {
              "date": "2018-03",
              "sales1": 5,
              "sales2": 2,
              "oil1": 8,
              "oil2": 5
            }, {
              "date": "2018-04",
              "sales1": 8,
              "sales2": 9,
              "oil1": 1,
              "oil2": 3
            }, {
              "date": "2018-05",
              "sales1": 9,
              "sales2": 6,
              "oil1": 7,
              "oil2": 4
            }, {
              "date": "2018-06",
              "sales1": 3,
              "sales2": 5,
              "oil1": 6,
              "oil2": 2
            }, {
              "date": "2018-07",
              "sales1": 5,
              "sales2": 7,
              "oil1": 3,
              "oil2": 6
            }, {
              "date": "2018-08",
              "sales1": 7,
              "sales2": 6,
              "oil1": 7,
              "oil2": 4
            }, {
              "date": "2018-09",
              "sales1": 9,
              "sales2": 5,
              "oil1": 5,
              "oil2": 2
            }, {
              "date": "2018-10",
              "sales1": 5,
              "sales2": 8,
              "oil1": 5,
              "oil2": 5
            }, {
              "date": "2018-12",
              "sales1": 7,
              "sales2": 6,
              "oil1": 9,
              "oil2": 6
            }];
        $rootScope.main_chart.categoryAxis.parseDates = false;
        $rootScope.main_chart.validateData();
    }

    $scope.changeRemontType = function(rem_type, index) {
        $scope.selectedRowTable = index;
        $scope.rem_type = rem_type;
        chart_data = $scope.data[$scope.rem_type];
        $scope.button_first();
    }
    $scope.changeDataType = function(byMonth){
        $scope.byMonth = !byMonth;
        $scope.button_first();
    }

    $scope.prepareMatrixData =function(ngdu,cdng,mr) {
        var result = [];
        var temp = [];
        var ind = 0;
        if (cdng == 'Общее') {
            for (var ngdu in $scope.matrix_data) {
                for (var i in $scope.matrix_data[ngdu]) {
                    for (var j in $scope.matrix_data[ngdu][i]) {
                        for (var k in $scope.matrix_data[ngdu][i][j]) {
                            ind++;
                            var tmp = $scope.matrix_data[ngdu][i][j][k][0];
                            temp.push(tmp);
                        }
                    } 
                }
            }
        } else if (cdng != 'Общее' && mr == 'Общее') {
              for (j in $scope.matrix_data[ngdu][cdng]) {
                  for (k in $scope.matrix_data[ngdu][cdng][j]) {
                      ind++;
                      var tmp = $scope.matrix_data[ngdu][cdng][j][k][0];
                      temp.push(tmp);
                  }
              }
        } else if (cdng != 'Общее' && mr != 'Общее') {
              for (k in $scope.matrix_data[ngdu][cdng][mr]) {
                  ind++;
                  var tmp = $scope.matrix_data[ngdu][cdng][mr][k][0];
                  temp.push(tmp);
              }
        }
        if (!$scope.allMatrixOtkl1 && !$scope.allMatrixOtkl2 && !$scope.allMatrixOtkl2) {
            temp.sort(function(a,b) {
                return b[3]-a[3]
            });
        }

        if ($scope.allMatrixOtkl1) {
            temp.sort(function(a,b) {
                return Math.abs(b[1]-b[2])-Math.abs(a[1]-a[2])
            });
        }
        if ($scope.allMatrixOtkl2) {
            temp.sort(function(a,b) {
                return Math.abs(b[12])-Math.abs(a[12])
            });
        }
        if ($scope.allMatrixOtkl3) {
            temp.sort(function(a,b) {
                return Math.abs(b[9])-Math.abs(a[9])
            });
        }

        if (!$scope.allMatrixData1) {
            temp = temp.filter(value => value[5] == 3);
        }

        if (!$scope.allMatrixData2) {
            temp = temp.filter(value => value[12] - value[13] < -10);
        }

        if (!$scope.allMatrixData3) {
            temp = temp.filter(value => value[7] < 80);
        }

        var tempVal = Math.ceil(ind / 6);
        for (var i = 0; i < tempVal; i++) {
            result[i] = [];
        }


        for (var i = 0; i < ind; i++) {
            var j = Math.floor(i / 6);
            result[j].push(temp[i]);
        }

        return result;
    }


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