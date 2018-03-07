$(function(){
    //create new burger
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#bu").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/matches", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    $(".btn.btn-success").on("click", function(event) {
        var id = $(this).data("id");
        var newDevouredState = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/matches/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});