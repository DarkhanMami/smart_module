/**
 * @author a.demeshko
 * created on 12/29/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .service('mailMessages', mailMessages);

  /** @ngInject */
  function mailMessages($sce) {
    var messages = [
      {
        "id": "4563faass",
        "name": "Искусственный интеллект",
        "subject": "ПРС",
        "date": "2015-08-28T07:57:09",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 102 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "petraramsey@mail.com",
        "attachment": "poem.txt",
        "position": "Great Employee",
        "tag": "friend",
        "labels": ['inbox']
      },
      {
        "id": "4563fdfvd",
        "name": "Искусственный интеллект",
        "subject": "КРС",
        "date": "2015-11-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 112 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "tag": "study",
        "labels": ['inbox']
      },
      {
        "id": "4563zxcss",
        "name": "Искусственный интеллект",
        "subject": "КРС",
        "date": "2015-10-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 122 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "tag": "work",
        "labels": ['sent', 'important']
      },
      {
        "id": "8955sddf",
        "name": "Искусственный интеллект",
        "subject": "ГРП",
        "date": "2015-05-05T12:59:45",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 132 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "attachment": "design.psd",
        "tag": "work",
        "labels": ['inbox']
      },
      {
        "id": "8955sdfcc",
        "name": "Искусственный интеллект",
        "subject": "ТРС",
        "date": "2015-07-18T10:19:01",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 142 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "tag": "study",
        "labels": ['inbox']
      },
      {
        "id": "8955asewf",
        "name": "Искусственный интеллект",
        "subject": "ПРС",
        "date": "2015-09-23T03:04:10",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 152 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "tag": "work",
        "labels": ['inbox', 'important']
      },
      {
        "id": "2334uudsa",
        "name": "Искусственный интеллект",
        "subject": "ПРС",
        "date": "2019-05-08T14:25:09",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважины № ZHT_0182, ZHT_0115, ZHT_0114, ZHT_0141.</p>" +
          "<br><p>1) Смена насоса на данных скважинах проводилась более года назад (при средней наработке на отказ глубинных насосов равной 365 дням).</p>" +
          "<p>2) Наблюдается снижение фактической добычи жидкости как от теоретического дебита по данным ИСУ, так и от тех.режима по жидкости (ТБД). Другими словами, снижается коэффициент подачи насоса.</p>" +
          "<p>3) Влияние изменения коэффициента наполнения насоса незначительно на коэффициент подачи." +
          "<br>4) ГТМ, обработок призабойных зон и прочих возмущающих мероприятий за последние полгода не проводилось." + 
          "<br><br>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>"),
        "pic": "img/pp.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "attachment": "file.doc",
        "tag": "family",
        "labels": ['inbox', 'important']
      },
      {
        "id": "2334aefvv",
        "name": "Искусственный интеллект",
        "subject": "Другое",
        "date": "2015-06-22T06:26:10",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 162 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "tag": "family",
        "labels": ['inbox', 'important']
      },
      {
        "id": "2334cvdss",
        "name": "Искусственный интеллект",
        "subject": "ПРС",
        "date": "2015-06-22T06:26:10",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 104 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "tag": "study",
        "labels": ['trash']
      },
      {
        "id": "8223xzxfn",
        "name": "Искусственный интеллект",
        "subject": "Другое",
        "date": "2015-07-16T06:47:53",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 157 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag": 'family',
        "labels": ['trash']
      },
      {
        "id": "8223sdffn",
        "name": "Искусственный интеллект",
        "subject": "ПРС",
        "date": "2015-06-20T07:05:02",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 296 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag": 'family',
        "labels": ['spam']
      },
      {
        "id": "9391xdsff",
        "name": "Искусственный интеллект",
        "subject": "КРС",
        "date": "2015-03-31T11:52:58",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 234 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "carlsongoodman@mail.com",
        "position": "Fullstack man",
        "tag": "study",
        "labels": ['draft']
      },
      {
        "id": "8223xsdaa",
        "name": "Искусственный интеллект",
        "subject": "ТРС",
        "date": "2015-02-25T10:58:58",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 245 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag": "family",
        "labels": ['draft']
      },
      {
        "id": "9391xdsff",
        "name": "Искусственный интеллект",
        "subject": "ГРП",
        "date": "2015-03-31T11:52:58",
        "body": $sce.trustAsHtml("<p>Уважаемый Жанбек Бердибекович, </p><br><p>Скважина № 167 м/р Жанаталап.</p>" +
          "<p>В период с 1.09.2018 г. по 8.09.2018 г. по данным системы ИСУ СДМО при неизменном коэффициенте наполнения насоса наблюдается резкое снижение добычи жидкости. Причиной снижения добычи с наибольшей вероятностью являются утечки в насосной оборудовании (утечки в резьбовых соединениях труб, в зазоре между плунжером и цилиндром, в клапанах).</p>" +
          "<p>Учитывая отсутствие других факторов, влияющих на снижение добычи жидкости, я рекомендую произвести осмотр насосного оборудования на предмет утечек.</p>" +
          "<br><p>Дата последнего ремонта насоса на скважине: 1.02.2018," +
          "<br>Рекомендуемая дата ремонта насоса на скважине: 10.09.2018</p>"),
        "pic": "img/pp.png",
        "email": "carlsongoodman@mail.com",
        "position": "Fullstack man",
        "tag": "study",
        "labels": ['sent']
      }
    ].sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
      }).reverse();
    var tabs = [{
      label: 'inbox',
      name: 'Отрытые',
      newMails: 7
    }, {
      label: 'sent',
      name: 'Закрытые',
      newMails: 2
    }, {
      label: 'draft',
      name: 'В работе'
    }, {
      label: 'important',
      name: 'Подтвержденные'
    }, {
      label: 'spam',
      name: 'Не подтвержденные'
    }, {
      // label: 'trash',
      // name: 'Комментированы'
    }];

    return{
      getTabs : function(){
        return tabs
      },
      getMessagesByLabel : function(label){
        return messages.filter(function(m){
          return m.labels.indexOf(label) != -1;
        });
      },
      getMessageById : function(id){
        return messages.filter(function(m){
          return m.id == id;
        })[0];
      }
    }

  }

})();