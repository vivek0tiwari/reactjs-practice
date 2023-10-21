import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const CartHeader =()=>{
    const cart = useSelector(state => state.cart.cartItems)
    console.log('cart',cart)
    const getCartCount = ()=>{
       return  cart && Object.keys(cart).reduce((acc, itemCode)=>{
            return acc + cart[itemCode]
        },0)
    }
    return  <div className="cart-header-container">
        <div>{`Cart count ${getCartCount()}`}</div>
    </div>
}