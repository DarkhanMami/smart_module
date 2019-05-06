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
    function handleLegendClick( graph ) {
        var chart = graph.chart;
        if (graph.hidden) {
            chart.showGraph(graph);
        } else{
            chart.hideGraph(graph);
        }
    }
    var chart = AmCharts.makeChart(id, {
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
        "title": "Добыча жидкости 2018",
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
        "title": "Добыча жидкости 2019",
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
        "minPeriod": "MM",
        "groupToPeriods": "MM",
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
    
    $http.get("data/data.json")
        .success(function (data) {
            var result = [];
            for (var x in data['month']['train']['date']) {
                var obj = {};
                obj["date"] = data['month']['train']['date'][x];
                obj["sales1"] = data['month']['train']['oilloss'][x];
                result.push(obj);
            }
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
