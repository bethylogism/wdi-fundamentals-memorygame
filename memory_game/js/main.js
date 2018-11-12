console.log("Up and running!");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function () {
if ((cardsInPlay.length >= 2) && (cardsInPlay [0] === cardsInPlay [1])) {
		alert("You found a match, SNAP!");
		} else {
			alert("Sorry, try again.")
		}
}

var flipCard = function(cardId) {
console.log("You gone done flipped " + cards[cardId]);
cardsInPlay.push (cards[cardId]);
checkForMatch();
}

flipCard(0);
flipCard(2);


