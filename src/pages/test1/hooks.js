import { useCallback, useState } from "react"

export const useTicTacState = ()=>{
    const [state, setState] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState('x')
    const setNextPlayer = useCallback(()=>{
        const cp = currentPlayer==='x'?'0':'x'
        setCurrentPlayer(cp)
    },[setCurrentPlayer, currentPlayer])

    const setPlayerMark = useCallback(( id)=>{
        const newValue = state.map((_v, _id)=>{
            if(_id===id) return currentPlayer
            return _v
        })
        setState(newValue)
    }, [state, setState, currentPlayer])
    return [state,currentPlayer, setPlayerMark, setNextPlayer]
}