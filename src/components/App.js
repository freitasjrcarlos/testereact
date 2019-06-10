import React from 'react';

import Post from './Post';
import './App.css';

export default class App extends React.Component {
  render(){
    return(
      <div className="container"> 
        <h1 className="title"> Hello World </h1>
        <Post title="Add commentary"/>
      </div>
    );
  }
}