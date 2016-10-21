$(document).ready(function() {
  $("form#survey").submit(function(event) {
    debugger;
    var question1 = ($("input:radio[name=yes]:checked").val());
    var question2 = ($("input:radio[name=no]:checked").val());

    console.log(yes)
    console.log(no)

    if (question1 === "yes") {
      $('#yes').show();
    } else if (question2 === "yes") {
      $('#yes').show();
    } else if (question3 === "yes") {
      $('#yes').show();
    } else if (question4 === "yes") {
      $('#yes').show();
    } else if (question5 === "yes") {
      $('#yes').show();
    }

    event.preventDefault();
  });
});
