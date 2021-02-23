import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(this.state.term, "Submitted!");
  }

  render() {
    return (
      <div className="ui segment">
        <form 
          className="ui form"
          onSubmit={this.handleSubmit}
        >
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;