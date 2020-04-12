## Учебный проект: компонента Menu

### Что нужно сделать:
Создать класс компонеты Menu, которая будет рисовать меню внутрь заданного элемента.
Конструктор класса принимает элемент, в который он вставляет свою разметку.

### Отрисовать компоненту меню
Верстка компоненты:

```html
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
```
### Реализовать "выпадение" вложенного меню

Каждый пункт основного меню выглядит вот так:
```html
<li class="list-group-item dropdown">
    <a class="nav-link dropdown-toggle" id="cinema" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home Cinema, TV & Video</a>
    <!-- Расскрывающеся подменю  -->
    <ul class="dropdown-menu" aria-labelledby="cinema">
        <li class="dropdown-item"><a>Home Cinema, TV & Video</a></li>
    </ul>
</li>
```
Пункт основного меню имеет класс: "list-group-item". Список вложенных пунктов меню имеет класс: "dropdown-menu"
Для того, чтобы показывать вложенные пункты меню нужно:
- При наведении мыши на основной пункт меню (событие "pointerenter") добавить класс "show" списку вложенных пуктов меню ("dropdown-menu")
- Когда курсор мыши покидает основной пукт меню (событие "pointerleave") убрать класс "show" со списка вложенных пуктов меню ("dropdown-menu")
* События "pointerenter" и "pointerleave" аналогичны событиям "mouseenter" и "mouseleave" соответственно. 
Мы используем в задаче именно их, т.к. они более универсальные и современные, и на обычном компьютере будут работать точно также аналогичные события мыши. 
Мы работаем над написанием статьи посвященной pointer events, а пока можно почиатать про механику работы "mouseenter" и "mouseleave" [вот тут](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave#sobytiya-mouseenter-i-mouseleave)
Т.к. логика работы у них идентична.

### Реализовать "затемнение" 
На странице есть специальная прозрачная подложка, которая закрывает все на странице, кроме меню. Ее тоже можно скрывать/показывать при наведении на основные пункты меню.
- Класс подложки: "backdrop"
- Класс чтобы показать подложку: "show"
- Искать этот элемент нужно на всей странице, а не в рамках компоненты меню.

### Дополнительное задание: Реализовать событие выбора пункта меню
Если пользователь кликает на элемент меню, то компонент должен сгенерировать пользовательское событие "select" и передать в качестве данных 
`id` выбранного пункта меню.

`Дополнительное задание не проверяется тестами, выполняется по желанию.`
