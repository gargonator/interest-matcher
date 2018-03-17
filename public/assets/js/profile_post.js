
$('.save-profile').on('click', function(event) {

	var id = $('input[type=id]').val();
	var name = $('input[type=name]').val();
	var picture = $('input[type=picture]').val();
	var phone = $('input[type=phone]').val();
	var description = $('textarea[type=description]').val();
	var address = $('input[type=address]').val()
		+ ', ' + $('input[type=city]').val();
		+ ', ' + $('input[type=state]').val();
		+ ' ' + $('input[type=zip]').val();
	var interests = localStorage.getItem("interests");
	
	var userInfo = {
		"id": id,
		"name": name,
		"phone": phone,
		"picture": picture,
		"description": description,
		"interests": interests,
		"latlong": null
	};
<<<<<<< HEAD
	console.log("from  click:",userInfo);
	// userInfo.interests = interestArray;

	// console.log(name, picture, phone, description, address, interests);
=======
>>>>>>> 1a6426f3e83d2b94a542c5050a3b0ff413eea4c9

	geocodeAddress(address, geocoder, map, userInfo);

});

function geocodeAddress(address,geocoder,map,userInfo) {

	geocoder.geocode( 
		{address: address},
		function(results,status) {
			if (status === "OK") {
				var latlng = {
					lat: results[0].geometry.location.lat(),
					lng: results[0].geometry.location.lng()
				};
	    	userInfo.latlong = JSON.stringify(latlng);

	    	console.log(userInfo);

	    	var queryURL = '/api/user/' + userInfo.id;
	    	// post user info
	    	$.ajax(queryURL, {
          type: "PUT",
          data: userInfo
        }).then(
          function(data, status) {
            // Reload the page to get the updated list
            console.log('Data: ', data);
            console.log('Status: ', status);
          }
        );
			}
			else {
				alert("Sorry, Geocode was not successful :(")
			}
		});

}