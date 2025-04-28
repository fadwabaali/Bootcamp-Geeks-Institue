// AutoCompletedText.js
import React, { Component } from 'react';
import countries from './countries'; // Import the countries array

class AutoCompletedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ''
    };
  }

  // Function to filter countries based on the first letter entered
  handleChange = (event) => {
    const { value } = event.target;
    
    // Filter countries that start with the entered letter (case-insensitive)
    const filteredSuggestions = countries.filter(country =>
      country.toLowerCase().startsWith(value.toLowerCase()) && value !== ''
    );
    
    this.setState({
      suggestions: filteredSuggestions,
      text: value
    });
  };

  // Function to handle selecting a suggestion
  handleSelect = (suggestion) => {
    this.setState({
      text: suggestion,
      suggestions: [] // Clear suggestions after selection
    });
  };

  render() {
    const { suggestions, text } = this.state;
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Start typing a country"
        />
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => this.handleSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
        <div >
            suggestion : {suggestions.length > 0 ? suggestions.length : 0}
        </div>
      </div>
    );
  }
}

export default AutoCompletedText;
