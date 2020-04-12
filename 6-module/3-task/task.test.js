describe('6-module-3-task', () => {
  let menu;
  let backdrop;
  let element;

  beforeEach(() => {
    backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    element = document.createElement('div');

    document.body.appendChild(backdrop);
    document.body.appendChild(element);

    menu = new Menu(element);
  });

  afterEach(() => {
    backdrop.remove();
    element.remove();
    menu = null;
  });

  it('проверяем, что меню содержит все пункты', () => {
    expect(element.querySelectorAll('.list-group-item').length).toEqual(2);
    expect(element.querySelectorAll('.dropdown-item').length).toEqual(3);
  });

  it('проверяем, что при наведении на "Camera & Photo", покажется его подменю', () => {
    element.querySelector('.list-group-item').dispatchEvent(new Event('pointerenter', { bubbles: false }));
    expect(element.querySelector('.dropdown-menu').classList.contains('show'))
      .toEqual(true);
  });

  it('проверяем, что при уходе курсора с "Camera & Photo", подменю спрячется', () => {
    element.querySelector('.dropdown-menu').classList.add('show');
    element.querySelector('.list-group-item').dispatchEvent(new Event('pointerleave', { bubbles: false }));
    expect(element.querySelector('.dropdown-menu').classList.contains('show'))
      .toEqual(false);
  });

  it('проверяем показ затемнения backdrop', () => {
    element.querySelector('.dropdown').dispatchEvent(new Event('pointerenter', { bubbles: false }));
    expect(backdrop.classList.contains('show'))
      .toEqual(true);
  });

  it('проверяем снятие затемнения backdrop', () => {
    backdrop.classList.add('show');
    element.querySelector('.list-group-item').dispatchEvent(new Event('pointerleave', { bubbles: false }));
    expect(backdrop.classList.contains('show'))
      .toEqual(false);
  });

});
