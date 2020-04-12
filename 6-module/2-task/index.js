'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;

    this.render(element);
  }

  render(element) {
    this.carouselContainers(element);
  }

  carouselContainers(element) {
    let divCarousel = document.createElement('div');
    divCarousel.getAttribute('id', "mainCarousel");
    divCarousel.classList.add('main-carousel', 'carousel', 'slide');

    let divInner = document.createElement('div');
    divInner.classList.add('carousel-inner');

    this.carouselIndicators(divCarousel);
    this.onPaginationClick(element)

    element.appendChild(divCarousel);
    divCarousel.appendChild(divInner);

    this.carouselItem(divInner, this.slides, 0);

    this.carouselButtons(divCarousel, 'carousel-control-prev', 'prev', 'Previous', 'carousel-control-prev-icon');
    this.carouselButtons(divCarousel, 'carousel-control-next', 'next', 'Next', 'carousel-control-next-icon');
    this.onClickButton(element);
  }

  carouselItem(element, arr, id) {
    let arrItem, arrImage, arrTitle;

    for (let item = 0; item < arr.length; item++) {
      if (id === item) {
        arrItem = arr[id];
        arrImage = arrItem.img;
        arrTitle = arrItem.title;
      }
    }

    let carouselSlide = document.createElement('div');
    carouselSlide.classList.add('carousel-item', 'active');

    let carouselImage = document.createElement('img');
    carouselImage.setAttribute('alt', 'Activelide');
    carouselImage.setAttribute('src', arrImage);

    let carouselSlideContainer = document.createElement('div');
    carouselSlideContainer.classList.add('container');

    let carouselSlideCaption = document.createElement('div');
    carouselSlideCaption.classList.add('carousel-caption');

    let carouselSlideTitle = document.createElement('h3');
    carouselSlideTitle.classList.add('h1');
    carouselSlideTitle.innerHTML = arrTitle;

    let carouselSlideDiv = document.createElement('div');

    let carouselSlideButton = document.createElement('a');
    carouselSlideButton.classList.add('btn');
    carouselSlideButton.setAttribute('href', '#');
    carouselSlideButton.setAttribute('role', 'button');
    carouselSlideButton.innerHTML = 'View all DEALS';

    let carouselSlideImage = document.createElement('img');
    carouselSlideImage.setAttribute('src', 'assets/icons/icon-angle-white.svg');
    carouselSlideImage.setAttribute('alt', '');
    carouselSlideImage.classList.add('ml-3');

    carouselSlide.appendChild(carouselImage);
    carouselSlide.appendChild(carouselSlideContainer);
    carouselSlideContainer.appendChild(carouselSlideCaption);
    carouselSlideCaption.appendChild(carouselSlideTitle);
    carouselSlideCaption.appendChild(carouselSlideDiv);
    carouselSlideDiv.appendChild(carouselSlideButton);
    carouselSlideButton.appendChild(carouselSlideImage);
    element.appendChild(carouselSlide);
  }

  carouselButtons(element, positionClass, data, text, iconCarouselClass) {
    let button = document.createElement('button');
    button.classList.add(positionClass);
    button.setAttribute('href','#mainCarousel');
    button.setAttribute('role', 'button');
    button.setAttribute('data-slide', data);

    let buttonIcon = document.createElement('span');
    buttonIcon.classList.add(iconCarouselClass);
    buttonIcon.setAttribute('aria-hidden', 'true');

    let buttonText = document.createElement('span');
    buttonText.classList.add('sr-only');
    buttonText.innerHTML = text;

    button.appendChild(buttonIcon);
    button.appendChild(buttonText);
    element.appendChild(button);
  }

  onClickButton(element) {
    let nextIndicator = 0;
    let prevIndicator = this.slides.length;

    let buttonNext = element.querySelector('[data-slide="next"]');
    let buttonPrev = element.querySelector('[data-slide="prev"]');
    let divInner = element.querySelector('.carousel-inner');
    let paginationItem = element.querySelector('.carousel-indicator');

    buttonNext.onclick = () => {
      paginationItem.classList.remove('active');
      nextIndicator = nextIndicator + 1;

      if (nextIndicator === this.slides.length) {
        nextIndicator = 0;
      };

      let indicatorContainer = element.querySelector('.carousel-indicators');
      let indicatorItem = element.querySelector(`[data-slide-to='${nextIndicator}']`);

      for (let i = 0; i < indicatorContainer.children.length; i++) {
        let elem = indicatorContainer.children[i];
        elem.classList.remove('active');
      }

      indicatorItem.classList.add('active');

      divInner.lastElementChild.remove();
      this.carouselItem(divInner, this.slides, nextIndicator);
    }

    buttonPrev.onclick = () => {
      prevIndicator = prevIndicator - 1;

      if (prevIndicator === -1) {
        prevIndicator = this.slides.length - 1;
      }

      let indicatorContainer = element.querySelector('.carousel-indicators');
      let indicatorItem = element.querySelector(`[data-slide-to='${prevIndicator}']`);

      for (let i = 0; i < indicatorContainer.children.length; i++) {
        let elem = indicatorContainer.children[i];
        elem.classList.remove('active');
      }

      indicatorItem.classList.add('active');

      divInner.lastElementChild.remove();
      this.carouselItem(divInner, this.slides, prevIndicator);
    }
  }

  carouselIndicators(element) {
    let carouselIndicatorList = document.createElement('ol');
    let carouselIndicator;
    carouselIndicatorList.classList.add('carousel-indicators');

    for (let i = 0; i < this.slides.length; i++) {
      carouselIndicator = document.createElement('li');
      carouselIndicator.classList.add('carousel-indicator');
      carouselIndicator.setAttribute('data-target', '#mainCarousel');
      carouselIndicatorList.appendChild(carouselIndicator);
      carouselIndicator.setAttribute('data-slide-to', `${i}`);
    }

    carouselIndicatorList.firstElementChild.classList.add('active');
    element.appendChild(carouselIndicatorList);
  }

  onPaginationClick(element) {
    element.addEventListener('click', event => {
      let {target} = event;
      let targetDot;
      let divInner = element.querySelector('.carousel-inner');

      if (target.tagName != 'LI') return;

      let indicatorContainer = element.querySelector('.carousel-indicators');
  
      for (let i = 0; i < indicatorContainer.children.length; i++) {
          let elem = indicatorContainer.children[i];
          elem.classList.remove('active');
      }

      target.classList.add('active');

      targetDot = +target.getAttribute('data-slide-to');
      element.querySelector('.carousel-inner').lastElementChild.remove();
      
      if (targetDot === 0) {
        this.carouselItem(divInner, this.slides, 0);
      }
  
      if (targetDot === 1) {
        this.carouselItem(divInner, this.slides, 1);
      }
  
      if (targetDot === 2) {
        this.carouselItem(divInner, this.slides, 2);
      }
    });
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
