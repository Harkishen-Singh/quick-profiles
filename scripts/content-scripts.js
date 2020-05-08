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
    <div class="card-body" id="aaaa">
        <h5 class="card-title">Quick links</h5>
        <h6 class="card-subtitle mb-2 text-muted">Add quick links</h6>
        <div class="form-group">
          <label for="exampleInputEmail1">Profile link</label>
          <input type="text" class="form-control" id="profileLinkManual" aria-describedby="emailHelp" placeholder="Enter profile link">
        </div>
        <button class="btn btn-dark btn-sm">Submit</button>
    </div>
  `;
  document.body.appendChild(mainCard);

  const cancelButton = document.createElement('img');
  cancelButton.src="../assets/media-icons/cross-cancel.png";
  console.warn(document.getElementById('aaaa'))
  document.getElementById('aaaa').appendChild(cancelButton)
}

createFloatingButton();