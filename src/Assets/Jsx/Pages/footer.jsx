import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../Media/Images/imgpsh_fullsize_anim.png';

// Modal Component
const FooterModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="footer-modal-overlay">
      <div className="footer-modal-content">
        <div className="footer-modal-header">
          <h2>{title}</h2>
          <button className="footer-close-button" onClick={onClose}><i className="fas fa-times"></i></button>
        </div>
        <div className="footer-modal-body">
          {content}
        </div>
        <div className="footer-modal-footer">
          <button className="accept-button" onClick={onClose}>Accept</button>
          <button className="reject-button" onClick={onClose}>Reject</button>
        </div>
      </div>
    </div>
  );
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTermsModal: false,
      showPrivacyModal: false
    };
  }

  toggleTermsModal = () => {
    this.setState(prevState => ({ showTermsModal: !prevState.showTermsModal }));
  };

  togglePrivacyModal = () => {
    this.setState(prevState => ({ showPrivacyModal: !prevState.showPrivacyModal }));
  };

  render() {
    return (
      <>
        <footer className="footer bg-black text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <img src={logo} alt="logo" className="footer-logo" />
                <p className="footer-description">
                  Your ultimate destination for the latest fashion trends. Discover stylish clothing, accessories, and more to elevate your wardrobe.
                </p>
              </div>
              <div className="col-md-3 col-sm-6">
                <h5>Information</h5>
                <ul className="list-unstyled">
                  <li><Link to="/services">About</Link></li>
                  <li><Link to="#">FAQ</Link></li>
                  <li><Link to="#" onClick={this.toggleTermsModal}>Terms & Conditions</Link></li>
                  <li><Link to="/contactUs">Contact Us</Link></li>
                  <li><Link to="/services">Help</Link></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h5>Customer Service</h5>
                <ul className="list-unstyled">
                  <li><Link to="#" onClick={this.togglePrivacyModal}>Privacy Policy</Link></li>
                  <li><Link to="#">Shipping & Returns</Link></li>
                  <li><Link to="#">Money Back</Link></li>
                  <li><Link to="#">Payment Methods</Link></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h5>Get in Touch</h5>
                <address>
                  <p>NO. 342 - London Oxford Street.</p>
                  <p>012 United Kingdom.</p>
                  <p>info@eshop.com</p>
                  <p>+032 3456 7890</p>
                </address>
                <div className="social-icons d-flex gap-3">
                  <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#"><i className="fab fa-twitter"></i></Link>
                  <Link to="#"><i className="fab fa-instagram"></i></Link>
                  <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <p>Copyright © 2024 <Link to="#">outfitX</Link> - All Rights Reserved.</p>
          </div>
        </footer>

        {/* Modal for Terms & Conditions */}
        <FooterModal
          isOpen={this.state.showTermsModal}
          onClose={this.toggleTermsModal}
          title="Terms & Conditions"
          content={
            <div>
              <p><strong>1. Introduction</strong></p>
              <p>Welcome to OutfitX, your premier destination for shopping online. These Terms and Conditions outline the rules and regulations for using our website and services. By accessing or using OutfitX, you agree to be bound by these terms.</p>

              <p><strong>2. Intellectual Property</strong></p>
              <p>All content, including text, graphics, logos, images, and software, on OutfitX is the property of OutfitX or its content suppliers and is protected by intellectual property laws. Unauthorized use of any content from our site is prohibited.</p>

              <p><strong>3. User Responsibilities</strong></p>
              <p>As a user, you agree to use OutfitX for lawful purposes only. You must not engage in any activity that could harm the functionality or reputation of our site, including but not limited to unauthorized access or interference with our systems.</p>

              <p><strong>4. Limitation of Liability</strong></p>
              <p>OutfitX will not be liable for any loss or damage arising from your use of our site or services, including but not limited to direct, indirect, incidental, or consequential damages. This includes damages resulting from errors, omissions, interruptions, or loss of data.</p>

              <p><strong>5. Governing Law</strong></p>
              <p>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country]. Any disputes arising from or related to these terms will be subject to the exclusive jurisdiction of the courts in [Your Country].</p>

              <p><strong>6. Changes to Terms</strong></p>
              <p>We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of OutfitX following any changes constitutes your acceptance of the new terms.</p>

              <p><strong>7. Contact Us</strong></p>
              <p>If you have any questions about these Terms and Conditions, please contact us at info@outfitX.com.</p>
            </div>  
          }
        />

        {/* Modal for Privacy Policy */}
        <FooterModal
          isOpen={this.state.showPrivacyModal}
          onClose={this.togglePrivacyModal}
          title="Privacy Policy"
          content={
            <div>
              <p><strong>1. Introduction</strong></p>
              <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
              <p><strong>2. Information Collection</strong></p>
              <p>We collect information that you provide to us directly, such as your name, email address, and payment details.</p>
              <p><strong>3. Use of Information</strong></p>
              <p>Your information is used to process orders, provide customer support, and improve our services.</p>
              <p><strong>4. Data Security</strong></p>
              <p>We implement appropriate technical and organizational measures to ensure the security of your data.</p>
              <p><strong>5. Changes to Policy</strong></p>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
              <p>If you have any questions, please contact us at info@outfitX.com.</p>
            </div>
          }
        />
      </>
    );
  }
}

export default Footer;
