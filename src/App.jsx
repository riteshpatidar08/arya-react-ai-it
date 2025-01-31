import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  // useEffect(callback,dependencyArry)

  //empty dependency
  useEffect(() => {
    //direct dom manipulation
    document.title = 'Home';
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => console.log(res.data));
    console.log('runs only on initial Render');
  }, []);

  //without dependency array

  useEffect(() => {
    console.log('runs every time');
  });

  //with dependency
  useEffect(() => {
    console.log('runs only when dependency change');
  }, [count]);

  return (
    <div>
      <p style={{ marginLeft: '20px' }}>{count}</p>
      <button onClick={handleClick}>Increment</button>

      {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
    </div>
  );
}

export default App;

//counter
//button increment
//count = 0

//http methods

//get post delete put patch

//Task 

//Note Create a form using name , email , password , gender will be dropdown  phoneNumber.
//2 . when you submit the form you have to create a object and show all the fields value in it 

//3 . You have to show three cards on the screen pass the data using props in each card and use map method to render the Card.
// eg const cardData = [{title : "1" , description:'card1'},{}, {}]


