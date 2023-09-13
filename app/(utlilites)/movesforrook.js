import { staticchessboard } from "./staticchessbord";

export function movesforrook(color, field0, field1, chessboard, index) {
  let tableofpossiblemoves = [];
  let tab = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let govertical = true;
  let gohorizontal = true;
const currentfield= tab[field0-1]+field1
//   const colorofenemy = (color = "white" ? "black" : "white");

  for (let i = 1; i < 9; i++) {
    let moveinhorizontalline = tab[field0 - 1] + i;
    let moveinverticalline = tab[i - 1] + field1;
const indexver=   staticchessboard.indexOf( moveinverticalline )
const indexhorz=   staticchessboard.indexOf( moveinhorizontalline)









    if (staticchessboard.includes(moveinhorizontalline) && gohorizontal&&moveinhorizontalline!==currentfield&&
    chessboard[indexhorz].takenby[0]!==color) {
      tableofpossiblemoves.push(staticchessboard.indexOf(moveinhorizontalline));
    }

    if (staticchessboard.includes(moveinverticalline) &&govertical&&moveinverticalline!==currentfield&&
    chessboard[indexver].takenby[0]!==color){
      tableofpossiblemoves.push(staticchessboard.indexOf(moveinverticalline));
    }
  }








  return { table: tableofpossiblemoves, index: index };
}
