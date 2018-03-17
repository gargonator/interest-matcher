const db = require("../models");
const table = require("console.table");

// sequelize database constants
const User = db.User;
const UserInterest = db.UserInterest;
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

// dummy user for testing purposes
user = {
    "id": 1,
    "email": "bob@gmail.com",
    "password": "pass",
    "name": "bob",
    "description": "desc",
    "picture": "/pic/bob.jpg",
    "phone": "45234523",
    "latlong": JSON.stringify({lat: 47, lng: -122}),
    "interests": JSON.stringify([1,3,6]),
    "createdAt": "2018-03-13T03:43:35.000Z",
    "updatedAt": "2018-03-13T03:43:35.000Z"
}

// returns a Promise with an array of user matches
// input: user object
// output: array of matches
function getMatches(user, userid) {

	return new Promise((resolve) => {	
		// array to store matches
		var matches = [];

		// store user id
		var userId = parseInt(userid);

		// store array of interest IDs for user
		var interestIds = JSON.parse(user.interests);

		// counters for tracking completion of async operations
		var counter1 = 0; // incremented after each loop
		var counter2 = 0; // incremented after async operations

		// for each interest ID for the user, get IDs for other users that have matching interests
		interestIds.forEach(interestId => {
			sequelize.query('SELECT UserId FROM UserInterest WHERE InterestId = ? AND UserId <> ?',
				{replacements: [interestId,userId], type: sequelize.QueryTypes.SELECT}).then(matchedUsers => {
					// add matched users to counter1
					counter1 = counter1 + matchedUsers.length; 
					// console.log('Counter1: ',counter1)
					// iterate through each matched user
					// console.log(`I'm in the first loop!`);
					console.log(matchedUsers);
					matchedUsers.forEach(match => {
							// console.log(`I'm in the second loop!`);
							var matchId = match.UserId;
							Promise
								.all([getInterest(interestId),getDistance(userId, matchId)])
								.then(function(results) {
									console.log(`The promises resolved!`);
									var interest_string = results[0];
									var distance = results[1];
									// if match is not already stored
									if (!isInMatches(match, matches)) {
										// create match record to store in matches array
										var matchRecord = {
												UserId: userId,
												matched_user: matchId,
												matched_interests: interest_string,
												distance: distance,
												// createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
												// updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
											};
										// push the match record to the matches array
										matches.push(matchRecord);
									} else { // augment interests for the match
										// get index of the match in the matches array
										var index = matches.findIndex((match) => match.matched_user === matchId);
										// update interests to include the new matched interest
										matches[index].matched_interests += ", " +interest_string;
										// matches[index].updatedAt = Sequelize.literal('CURRENT_TIMESTAMP(3)');
									}
									// update counter2 
									counter2++;
									// console.log('Counter 2 :',counter2);
									// resolve promise if all writes to matches are complete
									if (counter2 === counter1) {
										resolve(matches);
									}
								});
							});
						});
					});
	}); // end promise

	// HELPER FUNCTIONS
	// --------------------------------------------------------------------------------

	// returns true if match is already in matches array, otherwise returns false
	function isInMatches(new_match, matches_array) {

		var matched = false;

		matches_array.forEach(already_matched => {
			if (already_matched.matched_user === new_match.UserId) {
				matched = true;
			}
		});

		return matched;

	}

	// deletes all previous matches in the matches database
	function deletePreviousMatches(user) {

	}

	// returns distance in miles between two users
	function getDistance(user1_id, user2_id) {
		return new Promise((resolve, reject) => {
			// get lat long of first user
			sequelize.query(`SELECT latlong from Users WHERE id = ${user1_id}`, { type: sequelize.QueryTypes.SELECT}).then(results => {
				var latlng1 = results[0].latlong; // store lat long
				// get lat long of second user
				sequelize.query(`SELECT latlong from Users WHERE id = ${user2_id}`, { type: sequelize.QueryTypes.SELECT}).then(results => {
					var latlng2 = results[0].latlong; // store lat long
					// return distance between users
					resolve(distance(latlng1,latlng2))
				})
			})
		})
	}

	// returns interest based on interest ID
	function getInterest(interestId) {
			return new Promise((resolve, reject) => {
					resolve(sequelize.query(`SELECT interest from Interests WHERE id = ${interestId}`, { type: sequelize.QueryTypes.SELECT}).then(results => results[0].interest))
				});
	};

	// returns distance between two latitude and longitudes
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

		// return distance
		return d;

	}

}; // end get Matches function

// export
module.exports = getMatches;

