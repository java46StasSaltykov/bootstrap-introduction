const letters = ["A", "B", "C", "D", "E", "F", "G", "H" ];
const matrix = getChessMatrix();
let clickFn;
class ChessBoard {
    constructor(idParent, clickFnP) {
        this.parentElem = document.getElementById(idParent);
        clickFn = clickFnP;
    }
    render() {
        this.parentElem.innerHTML = `${getTitle()}${getContent()}${getTitle()}`
    }
}
function getTitle() {
    return `${getRow()}${getEmptyCell()}${getLetters()}${getEmptyCell()}</div>`
}
function getRow() {
    return `<div class="row">`
}
function getEmptyCell() {
    return `<div class="col-auto text-white">1</div>`
}
function getChessMatrix() {
    const matrix = [];
    let count = 0
    for (let i = 0; i < 8; i++) {
        matrix.push([]);
        for (let j = 0; j < 8; j++) {
            matrix[i][j] = count++ % 2 - i % 2;
        }
    }
    return matrix;
}
function getContent() {
    return matrix.map((r, i) => `${getChessRow(r,i)}</div>`).join('');
}
function getChessRow(row, index) {
    return `${getRow()}${getRowNumber(index)}${getChessCells(row, index)}
     ${getRowNumber(index)}`
}
function getChessCells(row, index) {
    return row.map(getChessCell(index)).join('');
}

function getChessCell(index) {
    return (cell, j) => `<div class="col-auto ${cell == 0 ? 'bg-dark' : 'bg-white'}
     ${cell == 0 ? 'text-dark' : 'text-white'} border
      " onclick="${clickFn.name}('${letters[j]}', ${index})" >${letters[j]}</div>`;
}

function getLetters() {
    return letters.map(l => `<div class="col-auto border border-white" >${l}</div>`).join('')
}
function getRowNumber(num) {
    return `<div class="col-auto">${num}</div>`
}