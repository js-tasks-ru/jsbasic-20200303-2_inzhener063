## Компонент Сортируемая таблица (SortableTable) ##

В этом задании мы вам предлагаем сделать компонент, который реализует
сортируемую таблицу для заранее определенной структуры данных.

Пример структуры:
```js
let rows = [
    {
        name: 'Ilia',
        age: 25,
        salary: 1000,
        city: 'Petrozavodsk'
    },
    {
        name: 'Vasya',
        age: 14,
        salary: 1500,
        city: 'Moscow'
    }
];
```

Для успешного прохождения тестов, вам нужно поддержать следующую структуру в html:
```html
<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ilia</td>
            <td>25</td>
            <td>1000</td>
            <td>Petrozavodsk</td>
        </tr>
        ...
    </tbody>
</table>
```

Данный компонент предполагается использовать следующим образом:
```js
let table = new SortableTable(rows);
let container = document.querySelector('.result');

container.appendChild(table.el);

table.sort(0); // Отсортирует созданную таблицу по первой колонке (Name)
table.sort(0, true); // Отсортирует созданную таблицу по первой колонке (Name) в обратном порядке
```
