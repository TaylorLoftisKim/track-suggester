$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    var question1 = $("input:radio[name=yes].checked").val();
    var question2 = $("input:radio[name=no]:checked").val();
    
    console.log(yes)
    console.log(no)

    if (question1 === "yes") {
      $('#cssDesign').show();
    } else if (question2 === "yes") {
      $('#cssDesign').show();
    } else if (question3 === "yes") {
      $('#cssDesign').show();
    } else if (question4 === "yes") {
      $('#cssDesign').show();
    } else if (question5 === "yes") {
      $('#cssDesign').show();
    }

  });
});
