import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;