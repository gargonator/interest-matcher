var map;
var geocoder;
var markers = [];

getLocation();

// get location of user
function getLocation() {
    if (navigator.geolocation) {
    	console.log(navigator.geolocation.getCurrentPosition(initMap,handleError));
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// initialize map
function initMap(position) {

  var mapCenter = { 
  	lat: position.coords.latitude,
  	lng: position.coords.longitude,
  };

	// create geocoder object
	geocoder = new google.maps.Geocoder();

	// create map and add it to the div
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: mapCenter,
	});

	// create a marker at the user's location
	var marker = new google.maps.Marker({
		position: mapCenter,
		map: map
	});

	// add marker to markers list
	markers.push(marker);

	// get address for lat/long and populate forms
	reverseGeocode(mapCenter);

	// if user clicks on map, remove markers and add new one at click
	map.addListener('click', function(event) {
		removeMarkers();
    var marker = new google.maps.Marker({
        position: event.latLng, 
        map: map
    });
    markers.push(marker);
    reverseGeocode(event.latLng);
  });

}

function reverseGeocode(latlng) {

	geocoder.geocode({'location': latlng}, function(results, status) {
	  if (status === 'OK') {
	    if (results[0]) {
	      appendAddress(results[0].address_components);
	    } else {
	      window.alert('No results found');
	    }
	  } else {
	    window.alert('Geocoder failed due to: ' + status);
	  }
  });	
}


function appendAddress(address_components) {

	var streetAddress = address_components[0].long_name + " " + address_components[1].long_name;
	var city = address_components[3].long_name;
	var state = address_components[5].short_name;
	var zip = address_components[7].long_name;

	$('input[type=address]').attr("value",streetAddress);
	$('input[type=city]').attr("value",city);
	$('input[type=state]').attr("value",state);
	$('input[type=zip]').attr("value",zip);

}


function handleError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

function removeMarkers() {
  for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
  }
  markers = [];
} 

