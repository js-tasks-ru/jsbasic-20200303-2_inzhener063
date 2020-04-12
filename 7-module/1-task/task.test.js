describe('7-module-1-task', () => {
  it('должен возвращать промис, который разрешится после клика по кнопке', (done) => {
    let button = document.createElement('button');
    let clickEvent = new MouseEvent('click');

    promiseClick(button).then((event) => {
      expect(event).toBe(clickEvent);

      done();
    });

    button.dispatchEvent(clickEvent);
  });
});
