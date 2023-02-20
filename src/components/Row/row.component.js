import Piece from "../Piece/piece.component"
import Square from "../Square/square.component"

function Row(props) {
    return (
        <tr>
            <th>{props.number}</th>
            {props.data.map((squareData, index) => {
                const column = String.fromCharCode(97 + index)

                return <Square key={column + props.number} row={props.number} column={column} >
                    {squareData.trim() && <Piece data={squareData} />}
                    </Square>
            })}
            
            <th>{props.number}</th>
        </tr>
    )
}

export default Row