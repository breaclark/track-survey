$(document).ready(function(){
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
    //If the last two are low, suggest they try that out and come back
    

    //If there's no real sway, give them info for all the tracks, tell them to check it out themselves
  });
});
