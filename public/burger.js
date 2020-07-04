$(function() {
    $(".eat-btn").on("click", function(e) {
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
        )
    });
});