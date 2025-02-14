//  SLices => state reducerfunction => {loading : false}
//  SLices => state reducerfunction => {error : null}
//  SLices => state reducerfunction 
// {token : null}

import { configureStore } from "@reduxjs/toolkit";
import  countReducer from './slices/counterSlice.js'
console.log(countReducer)
import productReducer from './slices/productSlice.js'
const store = configureStore({
    reducer : {
        count : countReducer ,
        product : productReducer
    }
})

export default store