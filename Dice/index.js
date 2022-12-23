                  //image 1 //
   var randomNumber1 = Math.random();
   randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

   var randomDiceImageSource = "images/dice" + randomNumber1 + ".png";
   document.querySelector(".img1").setAttribute("src", randomDiceImageSource);

                  //image 2 //
    var randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

    var randomDiceImageSourcee2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomDiceImageSourcee2);


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " Play 2 Wins! 🚩";
} else{
    document.querySelector("h1").innerHTML = "Draw"
}
