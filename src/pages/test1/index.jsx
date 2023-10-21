import Box from "./Box"
import { useTicTacState } from "./hooks"
import './style.css'

export const TicTac = ()=>{
   const [state,currentPlayer, setPlayerMark, setNextPlayer] = useTicTacState()
   const onBoxClick = (id)=>{
        setPlayerMark(id)
        setNextPlayer()
   }
   return <div>
    <h1>TicTacToe</h1>
    <h2>{`Current Player: ${currentPlayer}`}</h2>
    <div className="board">
    {state.map((value,id)=>{
        return <Box key={id+""} value={value} onClick={onBoxClick} id={id}/>
    })}
    </div>
   </div>
}