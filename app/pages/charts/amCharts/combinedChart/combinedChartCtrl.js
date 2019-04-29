/**
 * @author a.demeshko
 * created on 22.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
    .controller('combinedChartCtrl', combinedChartCtrl);

  /** @ngInject */
  function combinedChartCtrl($element, baConfig, layoutPaths, $http, $rootScope) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var chart = AmCharts.makeChart(id, {
      "type": "serial",
      "theme": "none",
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
      }],
      "graphs": [
      {
        "id": "g1",
        "valueAxis": "v1",
        "dataDateFormat": "YYYY-MM-DD",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        color: layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.primary,
        "type": "smoothedLine",
        "dashLength": 0.1,
        "title": "Исторические данные по добыче",
        "useLineColorForBulletBorder": true,
        "valueField": "market1",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g2",
        "valueAxis": "v1",
        "dataDateFormat": "YYYY-MM-DD",
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
        "title": "Факт ГТМ",
        "useLineColorForBulletBorder": true,
        "valueField": "market2",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g3",
        "valueAxis": "v1",
        "dataDateFormat": "YYYY-MM-DD",
        color: layoutColors.defaultText,
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.success,
        "type": "smoothedLine",
        "dashLength": 0.5,
        "title": "Прогноз ГТМ",
        "useLineColorForBulletBorder": true,
        "valueField": "market3",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      },
       {
        "id": "g4",
        color: layoutColors.defaultText,
        "valueAxis": "v2",
        "dataDateFormat": "YYYY-MM",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.primaryLight,
        "fillAlphas": 0.8,
        "lineAlpha": 0.8,
        "type": "column",
        "title": "Добыча жидкости 2018",
        "valueField": "sales2",
        "clustered": true,
        "columnWidth": 0.5,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g5",
        "valueAxis": "v2",
        "dataDateFormat": "YYYY-MM",
        color: layoutColors.defaultText,
        "lineColor": layoutColors.primary,
        "fillColors": layoutColors.primary,
        "fillAlphas": 0.9,
        "lineAlpha": 0.9,
        "type": "column",
        "title": "Добыча жидкости 2019",
        "valueField": "sales1",
        "clustered": true,
        "columnWidth": 0.5,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      },
      {
        "id": "g6",
        "valueAxis": "v1",
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
        "dashLength": 1.5,
        "title": "Фактор 1",
        "useLineColorForBulletBorder": true,
        "valueField": "oil1",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g7",
        "valueAxis": "v1",
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
        "title": "Фактор 2",
        "useLineColorForBulletBorder": true,
        "valueField": "oil2",
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
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "legend": {
        "useGraphSettings": true,
        "position": "top",
        "color": layoutColors.defaultText
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
    
    $http.get("data/data.json")
        .success(function (data) {
            var result = [];
            for (var x in data['train']['date']) {
                var obj = {};
                obj["date"] = data['train']['date'][x];
                obj["market1"] = data['train']['fluid'][x];
                result.push(obj);
            }
            // for (var x in data['valid']['date']) {
            //     var obj = {};
            //     obj["date"] = data['valid']['date'][x];
            //     obj["market2"] = data['valid']['fluid'][x];
            //     obj["market3"] = data['forecast']['fluid'][x];
            //     result.push(obj);
            // }
            chart["dataProvider"] = result;
            chart.validateData();
            $rootScope.main_chart = chart;
            $rootScope.chart_data = data;
        })
        .error(function (data) {
            console.log("there was an error");
        });

  }

})();
