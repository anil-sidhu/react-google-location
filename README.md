# react-google-location
A Simple package for use google place autocomplete in react
## Getting Started
Install the library:

```` npm i react-google-location ````

## Import and use React google location
Import GoogleCompoent from module from package 

```javascript 

import { GoogleComponent } from 'react-google-location' 

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
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          onChange={(e) => { this.setState({ place: e }) }} />
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
|   language    | optional     | string   |      en         | language will change the lanugae of search result it will support all lanugage which is suppored by google place api for help link is here  [Language suppored by google](https://developers.google.com/maps/faq#languagesupport)    |                                                     |
|   country    | optional     | object   |      en         | country prop will change the country where you want to search .you can add 5 country for filter.  |
|   coordinates    | optional     | boolean   |      en         | Coordinates props will return coordinates of selected place  |


### Use multiple languages

Pass key and value pair in the country object like this ```` country={in|country:pr|country:vi|country:gu|country:mp}  ````


### Get Api Key 

click [here](https://developers.google.com/places/web-service/get-api-key)
click on the GET A KEY button 
now select a project or create new porject.
Click on the Next and your key is enabled. You can copy this is key and pass as a apikey :)
