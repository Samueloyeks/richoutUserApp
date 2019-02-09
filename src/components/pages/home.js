import React, { Component } from 'react';
import footerImage from '../../footerImage.png'
import logo from '../../richoutLogo.png'
import fbLogo from '../../facebook.png'
import googleLogo from '../../google.png'
import contactIcon from '../../contactIcon.png'
import aboutIcon from '../../aboutIcon.png'
import passwordIcon from '../../passwordIcon.png'
import roundFacebook from '../../roundFacebook.png'
import roundGoogle from '../../roundGoogle.png'
import backArrow from '../../backArrow.png'
import eyeOpen from '../../eye-open.svg'
import eyeClosed from '../../eye-closed.svg'



class Home extends Component {
    state = {
        login: true,
        signup: false,
        passwordReset: false,
        passwordType: "password",
        passwordImage: eyeOpen
    }
    showSignup() {
        this.setState({
            login: false,
            signup: true,
            passwordReset: false,
        })
    }
    showLogin() {
        this.setState({
            login: true,
            signup: false,
            passwordReset: false,
        })
    }
    showPasswordReset() {
        this.setState({
            login: false,
            signup: false,
            passwordReset: true,
        })
    }
    togglePassword(e) {
        e.preventDefault();
        if (this.state.passwordType === "password") {
            this.setState({
                passwordType: "text",
                passwordImage: eyeClosed
            })
        } else {
            this.setState({
                passwordType: "password",
                passwordImage: eyeOpen
            })
        }
    }

