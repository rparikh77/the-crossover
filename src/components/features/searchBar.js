import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './searchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Your search logic here
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Team or Player"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Link to="/player" className="search-icon">
        <i className="fas fa-search"></i>
      </Link>
    </div>
  );
}

export default SearchBar;
