$(document).ready(function() {
  $("form#survey").submit(function(event) {
    debugger;
    var yes1 = ($("input:radio[name=yes1]:checked").val());
    var no1 = ($("input:radio[name=no]:checked").val());
    var yes2 = ($("input:radio[name=yes2]:checked").val());
    var no2 = ($("input:radio[name=no]:checked").val());
    var yes3 = ($("input:radio[name=yes3]:checked").val());
    var no3 = ($("input:radio[name=no]:checked").val());
    var yes4 = ($("input:radio[name=yes4]:checked").val());
    var no4 = ($("input:radio[name=no]:checked").val());
    var yes5 = ($("input:radio[name=yes5]:checked").val());
    var no5 = ($("input:radio[name=no]:checked").val());


    console.log(yes)
    console.log(no)

    if (yes1 === "yes1") {
      $('#yes').show();
    } else if (yes2 === "yes2") {
      $('#yes').show();
    } else if (yes3 === "yes3") {
      $('#yes').show();
    } else if (yes4 === "yes4") {
      $('#yes').show();
    } else if (yes5 === "yes5") {
      $('#yes').show();
    }

    event.preventDefault();
  });
});
