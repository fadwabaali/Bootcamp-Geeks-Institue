import React, { Component } from 'react';

class App extends Component {
  state = {
    input: '',
    responseMessage: ''
  };

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: this.state.input }),
      });

      // Get the response data and update state
      const data = await response.json();
      this.setState({ responseMessage: data.response });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Send a Message to Express Server</h1>
        
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleInputChange}
            placeholder="Type your message here"
          />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        
        {this.state.responseMessage && <h2>{this.state.responseMessage}</h2>}
      </div>
    );
  }
}

export default App;
