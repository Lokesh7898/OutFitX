import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Media/Images/imgpsh_fullsize_anim.png';
import user from "../../Media/Icon/Login.png";
import cart from "../../Media/Icon/cart.png";
import wishlist from "../../Media/Icon/wishlist.png";
import LoginPage from './Login';
import blacklogo from "../../Media/Images/black-logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      isModalOpen: false,
      activeLink: '/',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.updateActiveLink();
    window.addEventListener('popstate', this.updateActiveLink);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('popstate', this.updateActiveLink);
  }

  handleScroll = () => {
    const offset = window.scrollY;
    this.setState({ scrolled: offset > 50 });
  };

  updateActiveLink = () => {
    const path = window.location.pathname;
    this.setState({ activeLink: path });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { scrolled, isModalOpen, activeLink } = this.state;

    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}>
          <Link to='/' className="navbar-brand mx-2">
            <img src={scrolled ? blacklogo : logo} alt="Logo" className="nav-logo" />
          </Link>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <div className="navbar-nav">
              <Link
                to='/'
                className={`nav-item ${activeLink === '/' ? 'active-link' : ''}`}
                onClick={() => this.setState({ activeLink: '/' })}
              >
                Home
              </Link>
              <Link
                to='/products'
                className={`nav-item ${activeLink === '/products' ? 'active-link' : ''}`}
                onClick={() => this.setState({ activeLink: '/products' })}
              >
                Products
              </Link>
              <Link
                to='/services'
                className={`nav-item ${activeLink === '/services' ? 'active-link' : ''}`}
                onClick={() => this.setState({ activeLink: '/services' })}
              >
                Services
              </Link>
              <Link
                to='/contactUs'
                className={`nav-item ${activeLink === '/contactUs' ? 'active-link' : ''}`}
                onClick={() => this.setState({ activeLink: '/contactUs' })}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <form className="d-flex mx-2 my-2 my-lg-0">
            <Link to="/wishlist" className="btn nav-login" type="button">
              <div className="icon-back">
                <img src={wishlist} alt="Wishlist" className="icon2" />
              </div>
            </Link>
            <button type="button" className="btn nav-login" onClick={this.toggleModal}>
              <div className="icon-back">
                <img src={user} alt="Login" className="icon2" />
              </div>
            </button>
            <Link to="/cart" className="btn nav-login" type="button">
              <div className="icon-back">
                <img src={cart} alt="Cart" className="icon2" />
              </div>
            </Link>
          </form>
        </nav>

        {isModalOpen && <LoginPage />}
      </>
    );
  }
}

export default Navbar;
