/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('-');

  for (let i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );

