import React, { Component } from 'react';
import footerImage from '../../footerImage.png'



class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={container}>
                    <div style={headingContainer}>
                        <h1 style={headingStyle}>Contact Us</h1>
                    </div>
                    <div style={innerContainer}>
                       <form>
                       <input name="email" id="email" style={inputStyle} placeholder="Email"/><br/><br/>
                        <input name="email" id="email" style={inputStyle} placeholder="Phone Number"/><br/><br/>
                        <textarea name="email" id="email" style={messageStyle} placeholder="Message..." /><br/><br/>
                        <button style={btnStyle}>SUBMIT FORM</button>
                       </form>
                    </div>
                    <img src={footerImage} style={footerImg} />
                </div>
            </React.Fragment>
        );
    }
}


const container = {
    backgroundColor: '#55555587',
    margin: 'auto',
    position: 'relative',
    width: '80%',
    minHeight: '700px',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'column',
}
const headingStyle = {
    boxShadow: '#ffa600 0px -9px 0px -3px inset',
    fontSize: '48px',
    margin: '0px 50px',
    color: '#fff',
    fontFamily: 'myRoboto',
    display: 'inline-block',
    // textAlign:'center !important'
}
const headingContainer = {
    textAlign: 'center'
}
const footerImg = {
    position: 'absolute',
    bottom: '0',
    right: '0',
}
const innerContainer = {
    width: '80%',
    minHeight: '500px',
    margin: 'auto',
    position: 'relative',
    textAlign: 'center'
}
const inputStyle={
    width:'695px',
    height:'39px',
    backgroundColor:'#C4C4C4',
    border:'none',
    fontSize:'large',
    placeholder:'Email',
    fontFamily: 'Quantico',
    padding:'10px',
    fontWeight:'bold',
}
const messageStyle={
    width:'695px',
    height:'39px',
    backgroundColor:'#C4C4C4',
    border:'none',
    fontSize:'large',
    placeholder:'Email',
    fontFamily: 'Quantico',
    padding:'10px',
    fontWeight:'bold',
    height:'150px',
    resize: 'none',
}
const btnStyle={
    fontFamily: 'Quantico',
    backgroundColor:'#ffa600',
    width:'695px',
    height:'39px',
    border:'none',
    boxShadow: '#3333339e 0px 7px 2px -3px',
    fontSize:'large',
    fontWeight:'bold',
}

export default Contact;
