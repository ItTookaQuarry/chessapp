import {
  FaChessQueen,
  FaChessKnight,
  FaChessKing,
  FaChessPawn,
  FaChessBishop,
  FaChessRook,
} from "react-icons/fa";

export function findcorrecticon(color, piece, bull) {
  const style = { margin: "auto" };
  const size = "3em";

  let iconcolor = color !== "black" ? "orange" : "brown";

  if (bull) {
    iconcolor = "red";
  }

  if (piece === "Pawn") {
    const icontoreturn = (
      <FaChessPawn color={iconcolor} size={size} style={style} />
    );

    return icontoreturn;
  }

  if (piece === "Rook") {
    const icontoreturn = (
      <FaChessRook color={iconcolor} size={size} style={style} />
    );

    return icontoreturn;
  }
  if (piece === "Bishop") {
    const icontoreturn = (
      <FaChessBishop color={iconcolor} size={size} style={style} />
    );

    return icontoreturn;
  }
  if (piece === "Knight") {
    const icontoreturn = (
      <FaChessKnight color={iconcolor} size={size} style={style} />
    );
    return icontoreturn;
  }
  if (piece === "Queen") {
    const icontoreturn = (
      <FaChessQueen color={iconcolor} size={size} style={style} />
    );

    return icontoreturn;
  }

  if (piece === "King") {
    const icontoreturn = (
      <FaChessKing color={iconcolor} size={size} style={style} />
    );

    return icontoreturn;
  }
}
