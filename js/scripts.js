$(document).ready(function() {
  $("form#questions").submit(function() {
    var question1 = $("input:radio[name=yes1]:checked").val();
    var question1 = $("input:radio[name=no1]:checked").val();
    var question1 = $("input:radio[name=both1]:checked").val();
    var question2 = $("input:radio[name=yes2]:checked").val();
    var question2 = $("input:radio[name=no2]:checked").val();
    var question2 = $("input:radio[name=both2]:checked").val();
    var question3 = $("input:radio[name=yes3]:checked").val();
    var question3 = $("input:radio[name=no3]:checked").val();
    var question3 = $("input:radio[name=both3]:checked").val();
    var question4 = $("input:radio[name=yes4]:checked").val();
    var question4 = $("input:radio[name=no4]:checked").val();
    var question4 = $("input:radio[name=both4]:checked").val();
    var question5 = $("input:radio[name=yes5]:checked").val();
    var question5 = $("input:radio[name=no5]:checked").val();
    var question5 = $("input:radio[name=both5]:checked").val();


    console.log(yes)
    console.log(no)

    if (question1 === "yes1") {
      $('#yes').show();
    } else if (question1 === "no1") {
      $('#no').show();
    } else if (question1 === "both1") {
      $('#both').show();
    }


    if (question2 === "ye2") {
      $('#yes').show();
    } else if (question2 === "no2") {
      $('#no').show();
    } else if (question2 === "both2") {
      $('#both').show();
    }

    if (question3 === "yes3") {
      $('#yes').show();
    } else if (question3 === "no3") {
      $('#no').show();
    } else if (question3 === "both3") {
      $('#both').show();
    }

    if (question4 === "yes4") {
      $('#yes').show();
    } else if (question4 === "no4") {
      $('#no').show();
    } else if (question4 === "both4") {
      $('#both').show();
    }

    if (question5 === "yes5" ) {
      $('#yes').show();
    } else if (question5 === "no5") {
      $('#no').show();
    } else if (question5 === "both5") {
      $('#both').show();
    }

    $("#output").text(result);



    event.preventDefault();
  });
});