    render() {
        if (this.state.login) {
            return (
                <div>
                    <React.Fragment>
                        <div style={smallContainer} >
                            <div style={innerContainer}>
                                <div style={logoContainer}>
                                    <img src={logo} />
                                </div>
                                <div style={loginContainer}>
                                    <form name="loginForm">
                                        <h1 style={{ color: '#fff' }}>Email</h1>
                                        <input style={inputStyle} name="email" id="email" />

                                        <h1 style={{ color: '#fff' }}>Password</h1>
                                        <div style={{ height: '46px', width: '100%' }}>
                                            <input style={passwordStyle} name="password" id="password" type={this.state.passwordType}></input>
                                            <button onClick={this.togglePassword.bind(this)} style={{ width: "10%", backgroundColor: "#c4c4c4", verticalAlign: "bottom", border: "none", padding: "5px", height: "46px" }}><img src={this.state.passwordImage} width="20px" /></button>
                                        </div>
                                        <br /><br />

                                        <button style={btnStyle}>LOGIN</button>

                                        <h2 style={{ color: '#fff', textAlign: 'center' }}>OR</h2>
                                        <button style={fbBtnStyle}><img src={fbLogo} style={{ float: 'left', height: '25px', margin: '5px' }} />Connect with facebook</button><br /><br />
                                        <button style={googleBtnStyle}><img src={googleLogo} style={{ float: 'left', height: '39px', width: '39px' }} />Connect with google</button>
                                    </form>

                                    <button onClick={this.showSignup.bind(this)} className="authToggle">Sign Up</button>
                                </div>

                                <div style={contactContainer}>
                                    <button style={contactButton}><img src={contactIcon} style={{ height: '40px', width: '40px', marginRight: '35px' }} /></button>
                                    <button style={contactButton}><img src={aboutIcon} style={{ height: '40px', width: '40px', marginRight: '35px' }} /></button>
                                    <button onClick={this.showPasswordReset.bind(this)} style={contactButton}><img src={passwordIcon} style={{ height: '40px', width: '40px', marginRight: '35px' }} /></button>
                                </div>
                                <img src={footerImage} style={footerImg} />
                            </div>

                        </div>
                    </React.Fragment>
                </div>
            )

        } else if (this.state.signup) {
            return (
                <div>
                    <React.Fragment>
                        <div style={bigContainer}>
                            <div style={innerContainer}>
                                <div style={logoContainer}>
                                    <img src={logo} />
                                </div>

                                <div style={signupContainer}>
                                    <form name="signupForm">
                                        <h1 style={{ color: '#fff' }}>Full Name</h1>
                                        <input style={inputStyle} name="fullName" id="fullName" />

                                        <h1 style={{ color: '#fff' }}>Phone Number</h1>
                                        <input style={inputStyle} name="phone" id="phone" />


                                        <h1 style={{ color: '#fff' }}>Email</h1>
                                        <input style={inputStyle} name="email" id="email" />

                                        <h1 style={{ color: '#fff' }}>Password</h1>
                                        <div style={{ height: '46px', width: '100%' }}>
                                            <input style={passwordStyle} name="password" id="password" type={this.state.passwordType}></input>
                                            <button onClick={this.togglePassword.bind(this)} style={{ width: "10%", backgroundColor: "#c4c4c4", verticalAlign: "bottom", border: "none", padding: "5px", height: "46px" }}><img src={this.state.passwordImage} width="20px" /></button>
                                        </div>
                                        <h1 style={{ color: '#fff' }}>Account Type</h1>
                                        <select style={inputStyle} name="acctType" id="acctType">
                                            <option selected>Donor</option>
                                            <option>Receiver</option>
                                        </select><br /><br />
                                        <button style={btnStyle}>SIGN UP</button>
                                    </form>
                                    <button onClick={this.showLogin.bind(this)} className="authToggle"> Login</button>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={contactContainer}>
                                        <button style={contactButton}><img src={contactIcon} style={{ height: '40px', width: '40px', marginRight: '35px' }} /></button>
                                        <button style={contactButton}><img src={aboutIcon} style={{ height: '40px', width: '40px', marginRight: '35px' }} /></button>
                                        <button onClick={this.showPasswordReset.bind(this)} style={contactButton}><img src={passwordIcon} style={{ height: '40px', width: '40px', marginRight: '35px' }} /></button>
                                    </div>
                                    <div style={socialSignup}>
                                        <div style={{ display: 'grid' }}>
                                            <p style={{ float: 'left', color: '#fff' }}>Sign up with:</p>
                                        </div>
                                        <button className="socialSignupButton">
                                            <img src={roundFacebook} style={{ width: '30px', height: '30px' }} />
                                        </button>
                                        <button className="socialSignupButton">
                                            <img src={roundGoogle} style={{ width: '30px', height: '30px' }} />
                                        </button>
                                    </div>
                                </div>
                                <img src={footerImage} style={footerImg} />
                            </div>
                        </div>
                    </React.Fragment>
                </div>
            )
        } else if (this.state.passwordReset) {
            return (
                <div>
                    <React.Fragment>
                        <div style={passwordContainer}>
                            <div style={backArrowContainer}>
                                <button onClick={this.showLogin.bind(this)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}><img src={backArrow} style={{ width: '60px', height: '43px' }} /></button>
                            </div>

                            <div style={passwordInnerContainer}>
                                <div style={passwordHeadingContainer}>
                                    <h1 style={passwordHeadingStyle}>Password Reset</h1>
                                </div><br /><br />
                                <h2 style={{ color: '#fff' }}>Enter your email address to recieve password reset code</h2><br /><br />
                                <form>
                                    <input name="email" id="email" style={passwordInputStyle} placeholder="Email" /><br /><br /><br />

                                    <button style={passwordBtnStyle}>RESET PASSWORD</button>
                                </form>
                            </div>
                            <img src={footerImage} style={footerImg} />
                        </div>
                    </React.Fragment>
                </div>
            )
        }

    }
}


const smallContainer = {
    backgroundColor: 'transparent',
    margin: 'auto',
    position: 'relative',
    width: '80%',
    minHeight: '700px',
    marginTop: '8%',
    display: 'flex',
    flexDirection: 'column',
}

const bigContainer = {
    backgroundColor: 'transparent',
    margin: 'auto',
    position: 'relative',
    width: '80%',
    minHeight: '700px',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'column',
}

