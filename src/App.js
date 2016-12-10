import React, { Component } from 'react';
import './App.css';
import ToggleButton from './ToggleButton'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  handleLogState = (isLogin) => {
    this.setState({isLogin});
  };

  render() {
    return (
      <div className="App">
        <ToggleButton isOn={this.state.isLogin} onText='Login' offText='Logout' onToggle={this.handleLogState}/>
     </div>
    );
  }
}

export default App;
