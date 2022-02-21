
const CHESS_PARENT_ID = "chess-parent"
const chessBoard = new ChessBoard(CHESS_PARENT_ID, chessCell);
chessBoard.render();
const alertParent = document.getElementById("alert");
function chessCell(column, row) {
    alertParent.innerHTML = `<div class="alert alert-warning alert-dismissible" role="alert">
    <strong>You have pressed ${column + row}</strong> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

}