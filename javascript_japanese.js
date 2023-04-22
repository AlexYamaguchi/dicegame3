var randomNumber = Math.floor(Math.random() * 6) + 1; //random numbers from 1 to 6
var randomDiceImage = "dice" + randomNumber + ".png"; //dice1 to dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random numbers from 1 to 6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1 to dice6

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


document.querySelector("h2").innerHTML = randomNumber + " " + randomNumber2;




if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩プレイヤー♯1の勝ち！";


} else if (randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "プレイヤー♯2の勝ち 🚩 ！";
} else {
  document.querySelector("h1").innerHTML = "引き分け！";
}
