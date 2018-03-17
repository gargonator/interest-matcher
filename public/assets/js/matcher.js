$(function(){
    
  
  //create new match
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newMatch = {
          match_id: $("#bu").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/matches", {
          type: "POST",
          data: newMatch
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    $(".btn.btn-success").on("click", function(event) {
        var id = $(this).data("id");
        var newFavoriteState = {
          favorite: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/matches/" + id, {
          type: "PUT",
          data: newFavoriteState
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      // gapi.load("auth2",function(){
      //     gapi.auth2.init();
      // })

      //LOAD MATCHES BY USER
      // console.log('load');
      var container = $(".matches-container");
      $.get("/api/matches/1",function(data){
        console.log(data);
        createMatches(data);
      });

      function createMatches(data){
        data.forEach(element => {

            var divRow = $("<div class='match-placeholder' row>");
            var divCol1 = $("<div class='col-md-4'>");
            var divCol2 = $("<div class='col-md-4'>");
            var divCol3 = $("<div class='col-md-4'>");
            var divC1R1 = $("<div class='row'>");
            var divC1R2 = $("<div class='row'>");
            var divC1R3 = $("<div class='row'>");
            var divC2R1 = $("<div class='row'>");
            var divC2R2 = $("<div class='row'>");
            var divC2R3 = $("<div class='row'>");
            var divC3R1 = $("<div class='row'>");
            var divC3R2 = $("<div class='row'>");
            var divC3R3 = $("<div class='row'>");
            var divC4R1 = $("<div class='row'>");
            var divC4R2 = $("<div class='row'>");
            var divC4R3 = $("<div class='row'>");
            var picture = $("<img>");
            picture.attr("src",element.picture);
            divC1R1.append(picture);
            var name = $("<h5>").text(element.name);
            divC1R3.append(name);
            var numberMatchesInterest = $("<h5>").text(element.matched_interests.split(",").length + " matching interests")
            divC2R1.append(numberMatchesInterest);
            var bothLikeStr = $("<h5>").text("You both like " + element.matched_interests);
            divC2R2.append(bothLikeStr);
            var distance = $("<h5>").text(element.distance + " miles away");
            divC3R2.append(distance);
            divCol1.append(divC1R1,divC1R2,divC1R3);
            divCol2.append(divC2R1,divC2R2,divC2R3);
            divCol3.append(divC3R1,divC3R2,divC3R3);
            divRow.append(divCol1,divCol2,divCol3);
            container.append(divRow);
        });
        
        
      }
      
      // function signOut() {
      //     console.log("entra sign out");
      //     var auth2 = gapi.auth2.getAuthInstance();
      //     auth2.signOut().then(function () {
      //     console.log('User signed out.');
          
      //     });
      //     // auth2.disconnect().then(function () {
      //     //   console.log("user disconnected");
      //     //     //Do stuff here after the user has been signed out, you can still authenticate the token with Google on the server side
      
      //     // })
      // }

      // $(".signedIn").on("click",onSignIn);


      // function onSignIn(googleUser) {
      //   console.log("enter signin");
      //   var profile = googleUser.getBasicProfile();
      //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      //   console.log('Name: ' + profile.getName());
      //   console.log('Image URL: ' + profile.getImageUrl());
      //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      // }
});