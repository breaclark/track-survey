$(document).ready(function(){
  $("#track").submit(function(event){
    event.preventDefault();
    var q1 = $("input:radio[name=interest]:checked").val();
    var q2 = $("input:radio[name=community]:checked").val();
    var q3 = $("input:radio[name=after]:checked").val();
    var q4 = $("input:radio[name=language-age]:checked").val();
    console.log(q1,q2,q3,q4);
    //count up the A's, B's, and C's

    //translate the one about apps

    //If the last two are low, suggest they try that out and come back

  });
});
