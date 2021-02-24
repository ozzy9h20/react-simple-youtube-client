import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    onFormSubmit(term);
  }

  return (
    <div className="ui segment">
      <form 
        className="ui form"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label>Video Search</label>
          <input 
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;