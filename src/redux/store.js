import {configureStore} from '@reduxjs/toolkit'
import {cartReducer} from './counterReducer'
export const store = configureStore(
    {
        reducer:{
            cart:cartReducer.reducer
        }
    }
)