import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  
  handleClick = (value) => {
       this.getData();
  };
  
  getData = () => {
    
      fetch('https://raw.githubusercontent.com/fatterpave/projectb/master/data/projects.json', {
        accept: 'application/json',
      })
      .then(res=>res.json())
      .then(json=>{
          alert(json[0].name);
      })
      .catch(err=>{
          console.error("Error getting user data >>\n",err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <MuiThemeProvider>
            <div>
              <FlatButton onClick={this.handleClick} label="Trykk" />
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
