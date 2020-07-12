$(function() {
    $(".eat-btn").on("click", function(event) {
        event.preventDefault();

        var burger_id = $(this).data("id");
        console.log(burger_id);
    
        // Send the PUT request.
        $.ajax("/api/burger/" + burger_id,
        {
          type: "PUT",
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    $("#submit-burger").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            burgerName: $("#add-burger").val()
          }
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            location.reload();
        }
      );
    })
});