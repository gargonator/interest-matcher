$(document).ready(function() {
	$.get("/api/matches/1",function(matches){
		
		console.log(matches);
		matches.forEach(match => {

			var matchedUserId = match.matched_user;
			var matchedInterests = "Matched Interest: " + match.matched_interests;
			var numMatchedInterests = matchedInterests.split(', ').length;
			var distance = match.distance + " miles away";

			var queryURL = '/api/users/' + matchedUserId;

			$.get(queryURL,function(user) {

				var name = user.name;
				var description = user.description;
				var email = user.email;
				var phone = user.phone;
				var picture = user.picture;

				console.log(name, matchedInterests, numMatchedInterests, distance, description, email, phone);

				// create match div
				var divRow = $("<div class='match-placeholder'>");
				// create left column and append to match div
				var colLeft = $("<div class='col-left'>");
				divRow.append(colLeft);
				// create favorites button and append to left column
				var favoritesButton = $("<button class='favoritesButton'>").html("&#9734");
				colLeft.append(favoritesButton);
				colLeft.append(picture);
				// create right column and append to match div
				var colRight = $("<div class='col-right'>");
				divRow.append(colRight);
				// create name and append to right column
				var Name = $("<h5>").text(name);
				colRight.append(Name);
				// create miles away text and append to right column
				var milesAway = $("<h3>").text(distance);
				colRight.append(milesAway);
				// append matched interests text to right column
				var MatchedInterests = $("<p>").text(matchedInterests);
				colRight.append(MatchedInterests);

				var picture = $("<img>");
            	picture.attr("src", user.picture);
            	picture.append(picture);
				// append div Row to matches container
				$(".matches-container").append(divRow);
			})

		})
	});
});



// function communicates with firebase to log the favorites


	// {
	// 	"id": 1,
	// 	"matched_user": 2,
	// 	"distance": 2,
	// 	"matched_interests": "movies, sports",
	// 	"createdAt": "2018-03-14T02:10:55.000Z",
	// 	"updatedAt": "2018-03-14T02:10:55.000Z",
	// 	"UserId": 1
	// },
	// {
	// 	"id": 2,
	// 	"matched_user": 3,
	// 	"distance": 2,
	// 	"matched_interests": "movies, sports",
	// 	"createdAt": "2018-03-14T02:10:55.000Z",
	// 	"updatedAt": "2018-03-14T02:10:55.000Z",
	// 	"UserId": 1
	// },