import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;