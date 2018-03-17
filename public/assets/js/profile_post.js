


$('.save-profile').on('click', function(event) {

	var name = $('input[type=name]').val();
	var picture = $('input[type=picture]').val();
	var phone = $('input[type=phone]').val();
	var description = $('textarea[type=description]').val();
	var address = $('input[type=address]').val()
		+ ', ' + $('input[type=city]').val();
		+ ', ' + $('input[type=state]').val();
		+ ' ' + $('input[type=zip]').val();
	var interests = localStorage.getItem("interests");
	
	// userInfo.interests = JSON.stringify(interestObject);
	var userInfo = {
		name: name,
		phone: phone,
		picture: picture,
		description: description,
		interests: interests
	};

	// userInfo.interests = interestArray;

	// console.log(name, picture, phone, description, address, interests);

	geocodeAddress(address, geocoder, map, userInfo);

});


function geocodeAddress(address,geocoder,map, userInfo) {

	geocoder.geocode( 
		{address: address},
		function(results,status) {
			if (status === "OK") {
				var latlng = {
					lat: results[0].geometry.location.lat(),
					lng: results[0].geometry.location.lng()
				};
	    	userInfo.latlong = JSON.stringify(latlng);
	    	console.log("user", userInfo);
			}
			else {
				alert("Sorry, Geocode was not successful :(")
			}
		});

}