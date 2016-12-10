import React, { PureComponent } from 'react';
import './App.css';
import ToggleButton from './ToggleButton'
import MessageBoard from './MessageBoard'

const WELCOME = (<MessageBoard message='welcome'/>);
const GOODBYE = (<MessageBoard message='goodbye'/>);

class App extends PureComponent {
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
    const {isLogin} = this.state;

    return (
      <div className="App">
        <ToggleButton isOn={isLogin} onMessage='Login' offMessage='Logout' onToggle={this.handleLogState}/>
        {isLogin ? WELCOME : GOODBYE}
     </div>
    );
  }
}

export default App;
