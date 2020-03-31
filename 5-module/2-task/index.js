/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
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
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  thead.innerHTML = `
         <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
         </tr>
    `;

  this.el.appendChild(thead);
  this.el.appendChild(tbody);

  function render() {
    tbody.innerHTML = items.map((item) => {
      let row = '';

      for (const key in item) {
        row += `<td>${item[key]}</td>`;
      }

      return `<tr>${row}</tr>`;
    }).join('');
  }

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой нужно
   *  выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    items = items.sort((a, b) => {
      const keyA = Object.keys(a)[column];
      const keyB = Object.keys(b)[column];

      if (desc) {
        return a[keyA] < b[keyB] ? 1 : -1;
      }

      return a[keyA] > b[keyB] ? 1 : -1;
    });

    render();
  };

  render();
}
