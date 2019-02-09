import React, { Component } from 'react';
import footerImage from '../../footerImage.png'



class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={container}>
                <div style={headingContainer}>
                            <h1 style={headingStyle}>FAQs</h1>
                        </div>
                    <div style={innerContainer}>
                        <h3 style={questionStyle}>Why did the chicken cross the road?</h3>
                        <p style={answerStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan </p>

                        <h3 style={questionStyle}>Why did the chicken cross the road?</h3>
                        <p style={answerStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan </p>

                        <h3 style={questionStyle}>Why did the chicken cross the road?</h3>
                        <p style={answerStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan </p>
                        
                        <h3 style={questionStyle}>Why did the chicken cross the road?</h3>
                        <p style={answerStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan </p>

                        <h3 style={questionStyle}>Why did the chicken cross the road?</h3>
                        <p style={answerStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan </p>
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
const questionStyle = {
    margin: '20px',
    marginBottom: '10px',
    marginTop:'40px',
    color: '#fff',
    fontFamily: 'myRoboto',
    fontWeight:'bold',
}

const answerStyle = {
    margin: '10px 20px',
    color: '#fff',
    fontFamily: 'myRoboto',
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
const innerContainer={
    width: '80%',
    minHeight: '500px',
    margin: 'auto',
    position: 'relative',
    marginTop:'0px'
}

export default Faq;
