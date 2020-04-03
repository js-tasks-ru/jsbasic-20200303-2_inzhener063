(function () {
    'use strict';
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.render();
                        
    }

       render() {
         this.el.classList.add('pure-table');

         let theadNames = ['Name', 'Age', 'Salary', 'City', ''];

         this.header = this.el.createTHead();
         this.headerRow = this.header.insertRow(0);
         this.headerRow.classList.add('theadRow');
         this.renderRow(theadNames, true);

         if(document.querySelector('.result') !== null){
             this.result = document.querySelector('.result');        
         } else {
             this.result = document.createElement('div');
             document.body.appendChild(this.result);
             this.result.classList.add('result');
         }

         let divResult = document.querySelector('.result');
         divResult.appendChild(this.el);

         this.tBody = this.el.createTBody();
         for (let i = 0; i < this.data.length; i++) {
             this.bodyRow = this.tBody.insertRow(i);
             this.renderRow(this.data[i]);
         }

         this.el.onclick = this.removeTr.bind(this);
         
     }

  renderRow(row, headerRow = false) {
         if (headerRow) {
             for (let i = 0; i < row.length; i++) {
                 let cell = this.headerRow.insertCell(i);
                 cell.innerHTML = row[i];
                 cell.dataset.header = row[i].toLowerCase();
                 if (row[i] === '') cell.dataset.header = 'remove';
             }
         } else {
             let theadTitle = document.querySelectorAll('.theadRow > td');
             let counter = 0;
             for (let key in row) {
                 let cell = this.bodyRow.insertCell(counter);
                 if (row[theadTitle[counter].dataset.header] !== undefined) {
                     cell.innerHTML = row[theadTitle[counter].dataset.header];
                 } else {
                     cell.innerHTML = '<a href="#delete">X</a>';
                 }
                 cell.dataset.title = theadTitle[counter].dataset.header;
                 counter++;
             }
             let cell = this.bodyRow.insertCell(row.length);
             cell.innerHTML = row['id'];
             cell.dataset.title = 'id';
             cell.hidden = true;
         }
     }

     removeTr(e){            
         if(e.target.tagName === 'A'){
             let parentTr = e.target.parentElement.parentElement;
             let id = parentTr.querySelector('td[data-title="id"]').innerText.toString();  
             this.onRemoved(+id);
             e.target.closest('tr').remove();
         }
     }


  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
    onRemoved(id) {
          console.log(id);
          return id;
      }
  }

  window.ClearedTable = ClearedTable;
})();
