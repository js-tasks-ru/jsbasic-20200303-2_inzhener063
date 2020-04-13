class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
  }

  show() {
    return fetch(this.productsUrl)
      .then(response => response.json())
      .then(data => {
        this.componentContainer(this.el, data);
        this.addToCart();
      });
  }

  addToCart() {
    this.el.addEventListener('click', event => {
      let {target} = event;
      
      if (target.dataset.buttonRole !== 'add-to-cart') return;

      let item = target.closest('.products-list-product');
      let name = item.querySelector('.card-title').innerHTML;
      let productId = +item.getAttribute('data-product-id');
      let imgSrc = item.querySelector('.card-img-top').getAttribute('src');
      let stars = item.querySelectorAll('.checked').length;
      let starsAmount = item.querySelector('.rate') ? item.querySelector('.rate-amount').innerHTML : null;
      let productPrice = item.querySelector('strong').innerHTML;
      let productPriceOld = item.querySelector('small.ml-2') ? item.querySelector('small.ml-2').innerHTML : null;
      
      target = confirm('Вы уверенны, что хотите добавить этот товар в корзину?');

      if (target === true) {
        let oldItems = JSON.parse(localStorage.getItem(this.productsStoreKey)) || [];

        let newItem = {
          id: productId,
          title: name,
          imageUrl: imgSrc,
          rating: {
            stars: stars,
            reviewsAmount: starsAmount
          },
          price: productPrice,
          oldPrice: productPriceOld
        };

        let key, oldItemsKey;
        for (let key of oldItems) {
          oldItemsKey = key.id;
        }

        //console.log(oldItemsKey);

        oldItems.push(newItem);
        
        localStorage.setItem(this.productsStoreKey, JSON.stringify(oldItems));
      } else {
        return false;
      }
    });
  }

  productTile(element) {
    let container = document.createElement('div');
    container.classList.add('products-list-product', 'col-md-6', 'col-lg-4', 'mb-4');

    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    let cardImageWrapper = document.createElement('div');
    cardImageWrapper.classList.add('card-img-wrap');

    let cardImage = document.createElement('img');
    cardImage.classList.add('card-img-top');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardBodyTitle = document.createElement('h5');
    cardBodyTitle.classList.add('card-title');

    let cardButton = document.createElement('button');
    cardButton.classList.add('product-add-to-cart');
    cardButton.setAttribute('data-button-role', 'add-to-cart');
    cardButton.innerHTML = 'Add to cart';

    let cardRatings = document.createElement('div');
    cardRatings.classList.add('rate');

    let rate = document.createElement('span');
    rate.classList.add('rate-amount', 'ml-2');

    for (let j = 0; j < 5; j++) {
      let stars = document.createElement('i');
      stars.classList.add('icon-star');
      cardRatings.appendChild(stars);
    }

    let cardPrice = document.createElement('p');
    cardPrice.classList.add('card-text', 'price-text');

    let strong = document.createElement('strong');
    let small = document.createElement('small');
    small.classList.add('ml-2');

    container.appendChild(cardContainer);
    cardContainer.appendChild(cardImageWrapper);
    cardImageWrapper.appendChild(cardImage);
    cardContainer.appendChild(cardBody);
    cardBody.appendChild(cardBodyTitle);
    cardRatings.appendChild(rate);
    cardBody.appendChild(cardRatings);
    cardPrice.appendChild(strong);
    cardPrice.appendChild(small);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardButton);
    
    element.appendChild(container);
  }

  componentContainer(element, data) {
    let row = document.createElement('div');
    row.classList.add('row', 'justify-content-end');

    let col = document.createElement('div');
    col.classList.add('col-lg-9');

    let title = document.createElement('h3');
    title.classList.add('section-title');
    title.innerHTML = 'Top Recommendations for You';

    let tilesContainer = document.createElement('div');
    tilesContainer.classList.add('row', 'homepage-cards');

    element.appendChild(row);
    row.appendChild(col);
    col.appendChild(title);
    col.appendChild(tilesContainer);

    for (let i = 0; i < data.length; i++) {
      this.productTile(tilesContainer); // added product tile to grid

      let id = data[i].id;
      let img = data[i].imageUrl;
      let tileTitle = data[i].title;

      let cardImage = tilesContainer.children[i].querySelector('.card-img-top');
      let cardBodyTitle = tilesContainer.children[i].querySelector('.card-title');

      tilesContainer.children[i].setAttribute('data-product-id', `${id}`);
      cardImage.setAttribute('src', `${img}`);
      cardBodyTitle.innerHTML = `${tileTitle}`;

      let rateContainer = tilesContainer.children[i].querySelector('.rate');
      let rate = tilesContainer.children[i].querySelector('.rate-amount');
      let stars;

      if (data[i].rating !== null) {
        for (let j = 0; j < rateContainer.children.length; j++) {
          stars = rateContainer.children[j];
          
          if (j < data[i].rating.stars) {
            stars.classList.add('checked');
          } 
        } 
            
        rate.innerHTML = data[i].rating.reviewsAmount;
      } else {
        rateContainer.remove();
      }

      let tileSmall = tilesContainer.children[i].querySelector('small.ml-2');
      let tileStrong = tilesContainer.children[i].querySelector('strong');

      tileStrong.innerHTML = data[i].price;

      if (data[i].oldPrice != null) {
        tileSmall.innerHTML = data[i].oldPrice;
      } else {
        tilesContainer.children[i].querySelector('small.ml-2').remove();
      }
    }
  }
}


// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
