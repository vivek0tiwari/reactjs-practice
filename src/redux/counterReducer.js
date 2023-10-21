import {createReduce, createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getProducts } from '../apis'

const initialState = {
    products: [],
    cartItems : {},
    status:'ideal', // 'ideal'|'success'|'error'|'loading'
    error:''
}
export const fetchProduct = createAsyncThunk('products/fetchProduct', async ()=>{
    const productsRequest = await getProducts()
    return productsRequest.products
})
export const cartReducer = createSlice({
    name: 'cart',
    initialState:initialState,
    reducers:{
        addToCart:(state, action)=>{
            const {payload:{itemCode, quantity=1}} = action
            let newCount = quantity
            if(state.cartItems[itemCode]){
                newCount = state.cartItems[itemCode] + quantity
            }
            state.cartItems = { ...state.cartItems,[itemCode]:newCount}
        },
        removeFromCart:(state, action)=>{
            const {payload:{itemCode}} = action
            delete state.cartItems[itemCode]
        }
    },
    extraReducers(builder){
        builder.addCase(fetchProduct.pending,(state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchProduct.fulfilled,(state, action)=>{
            state.status = 'success'
            console.log(JSON.parse(JSON.stringify(state)))
            state.products = state.products.concat(action.payload)
        })
        .addCase(fetchProduct.rejected,(state, action)=>{
            state.status = 'fail'
            state.error = action.error.message
        })
    }
    

}) 
export const { addToCart, removeFromCart } = cartReducer.actions
