class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // ... write your code here
    if (this.cards===undefined){
      return undefined;
    }

    let randomNumber;
    let cardsPlaceholder;
    for (let i=1;i<this.cards.length;i++){
        randomNumber = Math.floor(Math.random()*(i+1));
        cardsPlaceholder=this.cards[i];
        this.cards[i]=this.cards[randomNumber];
        this.cards[randomNumber] = cardsPlaceholder;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1===card2) {
      this.pairsGuessed++
      return true;
    }
      return false;
   
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed===this.cards.length/2) {
        return true;
    }
     return false;

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
