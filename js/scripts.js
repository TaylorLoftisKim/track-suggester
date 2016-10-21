$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
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

    debugger;

    console.log(yes)
    console.log(no)

    if (question1 === "yes1" || question1 != "no1" || question1 != "both1") {
      $('.cssDesign').show();
    } else if (question1 === "no1" || question1 != "yes1" || question1 != "both1") {
      $('.cnet').show();
    } else if (question1 === "both1" || question1 != "yes1" || question1 != "no1") {
      $('.javaAndroid').show();
    }

    if (question2 === "yes2" || question2 != "no2" || question2 != "both2") {
      $('.cssDesign').show();
    } else if (question2 === "no2" || question2 != "yes2" || question2 != "both1") {
      $('.cnet').show();
    } else if (question2 === "both2" || question2 != "yes2" || question2 != "no2") {
      $('.javaAndroid').show();
    }

    if (question3 === "yes3" || question3 != "no3" || question3 != "both3") {
      $('.cssDesign').show();
    } else if (question3 === "no3" || question3 != "yes3" || question3 != "both3") {
      $('.cnet').show();
    } else if (question3 === "both3" || question3 != "yes3" || question3 != "no3") {
      $('.javaAndroid').show();
    }

    if (question4 === "yes4" || question4 != "no4" || question4 != "both4") {
      $('.cssDesign').show();
    } else if (question4 === "no4" || question4 != "yes4" || question4 != "both4") {
      $('.cnet').show();
    } else if (question4 === "both4" || question4 != "yes4" || question4 != "no4") {
      $('.javaAndroid').show();
    }

    if (question5 === "yes5" || question5 != "no5" || question5 != "both5")
      $('.cssDesign').show();
    } else if (question5 === "no5" || question5 != "yes5" || question5 != "both5") {
      $('.cnet').show();
    } else if (question5 === "both5" || question5 != "yes5" || question5 != "no5") {
      $('.javaAndroid').show();
    }

    $("#output").text(result);

  });
});
