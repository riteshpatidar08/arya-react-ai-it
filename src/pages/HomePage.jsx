import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(console.log);
  }, []);
  const handleClick = () => {
    navigate('/blogs');
  };
  return (
    <div>
      Home Page
      <button onClick={handleClick} className="px-6 py-2 bg-sky-500 tex-white">
        Login
      </button>
    </div>
  );
}

export default HomePage;
