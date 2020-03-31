/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const trs = table.querySelector('tbody').querySelectorAll('tr');
    const statusNum = getFieldNumByName(table, 'Status');
    const genderNum = getFieldNumByName(table, 'Gender');
    const ageNum = getFieldNumByName(table, 'Age');
    for (const tr of trs) {
        setAvailable(tr, statusNum);
        setHidden(tr);
        setGender(tr, genderNum);
        setAgeStyle(tr, ageNum);
    };
};
function getFieldNumByName(table, fieldName) {
    const tds = table.querySelector('thead').querySelectorAll('td');
    for (let i = 0; i < tds.length; i++) {
        if (tds[i].innerText === fieldName) return i;
    };
    return -1;
};

function setAvailable(tr, num) {
    const tds = tr.querySelectorAll('td');
    if (tds[num].hasAttribute('data-available')){
        const availableClass = (tds[num].dataset.available === 'true') ? 'available' : 'unavailable';
        tr.classList.remove('available');
        tr.classList.remove('unavailable');
        tr.classList.add(availableClass);
    };
};

function setHidden(tr) {
    if (!tr.hasAttribute('hidden')) tr.setAttribute('hidden', true);
};

function setGender(tr, num) {
    const tds = tr.querySelectorAll('td');
    const genderClass = (tds[num].innerText === 'm') ? 'male' : 'female';
    tr.classList.remove('male');
    tr.classList.remove('female');
    tr.classList.add(genderClass);
};

function setAgeStyle(tr, num) {
    const tds = tr.querySelectorAll('td');
    tr.style = '';
    if (+tds[num].innerText < 18) tr.style = 'text-decoration: line-through';
};