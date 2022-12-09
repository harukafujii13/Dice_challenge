// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 6 + 1;
// randomNumber1 = Math.floor(randomNumber1);
// console.log(randomNumber1)

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; 
//dice1.png - dice6.png　randomNumber1を文字列'dice'の末尾に連結して、ランダムなサイコロ画面を取得。

var randomImageSource = "images/" + randomDiceImage; 
//images/dice1.png - images/dice6.png　randomDiceImageを使って、画像のソース(ex. src="images/dice6.png")を
//ランダムな画像名に変更する。

var image1 = document.querySelectorAll("img")[0];
//querySelectorAllでimgクラスを選択→１つ目のimgを選択したいから[0]

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)


//if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😝Player 1 wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "😘Player 2 wins!"
}
else {
    document.querySelector("h1").innerHTML = "😶Draw!"
}
