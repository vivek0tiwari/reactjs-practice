import { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../apis';
import  { addToCart, fetchProduct } from '../../../redux/counterReducer'
import '../../../App.css'
const ProductList =()=>{
    const cart = useSelector(state => state.cart.cartItems)
    const products = useSelector(state => state.cart.products)
    const status = useSelector(state => state.cart.status)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('useeffect')
        dispatch(fetchProduct())
    },[])
    const _addToCart = (id)=>{
        console.log(dispatch)
        dispatch(addToCart({itemCode:id, quantity:1}))
    }
    return  <div className="product-grid-container">
        {status==='loading'?<div>loading</div>:null}
        {
            products && status!=='loading' && products.map((product)=>{
                const {id,title, price,images:[firstImage,...otherImages]}=product
                return (
                    <div className='product-container'>
                    <img src={firstImage} height={80} width={60}/>
                    <div>{title}</div>
                    <div>{price}</div>
                    <button onClick={()=>_addToCart(id)} >{`Add ${cart[id]?cart[id]:''}`}</button>
                    </div>       
                )
                
            })
        }  
    </div>
}
export default ProductList