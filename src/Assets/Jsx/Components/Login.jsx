import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currrState: "Login",
            showLogin: true,
        };
    }

    handleStateChange = (newState) => {
        this.setState({ currrState: newState });
    };

    handleClose = () => {
        this.setState({ showLogin: false });
    };

    render() {
        const { currrState, showLogin } = this.state;

        if (!showLogin) return null;

        return (
            <div className='login-popup' id='loginPage'>
                <div className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>{currrState}</h2>
                        <i
                            className="fa fa-times"
                            style={{ cursor: 'pointer', fontSize: '24px' }}
                            onClick={this.handleClose}
                        ></i>
                    </div>
                    <div className="login-popup-inputs">
                        {currrState === "Login" ? null : <input type="text" placeholder='Your name' required />}
                        <input type="email" placeholder='Your email' required />
                        <input type="password" placeholder='Password' required />
                    </div>
                    <button>{currrState === "Sign Up" ? "Create Account" : "Login"}</button>
                    <div className='login-popup-condition'>
                        <input type="checkbox" required />
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                    {currrState === "Login" ?
                        <p>Create a new account? <span onClick={() => this.handleStateChange("Sign Up")}>Click here</span></p> :
                        <p>Already have an account? <span onClick={() => this.handleStateChange("Login")}>Login here</span></p>}
                </div>
            </div>
        );
    }
}

export default LoginPage;
