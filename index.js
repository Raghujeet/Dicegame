var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var img = document.querySelectorAll("img")[0];

img.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 winner 🚩";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 winner 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw ⚔";
}
