import React, { Component } from 'react'
import Shipping from '../../Media/Icon/shipping.png';
import lock from "../../Media/Icon/lock.png";
import returnback from "../../Media/Icon/return.png";
import bestprice from "../../Media/Icon/bestprice.png";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }


  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSendEmail = () => {
    const { email } = this.state;
    // Replace with your email sending logic
    console.log(`Sending email to ${email}`);
    // Example of sending an email via a service or API call
    // fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
  };
  render() {
    return (
      <div>
        <h2 className="product-heading blog-head">Services</h2>
        <div className="services-section">
          <div className="services-container">
            <div className="service-item">
              <img src={Shipping} alt="Free Shipping" className="service-icon" />
              <h3 className="service-heading">Free Shipping</h3>
              <p className="service-description">Order Over $100</p>
            </div>
            <div className="service-item">
              <img src={returnback} alt="Free Return" className="service-icon" />
              <h3 className="service-heading">Free Return</h3>
              <p className="service-description">Within 30 days returns</p>
            </div>
            <div className="service-item">
              <img src={lock} alt="Secure Payment" className="service-icon" />
              <h3 className="service-heading">Secure Payment</h3>
              <p className="service-description">100% secure payment</p>
            </div>
            <div className="service-item">
              <img src={bestprice} alt="Best Price" className="service-icon" />
              <h3 className="service-heading">Best Price</h3>
              <p className="service-description">Guaranteed price</p>
            </div>
          </div>
        </div>

        {/* New Section for Email Input and Button */}
        <h2 className="product-heading blog-head">Join us for the next phase</h2>
        <div className="email-section">
          <div className="email-wrapper">
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <button className="send-email" onClick={this.handleSendEmail}>
              Subscribe
            </button>
          </div>
        </div>


      </div>
    )
  }
}
