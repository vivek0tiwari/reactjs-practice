import { useState, useCallback } from 'react'
import {searchProduct} from '../../apis'
import {throttle, debounce} from '../../utils'
import '../../index.css';
export const DebounceSearch =()=>{
    const [result, setResult] = useState([])
    const [query, setQuery]= useState('')
    
    
    const getData =  useCallback( async (q)=>{
        const result = await searchProduct(q)
        console.log(result)
        setResult([...result.products])
    },[setResult])

    const getDataWithThrottle =  useCallback(debounce(getData, 1000) ,[getData])
    const onTextChange = useCallback((e)=>{
        const value = e.target.value
        setQuery(value)
        getDataWithThrottle(value)
    },[getDataWithThrottle, setQuery])

    return  <div className="search-container">
        <div>Search Box</div>
        <div className="search-input-container">
            <input type="text" onChange={onTextChange} />
        </div>
        <div>
            {result.map(result=>{
                return <li className='resultItem'>{result.title}</li>
            })}
        </div>
    </div>
}