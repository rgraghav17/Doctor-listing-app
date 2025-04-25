import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm, doctors }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const matches = doctors
      .filter(doc => doc.name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 3);
    setSuggestions(value ? matches : []);
  };

  const handleSelect = (name) => {
    setInput(name);
    setSearchTerm(name);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
    setSuggestions([]);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search doctor by name"
          data-testid="autocomplete-input"
        />
      </form>
      <div className="suggestions">
        {suggestions.map((doc, index) => (
          <div
            key={index}
            onClick={() => handleSelect(doc.name)}
            className="suggestion-item"
            data-testid="suggestion-item"
          >
            {doc.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;