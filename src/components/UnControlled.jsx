import React, { useEffect } from 'react';
import { useRef } from 'react';
function UnControlled() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log(inputRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="p-4 border-4 border-sky-500"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UnControlled;

//controlled and uncontolled components


// context   =>  App

  //  data share  => data consume