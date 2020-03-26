describe('5-module-2-task', () => {
  it('проверяем, что при создании, таблица содержит корректный head', () => {
    const table = new SortableTable([{
      name: 'Ilia',
      age: 25,
      salary: '1000',
      city: 'Petrozavodsk',
    }]);

    expect(table.el.querySelectorAll('thead').length).toEqual(1);
    expect(table.el.querySelectorAll('thead td').length).toEqual(4);
  });

  it(`проверяем, что при создании, таблица создает элементы в том порядке
    в котором они перечислены в передаваемом массиве`, () => {
    const table = new SortableTable([
      {
        name: 'Artem',
        age: 30,
        salary: 10000,
        city: 'London',
      },
      {
        name: 'Vasiliy',
        age: 170,
        salary: 34,
        city: 'Moscow',
      },
      {
        name: 'Ilia',
        age: 25,
        salary: 1000,
        city: 'Petrozavodsk',
      },
    ]);

    const rows = table.el.querySelectorAll('tbody tr');

    expect(rows.length).toEqual(3);
    expect(rows[0].cells[0].innerText).toEqual('Artem');
    expect(rows[1].cells[0].innerText).toEqual('Vasiliy');
    expect(rows[2].cells[0].innerText).toEqual('Ilia');
  });

  it('проверяем сортировку имени в алфавитном порядке', () => {
    const table = new SortableTable([
      {
        name: 'Artem',
        age: 30,
        salary: 10000,
        city: 'London',
      },
      {
        name: 'Ilia',
        age: 25,
        salary: 1000,
        city: 'Petrozavodsk',
      },
    ]);

    table.sort(0);

    const rows = table.el.querySelectorAll('tbody tr');

    expect(rows.length).toEqual(2);
    expect(rows[0].cells[0].innerText).toEqual('Artem');
    expect(rows[1].cells[0].innerText).toEqual('Ilia');
  });


  it('проверяем сортировку имени в обратном порядке', () => {
    const table = new SortableTable([
      {
        name: 'Artem',
        age: 30,
        salary: 10000,
        city: 'London',
      },
      {
        name: 'Ilia',
        age: 25,
        salary: 1000,
        city: 'Petrozavodsk',
      },
    ]);

    table.sort(0, true);

    const rows = table.el.querySelectorAll('tbody tr');

    expect(rows.length).toEqual(2);
    expect(rows[0].cells[0].innerText).toEqual('Ilia');
    expect(rows[1].cells[0].innerText).toEqual('Artem');
  });

  it('проверяем сортировку зарплаты по возрастанию', () => {
    const table = new SortableTable([
      {
        name: 'Artem',
        age: 30,
        salary: 10000,
        city: 'London',
      },
      {
        name: 'Ilia',
        age: 25,
        salary: 100,
        city: 'Petrozavodsk',
      },
    ]);

    table.sort(2);

    const rows = table.el.querySelectorAll('tbody tr');

    expect(rows.length).toEqual(2);
    expect(rows[0].cells[0].innerText).toEqual('Ilia');
    expect(rows[1].cells[0].innerText).toEqual('Artem');
  });
});
