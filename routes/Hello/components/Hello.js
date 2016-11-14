import React,{Component} from 'react';
import {Link} from 'react-router';

 class Hello extends Component{
    render(){
        return(
            <div style={{marginLeft:'60px'}}>
                <span>Hello TAB</span>
                <ul>
                    <li><Link to="/hello/zhangxin"> zhangxin </Link></li>
                    <li><Link to="/hello/liumeng"> liumeng </Link></li>
                    <li><Link to="/hello/zouxiumei"> zouxiumei </Link></li>
                </ul>
                {this.props.children}
            </div>
         )   
    }
 }

module.exports = Hello;