$(function() {
    $(".eat-btn").on("click", function(event) {
        const id = $(this).data("id");

        const eatenState = {
            eaten: true
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenState
        }).then(
            function() {
                location.reload();
            }
        );
    });


    $("#submit-burger").on("click", function(event) {
        event.preventDefault();
        const newBurger = {
        burger_type: $("#add-burger").val().trim(),
        eaten: false
    };
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