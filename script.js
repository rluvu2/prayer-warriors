function fetchAndRenderCards() {
  const cardnWrapper = document.querySelector('.cardn-wrapper');
  const cardkWrapper = document.querySelector('.cardk-wrapper');

  fetch('data/cardns.json')
    .then(res => res.json())
    .then(cardns => {
      cardns.forEach(card => {
        const div = document.createElement('div');
        div.className = 'cardn';
        div.innerHTML = `
          <img src="${card.img1}">
          <div class="cardn-text">${card.text}</div>
          <img src="${card.img2}">
          <div class="cardn-text-prayers">${card.prayer}</div>
        `;
        cardnWrapper.appendChild(div);
      });
    });

  fetch('data/cardks.json')
    .then(res => res.json())
    .then(cardks => {
      cardks.forEach(card => {
        const div = document.createElement('div');
        div.className = 'cardk';
        div.innerHTML = `
          <img src="${card.img}">
          <div class="cardk-text">${card.texts[0]}</div>
          <div class="cardk-text">${card.texts[1]}</div>
        `;
        cardkWrapper.appendChild(div);
      });
    });
}

document.addEventListener('DOMContentLoaded', fetchAndRenderCards);
