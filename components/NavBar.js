import React,{Component} from 'react';
import {Link} from 'react-router';
require('../style.css');

class Navbar extends Component{
  render(){
    return (
        <ul className="nav">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/todo">TODO</Link></li>
          <li><Link to="/hello">HELLO</Link></li>
          <li><Link to="/vue">VUE</Link></li>
          <li><Link to="/redux">REDUX</Link></li>
        </ul>
    )
  }
}

module.exports = Navbar