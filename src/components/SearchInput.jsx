import React, { useState } from 'react';

function SearchInput({ getDataFromChild , children  }) {
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
    getDataFromChild(name);
  };
  console.log(children)
  return (
    <div className="flex h-64 justify-center items-center border border-blue-500 m-20">
        {children}
      <input
        onChange={handleChange}
        type="text"
        value={name}
        placeholder="Enter name"
        className="bg-transparent focus:outline-none border-b border-gray-300 p-2"
      />
    </div>
  );
}

export default SearchInput;
