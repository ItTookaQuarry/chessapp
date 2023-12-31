"use client";

import React from "react";
import { findprotection } from "./(utlilites)/findprotection";
import { findcorrecticon } from "./(utlilites)/findcorrecticon";
import { checkifkingischecked } from "./(utlilites)/IFisChecked";
import { ToastContainer, toast } from "react-toastify";
import { findcorrectpiece } from "./(utlilites)/findcorrectpiece";
import { movesforrking } from "./(utlilites)/movesforking";
export default function Home() {
  const A = 1;
  const B = 2;
  const C = 3;
  const D = 4;
  const E = 5;
  const F = 6;
  const G = 7;
  const H = 8;

  const [Playercanmovethere, setfieldswhereplayercanmove] = React.useState([]);
  const [piecethatismoving, setpiecethatismoving] = React.useState();
  const [moveshistory, setmoveshistory] = React.useState([]);
  ////stateofnumberofmovesinthegame
  const [colortomove, setcolortomove] = React.useState("white");
  ///State of current player to move
  const [passingbeating, setpassinginbeating] = React.useState(false);
  const [whitekingplaceonchessboard, setwhitekingplace] = React.useState(60);
  ///State of white king location on the chessboard. It will be used to to check if king
  // is in check after player move and not allow player to move there if is in check.
  // The same goes with black king below.
  const [blackkingplaceonchessboard, setblackkingplace] = React.useState(4);

  ///This is State of chessbord on the begining of the game It will be changing with players actions ///
  // const [chessboard, setchessboard] = React.useState([

  const [chessboard, setchessboard] = React.useState([
    { name: [A, 8], takenby: ["black", "Rook"] },
      { name: [B, 8], takenby: ["black", "Knight"] },
      { name: [C, 8], takenby: ["black", "Bishop"] },
      { name: [D, 8], takenby: ["black", "Queen"] },
      { name: [E, 8], takenby: ["black", "King"] },
      { name: [F, 8], takenby: ["black", "Bishop"] },
      { name: [G, 8], takenby: ["black", "Knight"] },
      { name: [H, 8], takenby: ["black", "Rook"],move:0 },
      { name: [A, 7], takenby: ["black", "Pawn"],move:0 },
      { name: [B, 7], takenby: ["black", "Pawn"],move:0 },
      { name: [C, 7], takenby: ["black", "Pawn"],move:0 },
      { name: [D, 7], takenby: ["black", "Pawn"],move:0 },
      { name: [E, 7], takenby: ["black", "Pawn"],move:0 },
      { name: [F, 7], takenby: ["black", "Pawn"],move:0 },
      { name: [G, 7], takenby: ["black", "Pawn"],move:0 },
      { name: [H, 7], takenby: ["black", "Pawn"],move:0 },
      { name: [A, 6], takenby: ["black", "Pawn"] ,move:0},
      { name: [B, 6], takenby: false },
      { name: [C, 6], takenby: false },
      { name: [D, 6], takenby: false },
      { name: [E, 6], takenby: false },
      { name: [F, 6], takenby: false },
      { name: [G, 6], takenby: false },
      { name: [H, 6], takenby: false },
      { name: [A, 5], takenby: false },
      { name: [B, 5], takenby: false },
      { name: [C, 5], takenby: false },
      { name: [D, 5], takenby: false },
      { name: [E, 5], takenby: false },
      { name: [F, 5], takenby: false },
      { name: [G, 5], takenby: false },
      { name: [H, 5], takenby: false },
      { name: [A, 4], takenby: false },
      { name: [B, 4], takenby: false },
      { name: [C, 4], takenby: false },
      { name: [D, 4], takenby: false },
      { name: [E, 4], takenby: false },
      { name: [F, 4], takenby: false },
      { name: [G, 4], takenby: false },
      { name: [H, 4], takenby: false },
      { name: [A, 3], takenby: false },
      { name: [B, 3], takenby: false },
      { name: [C, 3], takenby: false },
      { name: [D, 3], takenby: false },
      { name: [E, 3], takenby: false },
      { name: [F, 3], takenby: false },
      { name: [G, 3], takenby: false },
      { name: [H, 3], takenby: false },
      { name: [A, 2], takenby: ["white", "Pawn"],move:0 },
      { name: [B, 2], takenby: ["white", "Pawn"],move:0 },
      { name: [C, 2], takenby: ["white", "Pawn"],move:0 },
      { name: [D, 2], takenby: ["white", "Pawn"],move:0 },
      { name: [E, 2], takenby: ["white", "Pawn"],move:0 },
      { name: [F, 2], takenby: ["white", "Pawn"],move:0},
      { name: [G, 2], takenby: ["white", "Pawn"],move:0 },
      { name: [H, 2], takenby: ["white", "Pawn"],move:0 },
      { name: [A, 1], takenby: ["white", "Rook"],move:0 },
      { name: [B, 1], takenby: ["white", "Knight"] },
      { name: [C, 1], takenby: ["white", "Bishop"] },
      { name: [D, 1], takenby: ["white", "Queen"] },
      { name: [E, 1], takenby: ["white", "King"] },
      { name: [F, 1], takenby: ["white", "Bishop"] },
      { name: [G, 1], takenby: ["white", "Knight"] },
      { name: [H, 1], takenby: ["white", "Rook"] },
    ]);

  React.useEffect(
    () => {
      if (moveshistory.length === 0) {
        return;
      }
      const indexofkingtocheck =
        colortomove === "white"
          ? whitekingplaceonchessboard
          : blackkingplaceonchessboard;

      const field0 = chessboard[indexofkingtocheck].name[0];

      const field1 = chessboard[indexofkingtocheck].name[1];

      const checkifkingisincheck = checkifkingischecked(
        colortomove,
        field0,
        field1,
        chessboard
      );

      if (checkifkingisincheck.ischecked.length >= 1) {
    


        
        ///Function that finds out if king is in  / check at the begining of your move///
        const movesforking = movesforrking(
          colortomove,
          field0,
          field1,
          chessboard,
          passingbeating
        );


        
        



        if (movesforking.table.length === 0) {
          
          const protections=findprotection(checkifkingisincheck.movestoprotect,colortomove,chessboard,indexofkingtocheck)
          /// If king doessnt have any moves we check his protections///
          
          if(protections===false){
            const winin= colortomove === "white" ? "black" : "white"
            return toast(`Game over ${winin} Won`)
            //// No protections === game over////
          }
        }
      }

      return;
    },
    [chessboard] // Array of dependencies
  );

  function findmoves(color, piece, fieldname0, fieldname1, chessboard, index) {
    //This function is finding moves for piece that is chosen by player//

    if (color !== colortomove) {
      return;

      ///You cannot move if it is not your turn//
    }

    const obj = findcorrectpiece(
      color,
      piece,
      fieldname0,
      fieldname1,
      chessboard,
      index,
passingbeating
    );

    setfieldswhereplayercanmove(obj.table);
    ///Setting state of possible moves for player with moves returned from function

    setpiecethatismoving(obj.index);
    ///Setting state of piece that is moving

    return;
  }

  function movepiece(indexwhereismoving) {
    if (indexwhereismoving === piecethatismoving) {
      ///Player can chose another piece after clicking on the moving piece again.

      setfieldswhereplayercanmove([]);
      setpiecethatismoving(null);
      return;
    }

    setfieldswhereplayercanmove("");

    setchessboard((prev) => {
      ///Chessboard state is changing after move

      const table = [...prev];
      // table is previous state of chessboard table
      const temp = table[piecethatismoving];

      // temporary variable of previous field of piece that is moving
      const temp2 = table[indexwhereismoving];
      /// temporary variable of field where piece is going.


      if(colortomove==="white"&& table[indexwhereismoving].takenby===false&&
      table[indexwhereismoving+8].takenby[1]==="Pawn"&&
      table[indexwhereismoving+8].takenby[0]!==colortomove){
        table[indexwhereismoving+8].takenby={...table[indexwhereismoving+8],takenby:false}
        console.log(table[indexwhereismoving+8].takenby[1])
      }
////Beating in passing logic///


if(colortomove==="black"&& table[indexwhereismoving].takenby===false&&
table[indexwhereismoving-8].takenby[1]==="Pawn"&&
table[indexwhereismoving-8].takenby[0]!==colortomove){
  table[indexwhereismoving-8].takenby={...table[indexwhereismoving+8],takenby:false}
  console.log(table[indexwhereismoving+8].takenby[1])
}


table[indexwhereismoving] = table[piecethatismoving].takenby[1]=== "Pawn" ? { ...temp2, takenby: temp.takenby,move:temp.move+1 } :
{ ...temp2, takenby: temp.takenby };








      table[piecethatismoving] = { ...temp, takenby: false };
      //// Field from where piece is going and where is going switch places.
      /// but takenby propery in field from where piece is going will always be
      // false and takenby propery in new field of moving piece will always be that piece.

      let kingtomove =
        colortomove === "white"
          ? whitekingplaceonchessboard
          : blackkingplaceonchessboard;

      if (prev[piecethatismoving].takenby[1] === "King") {
        kingtomove = indexwhereismoving;
      }









      

      const field0 = chessboard[kingtomove].name[0];
      const field1 = chessboard[kingtomove].name[1];
      const checkifkingisincheck = checkifkingischecked(
        colortomove,
        field0,
        field1,
        table
      );

      if (checkifkingisincheck.ischecked.length >= 1) {
        const notify = () =>
          toast.warn("Cannot move there bacause your king will be in check");
        notify();

        return prev;
      } else if (prev[piecethatismoving].takenby[1] === "King") {




        if (colortomove === "black") {
          setblackkingplace(indexwhereismoving);
        }

        if (colortomove === "white") {
          setwhitekingplace(indexwhereismoving);
        }
      }


        let beatinginpassing=false

    if(table[indexwhereismoving].move===1&table[indexwhereismoving]?.takenby[1]==="Pawn"&&
    [4,5].includes(table[indexwhereismoving].name[1])){
      beatinginpassing=indexwhereismoving
    }
setpassinginbeating(beatinginpassing)








      setmoveshistory((prev) => {
        let history = prev;
        let newhistory = [
          ...history,
          {
            from: piecethatismoving,
            to: indexwhereismoving,
            piece: [chessboard[piecethatismoving].takenby],
          },
        ];

        return newhistory;
      });



       
      setcolortomove((prev) => {
        const toreturn = prev === "white" ? "black" : "white";
        return toreturn;
      });

      return table;
    });

    return;
  }

  let fromwhitetoblack = true;
  let color;

  return (
    <div class="grid h-[500px] w-[450px] lg:h-[600px] lg:w-[600px] grid-cols-8 grid-rows-8 auto-rows-fr">
      {chessboard.map((each, index) => {
        let i = index + 1;

        if (fromwhitetoblack) {
          color = i % 2 == 0 ? "black" : "#f3e5ab";
        }

        if (!fromwhitetoblack) {
          color = i % 2 == 0 ? "#f3e5ab" : "black ";
        }

        if (i % 8 == 0) {
          fromwhitetoblack = !fromwhitetoblack;
        }
        const Icon = each.takenby
          ? findcorrecticon(
              each.takenby[0],
              each.takenby[1],
              index === piecethatismoving
            )
          : false;

        if (Playercanmovethere?.includes(index)) {
          color = "red";
        }
        if (
          !Playercanmovethere?.includes(index) &&
          index !== piecethatismoving
        ) {
          return (
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: color,
                display: "grid",
                border: "0.5px solid black",
              }}
            >
              {Icon && (
                <div
                  onClick={() => {
                    findmoves(
                      each.takenby[0],
                      each.takenby[1],
                      each.name[0],
                      each.name[1],
                      chessboard,
                      index
                    );
                  }}
                  style={{ margin: "auto" }}
                >
                  {" "}
                  {Icon}{" "}
                </div>
              )}
            </div>
          );
        } else
          return (
            <div
              onClick={() => {
                movepiece(index);
              }}
              style={{
                border: "0.5px solid black",
                height: "100%",
                width: "100%",
                backgroundColor: color,
                display: "grid",
              }}
            >
              {Icon && <div style={{ margin: "auto" }}> {Icon} </div>}
            </div>
          );
      })}

      <div
        style={{
          gridColumn: "1/8",
          margin: "auto",
          textAlign: "center",
          fontWeight: "bolder",
        }}
      >{`${colortomove} To move`}</div>
      <div>
        <p>{chessboard[whitekingplaceonchessboard].name[0]}</p>
        <p>{chessboard[whitekingplaceonchessboard].name[1]}</p>
      </div>
      <div>
        <p>{chessboard[blackkingplaceonchessboard].name[0]}</p>
        <p>{chessboard[blackkingplaceonchessboard].name[1]}</p>
      </div>
    </div>
  );
}

//  

//   <div>{moveshistory.map((each)=>{
//     return <>

//     <div>{chessboard[each?.from]?.name[0]}</div>

//     <div>{chessboard[each?.from]?.name[1]}</div>
//     <div>{chessboard[each?.to]?.name[0]}</div>

// <div>{chessboard[each?.to]?.name[1]}</div>
//      </>
//       })}</div>
//       <div>{moveshistory.length}</div>

///historia ruchow przyda się potem żeby zapisać w bazie danych//
