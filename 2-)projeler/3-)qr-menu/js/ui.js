const elements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("#buttons input"),
};

const renderCards = (data) => {
  // Data dizisini dön ve herbir eleman için bir html oluştur
  const cardsHtml = data
    .map(
      (item) => ` <a href='/detail.html?id=${
        item.id
      }' class="d-flex flex-column text-decoration-none flex-md-row text-dark gap-3" id="card">
        <img
          class="rounded img-fluid shadow"
          src="${item.img}"
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}₺</p>
          </div>
          <p class="lead">
           ${item.desc}.
          </p>
        </div>
      </a>`
    )
    .join("");

  // Oluşturulan htmli menuList içerisine ata
  elements.menuList.innerHTML = cardsHtml;
};

export { renderCards, elements };
