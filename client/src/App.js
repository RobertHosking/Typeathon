import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
    state = {
        data: null
    };

    componentDidMount = () => {
        console.log("hi there")
      this.callBackendAPI()
    }
    
    callBackendAPI = async () => {
        const response = await fetch('/docs/');
        const body = await response.json();
        this.setState({data: body})
    };
   render = () => {
    return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
            </a>
        </header>
        </div>
     );
   }
}

export default App;
