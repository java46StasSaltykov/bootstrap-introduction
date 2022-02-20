function createItems(clickFunction, rows, cells) {
    const row = [];
    const result = [];
    let color = true;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cells; j++) {
            if(j % 8 != 1)
                color = !color;

            if(color == true){
                row.push(`<div class="col border border-dark onclick="${clickFunction(i, j)}"></div>`);
            }else{
                row.push(`<div class="col border border-dark bg-dark onclick="${clickFunction(i, j)}"></div>`);
            }
        }
        result.push(`<div class="row">${row}</div>`);
    }
    return result.join('');
};

class ChessBoard {
    constructor(IdParentElement, clickFunction, rows, cells) {
        this.clickFunction = clickFunction;
        this.parentElement = document.getElementById(IdParentElement);
        this.rows = rows;
        this.cells = cells;
    }
    render(rows, cells) {
        this.parentElement.innerHTML = `<div class="container">${createItems(this.clickFunction, rows, cells)}</div>`
    }
};