import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <header className="flex p-10 justify-between items-center bg-[#121212] h-16">
        <div>
          <h1 className="text-2xl font-semibold text-red-500">JobFinder</h1>
        </div>

        <div className="text-white flex gap-6 text-xl font-bold">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/careers">Careers</Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;



//create a context where  you define a api call function and using useContext you can use that function to call the api in any component