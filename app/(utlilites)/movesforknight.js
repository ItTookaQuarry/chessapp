import { staticchessboard } from "./staticchessbord";

export const movesforknight = function (color, field0, field1, chessboard,index) {
  let tableofpossiblemoves = [];
  let tab = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let allposiblemovesforknight = [
    [+2, +1],
    [+2, -1],
    [-2, +1],
    [-2, -1],
    [+1, +2],
    [-1, +2],
    [-1, -2],
    [+1, -2],
  ];

  for (let i = 0; i < allposiblemovesforknight.length; i++) {
    if (
      field0 - allposiblemovesforknight[i][0] <= 8 &&
      field0 - allposiblemovesforknight[i][0] >= 1 &&
      field1 - allposiblemovesforknight[i][1] <= 8 &&
      field1 - allposiblemovesforknight[i][1] >= 1
    ) {

const chessfieldname= (tab[field0-allposiblemovesforknight[i][0]-1])+(field1 - allposiblemovesforknight[i][1])
const index = staticchessboard.indexOf(chessfieldname)






if(chessboard[index].takenby[0]!==color)
        tableofpossiblemoves.push(index)
    }

 


  }

  return {table:tableofpossiblemoves,index:index};
};
