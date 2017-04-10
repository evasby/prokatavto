$(document).ready(function(){

  ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
        center: [53.893365070675635,27.542094999999954],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark([53.893365070675635,27.542094999999954], {
        hintContent: 'Swim-minsk.by'
        //balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/images/marker.png',
        iconImageSize: [36, 49],
        iconImageOffset: [-18, -58]
    });
    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable('scrollZoom');
    myMap.events.add('click', function onMapClick(e) {
      if(myMap.behaviors.isEnabled('scrollZoom')) {
        myMap.events.remove('click', onMapClick);    
      } else {
        myMap.behaviors.enable(['scrollZoom']);
      }
    });
  });
                
});