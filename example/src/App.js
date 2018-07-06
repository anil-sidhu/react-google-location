import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleComponent } from 'react-google-location' 
const API_KEY = "AIzaSyDGwf3wXD5z0XqaolwPbRVRKGIkDnK5ql4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
  render() {
 console.warn("test", this.state.place)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="wrapper" >
        <GoogleComponent apiKey={API_KEY} language={'en'} country={'country:in'} onChange={(e) => { this.setState({ place: e }) }} />
      </div>
      </div>
    );
  }
}






export default App;