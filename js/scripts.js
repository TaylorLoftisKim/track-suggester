var trackSurvey = function(result) {
  debugger;
  if (result > 11) {
    return ("Your desired path is CSS and Design!");
  } else if (result > 6 && result < 11)  {
    return ("Your desired path is C# and .NET!");
  } else if (result < 6)  {
    return ("Your desired track is Java and Android!");
  }
}
$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();

  var q1 = parseInt($(".q1").val());
  var q2 = parseInt($(".q2").val());
  var q3 = parseInt($(".q3").val());
  var q4 = parseInt($(".q4").val());
  var q5 = parseInt($(".q5").val());
  var result = q1 + q2 + q3 + q4 + q5
  var track = trackSurvey(result);

debugger;
    $(".answer").text(track);
    $(".answer").show(track);

  });
});
