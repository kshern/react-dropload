import React from 'react'
import classes from './assets/Dropload.css'


var Dropload = React.createClass({
  getInitialState:function(){
    return {
      isLockDown:false,
    }
  },
  handleScroll(){
    var element= document.documentElement;
    // var element=document.documentElement.scrollTop === 0 ? document.body : document.documentElement;
    var oHeight=element.clientHeight;
    var sHeight=element.scrollHeight;
    var sTop=document.body.scrollTop;
    console.log(sHeight-oHeight-sTop)
    if(!this.state.isLockDown&&sHeight-oHeight-sTop<=40){
      this.setState({isLockDown:true})
      return this.props.handleScroll()
    }
  },
  componentDidMount:function(){
    console.log(classes)
    window.addEventListener('scroll',this.handleScroll); 
  },
  componentWillReceiveProps(){
    console.log(this.state.isLockDown)
    if (!this.props.isEnd) {
      this.setState({isLockDown:false})
    }
  },
  componentWillUnmount() {
   window.removeEventListener('scroll', this.handleScroll);
  },
  render: function () {
    var text;
    if(this.props.isEnd){
      text=<p className={classes.loadEnd}>已全部加载</p>
      window.removeEventListener('scroll', this.handleScroll);
    }else{
      text=<p className={classes.loadNotEnd}>正在努力加载</p>
    }
    return (
      <div>
        <div className={classes.infinite_load}>
          {text}
        </div>
      </div>
    );
  }
});


export default Dropload