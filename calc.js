let displayVal = '0';
let value = null;

const iO = document.querySelector('.in-out');
iO.innerText = displayVal;

document.querySelectorAll('.num').forEach(item => {
  item.addEventListener('click', function(event) {
    let cNum = iO.innerText;
    if (cNum === '0') {
        cNum = item.innerText;
    } else {
        cNum += item.innerText;
    }
    iO.innerText = cNum;
  });
});

document.querySelector('.clear-button').addEventListener('click', function() {
    iO.innerText = '0';
    value = 0;
});

document.querySelector('.back-button').addEventListener('click', function() {
    if (iO.innerText.length === 1) {
        displayVal = '0';
        iO.innerText = displayVal;
        value = 0;
    } else {
        displayVal = iO.innerText.substr(0, iO.innerText.length -1);
        iO.innerText = displayVal;
    }
});

let op = 'none';

function exOp (o) {
    if (op == 'add') {
        value = value + Number(o);
    } else if (op == 'sub') {
        value = value - Number(o);
    } else if (op == 'mlt') {
        value = value * Number(o);
    } else if (op == 'div') {
        value = value / Number(o);
    } else {
        value = Number(o);
    }
    iO.innerText = '0';
    console.log(value);
}

addB = document.querySelector('.add').addEventListener('click', function() {
    exOp(iO.innerText);
    op = 'add';
});
subB = document.querySelector('.subtract').addEventListener('click', function() {
    exOp(iO.innerText);
    op = 'sub';
});
mltB = document.querySelector('.multiply').addEventListener('click', function() {
    exOp(iO.innerText);
    op = 'mlt';
});
divB = document.querySelector('.divide').addEventListener('click', function() {
    exOp(iO.innerText);
    op = 'div';
});
divB = document.querySelector('.equal').addEventListener('click', function() {
    exOp(iO.innerText);
    iO.innerText = value;
    op = 'None';
});
