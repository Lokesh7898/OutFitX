import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class Login extends Component {
    state = {
        showModal: false,
    };

    handleShow = () => this.setState({ showModal: true });
    handleClose = () => this.setState({ showModal: false });

    render() {
        return (
            <div className="login-container">
            {/* Login Form */}
                <div className="login-card">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">
                                Username :
                            </label>
                            <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                Password :
                            </label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <div className="form-group d-flex gap-2">
                            <input type="checkbox" id="privacy" />
                            <label htmlFor="privacy">I agree to the <a href="#">Privacy Policy</a></label>
                        </div>
                        <button type="submit" className="Login-btn">Login</button>
                        <p className="register-link">
                            New user? <a href="#" onClick={this.handleShow}>Create Account</a>
                        </p>
                    </form>
                </div>

                {/* Registration Form */}
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton >
                        <Modal.Title><h2 className='login-Register'>Register</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="reg-username">
                                    Username :
                                </label>
                                <input type="text" className="form-control" id="reg-username" placeholder="Enter your username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reg-password">
                                    Password :
                                </label>
                                <input type="password" className="form-control" id="reg-password" placeholder="Enter your password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reg-email">
                                    Email :
                                </label>
                                <input type="email" className="form-control" id="reg-email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reg-phone">
                                    Phone :
                                </label>
                                <input type="text" className="form-control" id="reg-phone" placeholder="Enter your phone number" />
                            </div>
                            <button type="submit" className="Login-btn">Register</button>
                            <p className="register-link">
                            Already a user <a href="#" onClick={this.handleShow}>Login</a>
                        </p>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Login;
