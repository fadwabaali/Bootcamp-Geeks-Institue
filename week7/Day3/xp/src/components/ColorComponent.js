import React from 'react';

class ColorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 🟢 Part I - Always allow update
    return true; // change to false to block updates and see the result
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change to Blue</button>
      </div>
    );
  }
}

export default ColorComponent;
