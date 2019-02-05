$(function(){
  //génération d'un nbre aléa
  randomNumber = Math.floor(Math.random()*100);
  tryCount = 0;
  $("#test").click(function(){
    userNumber = $("#guestNumber").val();
    tryCount++;
    if (isNaN(userNumber) || userNumber<0 || userNumber>100) {
      message = "entrer un nombre entre 0 et 100";
    }else{
      if (userNumber == randomNumber){
        message = "correct "+tryCount;
      }else if (userNumber > randomNumber){
        message = "moins";
      }else{
        message = "plus";
      }
    }
    alert(message);
  });
});

/*  if(guestNumber > randomNumber){
alert("plus bas");
}
else if(guestNumber < randomNumber){
alert("plus haut");
}
else{
alert("bien joué");
}
$("#result").html(randomNumber);
});
});*/
