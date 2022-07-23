const cardsList = document.querySelector('.cards__list');

for (let index = 0; index < 24; index += 1) {
  const cardItem = document.createElement('li');
  cardItem.className = 'cards__item';

  const cardImage = document.createElement('img');
  cardImage.src = './images/characters/card-back.png';
  cardImage.alt = 'ALT MESSAGE';
  cardImage.className = 'cards__image';

  cardItem.appendChild(cardImage);
  cardsList.appendChild(cardItem);
}