const footerImg = {
    position: 'absolute',
    bottom: '0',
    right: '0',
}
const innerContainer = {
    backgroundColor: '#55555587',
    width: '40%',
    float: 'right',
    minHeight: '700px',
    marginLeft: 'auto',
    position: 'relative',
    marginTop: '0px',
    borderRadius: '8px',
}
const logoContainer = {
    textAlign: 'center',
}
const loginContainer = {
    width: '80%',
    minHeight: '600px',
    margin: 'auto',
    position: 'relative',
    marginTop: '0px',
    background: 'transparent',
}
const signupContainer = {
    width: '80%',
    minHeight: '600px',
    margin: 'auto',
    position: 'relative',
    marginTop: '0px',
    background: 'transparent',
}
const inputStyle = {
    width: '100%',
    backgroundColor: '#C4C4C4',
    border: 'none',
    fontSize: 'large',
    fontFamily: 'Quantico',
    padding: '10px',
    fontWeight: 'bold',

}
const passwordStyle = {
    width: '90%',
    backgroundColor: '#C4C4C4',
    border: 'none',
    fontSize: 'large',
    fontFamily: 'Quantico',
    padding: '10px',
    fontWeight: 'bold',

}
const btnStyle = {
    fontFamily: 'Quantico',
    backgroundColor: '#ffa600',
    width: '100%',
    height: '39px',
    border: 'none',
    boxShadow: '#3333339e 0px 7px 2px -3px',
    fontSize: 'x-large',
    fontWeight: 'bold',
    cursor: 'pointer'
}
const fbBtnStyle = {
    fontFamily: 'Quantico',
    backgroundColor: '#3B5998',
    width: '100%',
    height: '39px',
    border: 'none',
    boxShadow: '#3333339e 0px 7px 2px -3px',
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer'
}
const googleBtnStyle = {
    fontFamily: 'Quantico',
    backgroundColor: '#DC4E41',
    width: '100%',
    height: '39px',
    border: 'none',
    boxShadow: '#3333339e 0px 7px 2px -3px',
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer'
}
const contactContainer = {
    float: 'left',
    marginBottom: '0px',
    marginTop: '0px',
    bottom: '0',
    left: '0',
    position: 'absolute',
    margin: '20px'
}

const socialSignup = {
    textAlign: 'center',

}
const contactButton = {
    display: 'inline-block',
    height: '40px',
    width: '40px',
    backgroundColor: 'transparent',
    border: 'none',
    marginRight: '35px',
    cursor: 'pointer'
}
const passwordContainer = {
    backgroundColor: '#55555587',
    margin: 'auto',
    position: 'relative',
    width: '80%',
    minHeight: '700px',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'column',
}
const passwordHeadingStyle = {
    boxShadow: '#ffa600 0px -9px 0px -3px inset',
    fontSize: '48px',
    margin: '0px 50px',
    color: '#fff',
    fontFamily: 'myRoboto',
    display: 'inline-block',
}
const passwordHeadingContainer = {
    textAlign: 'center'
}

const passwordInnerContainer = {
    width: '80%',
    minHeight: '500px',
    margin: 'auto',
    position: 'relative',
    textAlign: 'center'
}
const passwordInputStyle = {
    width: '695px',
    height: '39px',
    backgroundColor: '#C4C4C4',
    border: 'none',
    fontSize: 'large',
    placeholder: 'Email',
    fontFamily: 'Quantico',
    padding: '10px',
    fontWeight: 'bold',
}

const passwordBtnStyle = {
    fontFamily: 'Quantico',
    backgroundColor: '#ffa600',
    width: '695px',
    height: '39px',
    border: 'none',
    boxShadow: '#3333339e 0px 7px 2px -3px',
    fontSize: 'large',
    fontWeight: 'bold',
    cursor: 'pointer'
}
const backArrowContainer = {
    top: '0',
    left: '0',
    float: 'left',
    display: 'inline-block',
    paddingLeft: '20px',
    paddingTop: '20px'
}

export default Home;
