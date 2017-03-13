function initMap() {
        var carImage = 'https://raw.githubusercontent.com/alexkvibm/hackoit2017/master/images/car.png';
        var carPos = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: carPos
        });
        var car = new google.maps.Marker({
          position: carPos,
          icon: carImage,
          title: 'my car',
          map: map
        });
        
        var gasStationImage = 'https://raw.githubusercontent.com/alexkvibm/hackoit2017/master/images/station.png';
        var gasStationPos = {lat: -23.363, lng: 133.044};
        var gasStation = new google.maps.Marker({
          position: gasStationPos,
          icon: gasStationImage,
          title: 'gas station AAA',
          map: map
        });
    }