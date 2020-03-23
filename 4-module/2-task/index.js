/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
for (var i = 0; i < table.rows.length; i++) {
  var row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}
}
