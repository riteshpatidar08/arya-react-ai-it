import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers : {
    setLoadingTrue : function(state){
        state.isLoading = true
    },
    setLoadingFalse : function(state){
        state.isLoading = false
    },
    setError : function(state, action){
        state.error = action.payload
    },
    setData :function(state,action){
        state.data = action.payload
    }
  }
});

export default productSlice.reducer
export const {setError,setData,setLoadingTrue,setLoadingFalse} = productSlice.actions

