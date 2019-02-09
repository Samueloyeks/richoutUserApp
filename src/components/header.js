import React, { Component } from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
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
                            <NavLink exact style={linkStyle} to="/" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>HOME</NavLink>
                            <NavLink style={linkStyle} to="/about" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>ABOUT</NavLink>
                            <NavLink style={linkStyle} to="/management" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>MANAGEMENT</NavLink>
                            <NavLink style={linkStyle} to="/faq" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>FAQs</NavLink>
                            <NavLink style={linkStyle} to="/contact" activeStyle={{ boxShadow: '#ffa600 0px -9px 0px -3px inset' }}>CONTACT US</NavLink>
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

const linkStyle = {
    fontSize: 'x-large',
    margin: '0px 40px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingBottom: '13px',
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
