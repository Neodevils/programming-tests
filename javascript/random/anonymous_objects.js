class Card {
	constructor(value, suit) {
		this.value = value;
		this.suit = suit;
	}
}
// name is just for reference, so I just used the value and suit
let cards = [
	new Card(5, "Diamonds"),
	new Card(13, "Spades"),
	new Card(2, "Clubs"),
	new Card(10, "Hearts"),
];

cards.forEach((card) => console.log(`${card.value} ${card.suit}`)); // 5 Diamonds ...
