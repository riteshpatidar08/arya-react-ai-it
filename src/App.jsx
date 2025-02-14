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

import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {increment ,decrement,reset} from './redux/slices/counterSlice'
function App() {
 const {count} = useSelector((state)=> state.count)
 const dispatch = useDispatch()
  return <div>
    <p>{count}</p>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
    <button>decrement</button>
    <button onClick={()=>dispatch(reset())}>reset</button>
  </div>;
}

export default App;
