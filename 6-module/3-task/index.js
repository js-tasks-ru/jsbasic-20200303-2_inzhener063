'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;

    this.parseStructure(element);
    this.subMenu(element);
  }

  parseStructure(element) {
    let template = this.template;

    element.innerHTML = template;
  }

  subMenu(element) {
    let menuContainer = element.querySelector('.list-group');
    let overlay = document.querySelector('.backdrop');

    for (let i = 0; i < menuContainer.children.length; i++) {
      let item = menuContainer.children[i];
      let menuDropDown = menuContainer.children[i].querySelector('.dropdown-menu');

      item.onpointerenter = () => {
       menuDropDown.classList.add('show');
       overlay.classList.add('show');
      };

      item.onpointerleave = () => {
        menuDropDown.classList.remove('show');
        overlay.classList.remove('show');
      };
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;