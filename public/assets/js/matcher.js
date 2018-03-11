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

      gapi.load("auth2",function(){
          gapi.auth2.init();
      })

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