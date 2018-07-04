# react-google-location
A Simple package for use google place autocomplete in react
## Getting Started
Install the library:

```` npm i react-google-location ````

## Import and use React google location
Import GoogleCompoent from module from package 

```javascript import { GoogleComponent } from 'react-google-location' 

//... 
import React, { Component } from 'react';



const API_KEY = API_KEY_FROM_GOOGLE  // how to get key - step are below

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div >
        <GoogleComponent apiKey={API_KEY} language={'ta'} country={'country:in'} onChange={(e) => { this.setState({ place: e }) }} />
      </div>

    )
  } 
}


export default HomeComponent;

````

### Props


| Name          | Required | Type     | Default value | Description                                                                                                                  |
|-----------------|----------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
|   apiKey    | Yes     | string   |      null         | need to get from google place api and pass as string. if key is invalid or empty result be b not found                                                                 |

