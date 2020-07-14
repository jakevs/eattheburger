$(function() {
    $(".eat-btn").on("click", function(event) {
        event.preventDefault();

        var burger_id = $(this).data("id");
        console.log(burger_id);
    
        $.ajax("/api/burger/" + burger_id,
        {
          type: "PUT",
        }).then(function() {
            location.reload();
          }
        );
      });
    });

$(function() {
   $("#submit-burger").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            burgerName: $("#add-burger-box").val()
          }
    $.ajax("/api/burger", {
        type: "POST",
        data: { 
          data: newBurger }
    }).then(
        function() {
            location.reload();
        }
      );
    });
  });


// $(function() {
//     $(".eat-btn").on("click", function(event) {
//       var id = $(this).data("id");
      
//       var newDevouredState = {
//         eaten: true
//       };
      
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newDevouredState
//       }).then(
//         function() {
//           location.reload();
//         }
//       );
//     });
    
//     $("#submit-burger").on("click", function(event) {
//       event.preventDefault();
//       var newBurger = {
//         burger_type: $("#add-burger-box").val().trim(),
//         eaten: false
//       };
      
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           location.reload();
//         }
//       );
//     });
//   });