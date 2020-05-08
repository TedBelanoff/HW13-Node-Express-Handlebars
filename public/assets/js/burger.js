// All handlers encompassed by single function
$(function() {

  //Burger Devour Button - Put Request
  $(".change-devour").on("click", function() {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // AJAX Put Request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        //Confirmation message and reload
        console.log("Devoured!", newDevour);
        location.reload();
      }
    );
  });

  //Burger Add Button - Post Request
  $(".create-burger").on("submit", function() {
  
    var newBurger = {
      name: $("#fi").val().trim(),
      devoured: "0"
    };
    //AJAX Post
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Burger Added!");
        location.reload();
      }
    );
  });

//Burger Delete Button - Delete Request
  $(".delete-burger").on("click", function() {
    var id = $(this).data("id");

    //AJAX Delete
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Burger Deleted!", id);
        location.reload();
      }
    );
  });
});
