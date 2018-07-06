# react-google-location
A Simple package for get current location,get google place autocomplete,get coordinates of selected location in react

### Features
##### Current Location with coordinates
##### Google location and place autocomplete
##### Coordinates with selected google location
##### Location fiter by country 
##### Location result in all google supported language



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
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
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
|   country    | optional     | object   |               | country prop will change the country where you want to search .you can add 5 country for filter.  |
|   coordinates    | optional     | boolean   |               | Coordinates props will return coordinates of selected place  |
|   locationBoxStyle    | optional     | string   |               | locationBoxStyle allow your to make custom style of search box   |
|   locationListStyle    | optional     | string   |               | locationListStyle allow your to make custom style of search list   |


### Use multiple languages

Pass key and value pair in the country object like this ```` country={in|country:pr|country:vi|country:gu|country:mp}  ````


### Get Api Key 

##### You need to enable key for google place as well google geocode also
click [here](https://developers.google.com/places/web-service/get-api-key)
click on the GET A KEY button 
now select a project or create new porject.
Click on the Next and your key is enabled. You can copy this is key and pass as a apikey :)


