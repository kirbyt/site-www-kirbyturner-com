/* Write here your custom javascript codes */


var ContactPage = function () {

    return {
        
      //Basic Map
        initMap: function () {
      var map;
      $(document).ready(function(){
        map = new GMaps({
        div: '#map',
        scrollwheel: false,       
        lat: 44.4649729,
        lng: -72.6897848
        });
        
        var marker = map.addMarker({
        lat: 44.4649729,
        lng: -72.6897848,
              title: 'White Peak Software, Inc.'
           });
      });
        },

        //Panorama Map
        initPanorama: function () {
        var panorama;
        $(document).ready(function(){
          panorama = GMaps.createPanorama({
            el: '#panorama',
            lat : 40.748866,
            lng : -73.988366
          });
        });
    }        

    };
}();