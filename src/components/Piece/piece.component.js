import blackPiece from "../../assets/black-check-piece.svg";
import whitePiece from "../../assets/white-check-piece.svg";
import blackKing from "../../assets/black-king-piece.svg";
import whiteKing from "../../assets/white-king-piece.svg";

function Piece(props) {
let player;
  switch (props.data) {
    case 'w':
      player = "white";
      break;
    case 'W':
      player = "whiteKing";
      break;
    case 'b':
      player = "black";
      break;
    case 'B':
      player = "blackKing";
      break;

    default:
      break;
  }

  console.log(player,'player')
  return (
    <img
      draggable
      src={player === "white" ? whitePiece : player==='whiteKing' ? whiteKing : player==='black' ? blackPiece : blackKing}
      alt={`A ${player} piece.`}
      className={"piece"}
    />
  );
}

export default Piece;
