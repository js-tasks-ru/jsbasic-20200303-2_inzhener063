'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {
    this.el = parentElement;

    let data = JSON.parse(localStorage.getItem(this.productsStoreKey));
    
    this.checkoutContainer(this.el, data);
    this.onRemove(this.el, data);
  }

  onRemove(element) {
    element.addEventListener('click', event => {
      let {target} = event;
      let currentElement = target.closest('.product-wrapper');
      let arr = JSON.parse(localStorage.getItem(this.productsStoreKey));

      if (target.dataset.buttonRole !== 'checkout-remove-product') return;
      
      target = confirm('Вы уверенны, что хотите удалить этот товар из корзины?');
      
      if (target === true) {
        currentElement.remove();
      } else {
        return false;
      }

      for (let i = 0; i < arr.length; i++) {
        if (currentElement.dataset.productId == arr[i].id) {
          let index = arr.indexOf(arr[i]);
          arr.splice(index, 1);
        }
      }

      localStorage.setItem(this.productsStoreKey, JSON.stringify(arr));
    });
  }

  checkoutContainer(element, data) {
    for (let i = 0; i < data.length; i++) {
      this.checkoutTile(element);

      let img = data[i].imageUrl;
      let priceAmount = data[i].price;
      let id = data[i].id;
      let tileTitle = data[i].title;

      let image = element.children[i].querySelector('.product-image');
      let rateContainer = element.children[i].querySelector('.rate');
      let rate = element.children[i].querySelector('.rate-amount');
      let stars;
      let price = element.children[i].querySelector('.product-price');
      let tile = element.children[i];
      let title = element.children[i].querySelector('.col-title');

      image.setAttribute('src', `${img}`);
      price.innerHTML = `${priceAmount}`;
      tile.setAttribute('data-product-id', `${id}`);
      title.innerHTML = `${tileTitle}`;

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
    }
    
  }

  checkoutTile(element) {
    let container = document.createElement('div');
    container.classList.add('product-wrapper', 'box-inner-col', 'description-col');

    let imageContainer = document.createElement('div');
    imageContainer.classList.add('product-image-container');

    let image = document.createElement('img');
    image.classList.add('product-image');

    let productDescription = document.createElement('div');
    productDescription.classList.add('product-description');

    let productTitle = document.createElement('h4');
    productTitle.classList.add('col-title', 'mb-2');

    let rateContainer = document.createElement('div');
    rateContainer.classList.add('rate');

    let rateAmount = document.createElement('p');
    rateAmount.classList.add('rate-amount', 'd-none', 'd-md-block', 'mt-1');

    let productPrice = document.createElement('div');
    productPrice.classList.add('product-price');

    let productPriceLabel = document.createElement('p');
    productPriceLabel.classList.add('mb-0', 'font-weight-light');
    productPriceLabel.innerHTML = 'Price:';

    let productPriceAmount = document.createElement('h4');
    productPriceAmount.classList.add('col-title', 'price-text', 'mb-2');

    let productRemoveWrapper = document.createElement('div');
    productRemoveWrapper.classList.add('product-remove-button-wrapper');

    let productRemoveButton = document.createElement('button');
    productRemoveButton.classList.add('product-remove-button');
    productRemoveButton.setAttribute('type', 'button');
    productRemoveButton.setAttribute('data-button-role', 'checkout-remove-product');
    productRemoveButton.innerHTML = 'X';

    element.appendChild(container);
    container.appendChild(imageContainer);
    container.appendChild(productDescription);
    imageContainer.appendChild(image);
    productDescription.appendChild(productTitle);
    productDescription.appendChild(rateContainer);
    productDescription.appendChild(rateAmount);
    container.appendChild(productPrice);
    productPrice.appendChild(productPriceLabel);
    productPrice.appendChild(productPriceAmount);
    container.appendChild(productRemoveWrapper);
    productRemoveWrapper.appendChild(productRemoveButton);

    for (let i = 0; i < 5; i++) {
      let rateItem = document.createElement('i');
      rateItem.classList.add('icon-star');
      rateContainer.appendChild(rateItem);
    }
  }
}


window.CheckoutProductList = CheckoutProductList;
