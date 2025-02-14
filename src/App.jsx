//redux toolkit

//state management library

//count , loading , error , products , token , role , id , name

//useState , useReducer

//props ❌

//Redux toolkit => updated tradition react-redux

// //initialState => {
//   data : [] ,
//   loading : false ,
//   error : null
// }

//Actions
// {type:increment}

//NOTE Reducer function
//NOTE it takes the previous state and update the state on the basis of action.

//count : 0 => type:increment => goes to reducer function => count+1

//dispatch function =>

//compariosn useState =>
// count : 0
// handleIncreement : count+1
// setCount(coutn+1)

// onClick=> dispatch(increment)/

//CreateSlice function => which manages action and reducer

//we may have different slices on what we are implementing in the project

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/slices/counterSlice';
import axios from 'axios';
function App() {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const [dataa, setDataa] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('https://fakestoreapi.com/products');
        setDataa(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      {isLoading ? 'loading...' : JSON.stringify(dataa)}
    </div>
  );
}

export default App;
