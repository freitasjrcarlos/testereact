import React from 'react';

import './App.css';

export default class Comment extends React.Component {
  render(){
    return(
      <p> {this.props.text} </p>
    );
  }
}