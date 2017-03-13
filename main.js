

var map;
var markers = [];


  function initMap() {
            var carImage = 'https://raw.githubusercontent.com/alexkvibm/hackoit2017/master/images/car.png';
            var carPos = {lat: -25.363, lng: 131.044};

            addMarker(carPos, carImage, 'My Car');
            
            var gasStationImage = 'https://raw.githubusercontent.com/alexkvibm/hackoit2017/master/images/station.png';
            var gasStationPos = {lat: -23.363, lng: 133.044};
          
            addMarker(gasStationPos, gasStationImage, 'Gas gasStation A');
  }


  // Adds a marker to the map and push to the array.
  function addMarker(location, image, caption) {
    var marker = new google.maps.Marker({
      position: location,
      icon: image,
      title: caption,
      map: map
    });
    markers.push(marker);
  }

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }

  // Shows any markers currently in the array.
  function showMarkers() {
    setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    markers = [];
  }


function showTelemetry(){
   var speed = 100; 
   var fuel = 100; 
   document.getElementById('title').innerHTML = 'Speed:' + speed + ' Fuel:' +fuel;  
}