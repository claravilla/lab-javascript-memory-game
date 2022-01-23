const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  // memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code her
      //  card.querySelectorAll("div").forEach((div)=>{
      //   div.classList.toggle("front");
      //   div.classList.toggle("back");
      //  } );

      card.classList.add('turned');

      memoryGame.pickedCards.push(card.getAttribute('data-card-name'));
      console.log(memoryGame.pickedCards);

      if (memoryGame.pickedCards.length === 2) {
        if (
          memoryGame.checkIfPair(
            memoryGame.pickedCards[0],
            memoryGame.pickedCards[1]
          )
        ) {
          console.log('cards match');
          document.querySelectorAll('.turned').forEach((eachCard) => {
            eachCard.classList.add('blocked');
            memoryGame.pickedCards = [];
          });
        } else {
          console.log('cards dont match');
          let interval = setTimeout(function () {
            document.querySelectorAll('.turned').forEach((eachCard) => {
              eachCard.classList.remove('turned');
            });
            memoryGame.pickedCards = [];
          }, 1000);
        }

        let newInterval = setTimeout(function () {
          if (memoryGame.checkIfFinished()) {
            alert('you won');
          }
        }, 1000);
      } //if i have 2 cards turned

      document.getElementById('pairs-clicked').innerText =
        memoryGame.pairsClicked;
      document.getElementById('pairs-guessed').innerText =
        memoryGame.pairsGuessed;
    }); //card event listener
  }); //forEach to add event listener
}); //window event
