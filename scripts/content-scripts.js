function createFloatingButton() {
  const mainButton = document.createElement('button');
  mainButton.className = 'btn btn-info';
  mainButton.innerText = 'set quick-link';

  mainButton.addEventListener('click', () => {
    console.warn('clicked');
    createFloatingCard();
  });

  document.body.appendChild(mainButton);
}

function createFloatingCard() {
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style = 'width: 18rem;'
  mainCard.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
  `;
  document.body.appendChild(mainCard);
}

createFloatingButton();