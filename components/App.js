import React,{Component} from 'react';
import {Link} from 'react-router';
require('../style.css');

class App extends Component{
  render(){
    return (
      <ul>
        <li><Link to="/home"></Link></li>
        <li><Link to="/todo"></Link></li>
        <li><Link to="/react"></Link></li>
        <li><Link to="/hello"></Link></li>
        <li><Link to="/vue"></Link></li>
        <li><Link to="/redux"></Link></li>
      </ul>
    )
  }
}

module.exports = App
