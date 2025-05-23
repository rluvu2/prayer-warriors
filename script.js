function fetchAndRenderCards() {
  const cardnWrapper = document.querySelector('.cardn-wrapper');
  const cardkWrapper = document.querySelector('.cardk-wrapper');

  fetch('data/cardns.json')
    .then(res => res.json())
    .then(cardns => {
      cardns.forEach(card => {
        const div = document.createElement('div');
        div.className = 'cardn';

        const text = card.text.replace(/\n/g, '<br>');
        const prayer = card.prayer.replace(/\n/g, '<br>');

        div.innerHTML = `
          <img src="${card.img1}">
          <div class="cardn-text">${text}</div>
          <img src="${card.img2}">
          <div class="cardn-text-prayers">${prayer}</div>
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

        const text1 = card.texts[0].replace(/\n/g, '<br>');
        const text2 = card.texts[1].replace(/\n/g, '<br>');

        div.innerHTML = `
          <img src="${card.img}">
          <div class="cardk-text">${text1}</div>
          <p><p>
          <div class="cardk-text">${text2}</div>
        `;
        cardkWrapper.appendChild(div);
      });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderCards();

  const toggleBtn = document.getElementById('toggle-cardk-btn');
  const cardkWrapper = document.querySelector('.cardk-wrapper');

  toggleBtn.addEventListener('click', () => {
    cardkWrapper.classList.toggle('hidden');
  });
});

