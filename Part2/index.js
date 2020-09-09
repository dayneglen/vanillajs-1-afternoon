const cardId = document.getElementById('cardId');
const colorInput = document.getElementById('cardAttribute');

console.log(cardId);
console.log(colorInput);

function setCard() {
    const card = document.getElementById(cardId.value);
    card.style.color = colorInput.value;
    console.log(card);
    cardId.value = '';
    colorInput.value = '';
}

function resetCards() {
    diamonds.style.color = '';
    clubs.style.color = '';
    hearts.style.color = '';
    spades.style.color = '';
}