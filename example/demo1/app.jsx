import React, { Component } from 'react';
import DropLoadd from 'react-dropload';

// import data from './data.json'

// import './style.css'

export default class Application extends Component {
  componentDidMount(){
  	
  }

  handleScroll(){
  }
  render() {
    return (
      <div>
        
        <DropLoadd handleScroll={this.handleScroll} />
      </div>
    );
  }
}

export default Application;