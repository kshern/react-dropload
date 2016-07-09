# react-dropload
a react implementation of up to loadmore
<br />
react移动端上拉加载插件


#Example

	import React, { Component } from 'react';
	import DropLoadd from 'react-dropload';
	
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