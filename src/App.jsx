//PASSING DATA FROM CHILD TO PARENT
//CONTROLLED UNCONTORLLED COMPONENTS
//REDUX TOOLKIT
//USECALLBACK AND USEMEMO

import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import UnControlled from './components/UnControlled'
import Navbar from './components/Navbar';
function App() {
  const [dataFromChild, setDataFromChild] = useState('');

  const getDataFromChild = (data) => {
    setDataFromChild(data);
  };
  return (
    <div className="h-96 border-4 border-red-500 m-10">
      <Navbar/>
      <h1>{dataFromChild}</h1>
      <SearchInput getDataFromChild={getDataFromChild}>
        <div>hello</div>
      </SearchInput>
      <UnControlled/>
    </div>
  );
}

export default App;

//Child to parent
