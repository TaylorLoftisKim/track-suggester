$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    var yes1 = $("input:radio[name=question1]:checked").val();
    var no1 = $("input:radio[name=question1]:checked").val();
    var both1 = $("input:radio[name=question1]:checked").val();

    var yes2 = $("input:radio[name=question2]:checked").val();
    var no2 = $("input:radio[name=question2]:checked").val();
    var both2 = $("input:radio[name=question2]:checked").val();

    var yes3 = $("input:radio[name=question3]:checked").val();
    var no3 = $("input:radio[name=question3]:checked").val();
    var both3 = $("input:radio[name=question3]:checked").val();

    var yes4 = $("input:radio[name=question4]:checked").val();
    var no4 = $("input:radio[name=question4]:checked").val();
    var both4 = $("input:radio[name=question4]:checked").val();

    var yes5 = $("input:radio[name=question5]:checked").val();
    var no5 = $("input:radio[name=question5]:checked").val();
    var both5 = $("input:radio[name=question5]:checked").val();

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
