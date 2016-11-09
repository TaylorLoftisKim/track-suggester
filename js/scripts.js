$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();

  var q1 = parseInt($(".q1").val());
  console.log(q1);
  var q2 = parseInt($(".q2").val());
  var q3 = parseInt($(".q3").val());
  var q4 = parseInt($(".q4").val());
  var q5 = parseInt($(".q5").val());
  var result = q1 + q2 + q3 + q4 + q5
  console.log(result);

  var trackSurvey = function() {
    debugger;
    if (result > 11) {
      return "#output1";
    } else if (result > 6 && result < 11)  {
      return "#output2";
    } else if (result < 6)  {
      return "#output3";
    }
  }
  var track = trackSurvey(result);
debugger;
    $(".answer").text(track);
    $(".answer").show(track);

  });
});
