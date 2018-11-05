$(this).ready(function($) {
    $.getScript("http://maps.google.com/maps/api/js?sensor=false&language=en&callback=map_init");
  });
  function map_init(){
    var geocoder;
    var map;
    var address = "杭州市萧山区大江东产业集聚区经五路3018号";
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(30.291428,120.597641);
    var myOptions = {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
      var marker = new google.maps.Marker({
      map: map,
      position: map.getCenter()
    });
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent('<b>DOIECTP</b>');
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });
 }