import React, { Component } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import logo from './headerLogo.png'


class Header extends Component {
    render() {
        return (
            <div>
                <header style={headerStyle}>
                    <div style={headerLogo}>
                        <NavLink exact to="/"><img src={logo} height="92px" /></NavLink>
                    </div>
                    <div style={menuContainer}>
                        <div style={links}>
                            <NavLink exact className="nav_link" to="/" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>HOME</NavLink>
                            <NavLink className="nav_link" to="/about" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>ABOUT</NavLink>
                            <NavLink className="nav_link" to="/management" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>MANAGEMENT</NavLink>
                            <NavLink className="nav_link" to="/faq" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>FAQs</NavLink>
                            <NavLink className="nav_link" to="/contact" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>CONTACT US</NavLink>
                        </div>
                    </div>
                </header>
            </div>
        ); 
    }
}

const headerStyle = {
    backgroundColor: '#333333c9',
    height: '92px',
    overflow: 'hidden'
}

const menuContainer = {
    position: 'relative',
    float: 'right',
    backgroundColor: 'transparent',
    height: '92px',
    margin: 'auto'
}


const links = {
    marginTop: '45px',
    marginBottom: '14px',
    position: 'relative',
    bottom: '0',
}
const headerLogo = {
    width: '30%',
    float: 'left',
    height: '92px',
    background: 'transparent',
}

export default Header;
