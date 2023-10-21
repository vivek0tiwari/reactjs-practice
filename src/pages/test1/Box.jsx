import './style.css'
import {memo} from 'react'
const Box = ({value, onClick, id})=>{
    const onButtonClick = (e)=>{
        e.preventDefault()
        if(value!=='x' && value!=='0'){
            onClick && onClick(id)
        }
    }
    return <button onClick={onButtonClick} className="box" disabled={value==='x' || value==='0'}>{value}</button>
}
export default memo(Box)