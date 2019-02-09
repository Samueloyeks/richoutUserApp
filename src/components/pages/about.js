import React, { Component } from 'react';
import footerImage from '../../footerImage.png'


class About extends Component {
    render() {
        return (
            <React.Fragment>
              <div style={container}>
             <div>
             <h1 style={headingStyle}>About Us</h1>
               <p style={contentStyle}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan .Lorem ipsum dolor sit amet, consectetur 
               adipiscing elit. Aenean dolor nunc, bibendum id accumsan .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan 
               .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
               dolor nunc, bibendum id accumsan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan Lorem ipsum dolor sit amet, consectetur 
               adipiscing elit. Aenean dolor nunc, bibendum id accumsan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan Lorem ipsum dolor sit 
               amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan Lorem 
               ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
               dolor nunc, bibendum id accumsan Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Aenean dolor nunc, bibendum id accumsan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nunc, bibendum id accumsan 
               </p>
             </div>
               <img src={footerImage} style={footerImg}/>
               </div>
            </React.Fragment>
        );
    }
}

const container={
    backgroundColor:'#55555587',
    margin:'auto',
    position:'relative',
    width:'80%',
    minHeight:'700px',
    marginTop:'7%',
    display: 'flex',
    flexDirection: 'column',
}

const contentStyle = {
    margin:'50px',
    color:'#fff',
    fontFamily:'myRoboto',
}
const headingStyle={
    boxShadow: '#ffa600 0px -9px 0px -3px inset',
    fontSize:'48px',
    margin:'0px 50px',
    color:'#fff',
    fontFamily:'myRoboto',
    display:'inline-block'
}
const footerImg={
    position:'absolute',
    bottom:'0',
    right:'0',
}

export default About;
