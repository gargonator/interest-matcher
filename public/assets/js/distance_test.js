// SF downtown
var latlng1 = JSON.stringify({
	lat: 37.792242,
	lng: -122.400648,
});

// Oakland
var latlng2 = JSON.stringify({
	lat: 37.818787,
	lng: -122.277881,
});

// Sacramento
var latlng3 = JSON.stringify({
	lat: 38.534315,
	lng: -121.481315,
});


function distance(latlng1, latlng2) {

	// parse strings into JSON objects
	var latlng1 = JSON.parse(latlng1);
	var latlng2 = JSON.parse(latlng2);

	// convert latitude and longitude to radians
	var [lat1, lat2, lng1, lng2] = [latlng1.lat, latlng2.lat, latlng1.lng, latlng2.lng] 
		.map(elem => elem * Math.PI / 180);

	var deltaLat = lat2 - lat1;
	var deltaLong = lng2 - lng1;

	// constants
	var R = 6371; // radius of earth in km
	var kmToMile = 0.621371 // km to mile conversion

	// calculate parameter for the haversine formula
	var a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
		Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLong/2) * Math.sin(deltaLong/2);
	
	// calculate distance based on radius of Earth
	var d = 2 * R * Math.asin(Math.sqrt(a)) * kmToMile;

	return d;

}


console.log(distance(latlng1,latlng2) + " miles.");


// var φ1 = lat1.toRadians();
// var φ2 = lat2.toRadians();
// var Δφ = (lat2-lat1).toRadians();
// var Δλ = (lon2-lon1).toRadians();

// var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
//         Math.cos(φ1) * Math.cos(φ2) *
//         Math.sin(Δλ/2) * Math.sin(Δλ/2);
// var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

// var d = R * c;