import React, { Component } from 'react';


class ContactUs extends Component {
    render() {
        return (
            <>
                <div className="contact-page" id='contactUs'>
                <div className='contact-head'>
                    <h2 className='blog-head'><b>How Can We Assist You ?</b></h2>
                    <p>Let's connect! We're here to assist you with all your needs.</p>
                    </div>
                    <div className="row contact">
                        <div className="col-md-8  contact-form">
                            <h4>Get in Touch</h4>
                            <h2>Write us a message</h2>
                            <form>
                                <div className='d-flex col-12 gap-2' >
                                    <div className="form-group col-6">
                                        <label htmlFor="name">Your Name <span>*</span></label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="subject">Your Subject <span>*</span></label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className='d-flex col-12 gap-2'>
                                    <div className="form-group col-6">
                                        <label htmlFor="email">Your Email <span>*</span></label>
                                        <input type="email" className="form-control" required />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="phone">Your Phone <span>*</span></label>
                                        <input type="tel" className="form-control" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message <span>*</span></label>
                                    <textarea className="form-control" rows="4" required></textarea>
                                </div>
                                <button className="contact-btn">Send Message</button>
                            </form>
                        </div>
                        <div className="col-md-3 contact-info">
                            <div>
                                <i className="fas fa-phone"></i>
                                <h5>Call Us Now:</h5>
                                <p> +123 456-789-1120</p>
                                <p> +522 672-452-1120</p>
                            </div>
                            <div>
                                <i className="fas fa-envelope"></i>
                                <h5>Email:</h5>
                                <p> info@yourwebsite.com</p>
                                <p> support@yourwebsite.com</p>
                            </div>
                            <div>
                                <i className="fas fa-map-marker-alt"></i>
                                <h5>Our Address:</h5>
                                <p> KA-62/1, Travel Agency, 45 Grand Central Terminal, New York</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactUs;
