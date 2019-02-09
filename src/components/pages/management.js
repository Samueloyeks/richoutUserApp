import React, { Component } from 'react';
import footerImage from '../../footerImage.png'
import profilePic from '../../profilePic.png'



class Management extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={container}>

                    <div style={content}>
                        <h1 style={headingStyle}>Management</h1>
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
                        <img src={footerImage} style={footerImg} />
                    </div>

                    <div style={images}>
                        <div >
                            <img src={profilePic} style={pic} />
                            <h3 style={name}>John Doe</h3>
                        </div>

                        <div style={{display:'inline-block',width: '100%', paddingLeft: '80px', paddingRight: '80px', }}>
                            <div style={{ float: 'left', padding: '20px', paddingBottom: '0px' }} >
                                <img src={profilePic} />
                                <h3 style={name}>Lara Croft</h3>
                            </div>
                            <div style={{ float: 'right', padding: '20px', paddingBottom: '0px' }} >
                                <img src={profilePic} />
                                <h3 style={name}>Lara Croft</h3>
                            </div>
                        </div>

                        <div style={{ display:'inline-block', width: '100%', paddingLeft: '80px', paddingRight: '80px', }}>
                            <div style={{ float: 'left', padding: '20px', paddingBottom: '0px' }} >
                                <img src={profilePic} />
                                <h3 style={name}>Lara Croft</h3>
                            </div>
                            <div style={{ float: 'right', padding: '20px', paddingBottom: '0px' }} >
                                <img src={profilePic} />
                                <h3 style={name}>Lara Croft</h3>
                            </div>
                        </div>

                        <div style={{ display:'inline-block', width: '100%', paddingLeft: '80px', paddingRight: '80px', }}>
                            <div style={{ float: 'left', padding: '20px', paddingBottom: '0px' }} >
                                <img src={profilePic} />
                                <h3 style={name}>Lara Croft</h3>
                            </div>
                            <div style={{ float: 'right', padding: '20px', paddingBottom: '0px' }} >
                                <img src={profilePic} />
                                <h3 style={name}>Lara Croft</h3>
                            </div>
                        </div>


                    </div>
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
    // flexDirection: 'column',
}

const contentStyle = {
    margin: '50px',
    color: '#fff',
    fontFamily: 'myRoboto',
}
const headingStyle = {
    boxShadow: '#ffa600 0px -9px 0px -3px inset',
    fontSize: '48px',
    margin: '0px 50px',
    color: '#fff',
    fontFamily: 'myRoboto',
    display: 'inline-block'
}
const footerImg = {
    position: 'absolute',
    bottom: '0',
    right: '0',
}
const images = {
    textAlign: 'center',
    maxWidth: '50%',
    display: 'inline-block',
    float: 'right !important',
    flex:'2',
}
const content = {
    flex:'1',
    maxWidth: '50%',
    display: 'inline-block',
    float: 'left',
}
const pic = {
    padding: '20px',
    paddingBottom: '0px',
}
const name = {
    fontFamily: 'myRoboto',
    color: '#fff',
}

export default Management;
