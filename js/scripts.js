$(document).ready(function(){
  $("#q-card8").children().show();
  $(".card").click(function(){
    $(this).children(".card-body").slideToggle();
  });
  $("#track").submit(function(event){
    event.preventDefault();
    //get all the variables set based on input
    var q1 = $("input:radio[name=interest]:checked").val();
    var q2 = $("input:radio[name=community]:checked").val();
    var q3 = $("input:radio[name=after]:checked").val();
    var q4 = $("input:radio[name=language-age]:checked").val();
    var q5 = $("#apps").val();
    var q6 = parseInt($("#experience").val());
    var q7 = parseInt($("#problem").val());
    //count up the A's, B's, and C's
    var aTotal = 0;
    var bTotal = 0;
    var cTotal = 0;
    letterQs = [q1,q2,q3,q4];
    for (i=0; i<letterQs.length; i++){
      switch (letterQs[i]) {
        case "a":
          aTotal += 1;
          break;
        case "b":
          bTotal += 1;
          break;
        case "c":
          cTotal += 1;
          break;
      }
    }
    //translate the one about apps, add answer to aTotal,bTotal,cTotal
    if (q5 === "yes") {
      aTotal += 1;
      bTotal += 1;
    }
    else {
      cTotal += 1;
    }
    //Result sorting out
    var result;
    var resultImg = "#epicodus-classes";
    if ((q6 === 1) || (q6 < 3 && q7 === 1)){
      result = "You should try out some more coding and see if you like it! Check out the resources below, then come back and retake this survey."
      resultImg = "#more-coding";
    }
    else if (aTotal >= 3){
      result = "You might like to study CSS and React! Epicodus has a track for that, click below!"
    }
    else if (bTotal >= 3){
      result = "You might like to study Java and Android! Epicodus has a track for that, click below!"
    }
    else if (cTotal >= 3){
      result = "You might like to study Ruby on Rails! Epicodus has a track for that, click below!"
    }
    else {
      result = "Various tracks could be a good fit for you, why dont you check them all out below, and see which one you like best!"
    }
    $("#epicodus-classes").hide();
    $("#more-coding").hide();
    $("#result").text(result);
    $(resultImg).show();
    $(".jumbotron").show();
  });
});
