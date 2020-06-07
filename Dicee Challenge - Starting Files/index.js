var randomNumberOne = Math.floor((Math.random()*6)+1);


var diceOne = document.querySelector("img").setAttribute("src","images/dice4.png");

  if (randomNumberOne === 1){
    document.querySelector("img").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumberOne === 2){
    document.querySelector("img").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumberOne === 3){
    document.querySelector("img").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumberOne === 4){
    document.querySelector("img").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumberOne === 5){
    document.querySelector("img").setAttribute("src", "images/dice5.png");
  }
  else if (randomNumberOne === 6){
    document.querySelector("img").setAttribute("src", "images/dice6.png");
  }

var diceTwo = document.querySelector("img.img2").setAttribute("src","images/dice4.png");

var randomNumberTwo = Math.floor((Math.random()*6)+1);

if (randomNumberTwo === 1){
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
}
else if (randomNumberTwo === 2){
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
}
else if (randomNumberTwo === 3){
  document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
}
else if (randomNumberTwo === 4){
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
}
else if (randomNumberTwo === 5){
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
}
else if (randomNumberTwo === 6){
  document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}

var header = document.lastElementChild.lastElementChild.firstElementChild.firstElementChild;

if (randomNumberOne > randomNumberTwo){
  header.innerHTML = "Player 1 Wins!";
}
else if (randomNumberOne < randomNumberTwo){
  header.innerHTML = "Player 2 wins!";
}
else if (randomNumberOne === randomNumberTwo){
  header.innerHTML = "Draw!";
}
