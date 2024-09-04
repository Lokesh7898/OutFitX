import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shirtImage from '../../Media/Images/manimg.png';
import Shipping from '../../Media/Icon/shipping.png';
import lock from "../../Media/Icon/lock.png";
import returnback from "../../Media/Icon/return.png";
import bestprice from "../../Media/Icon/bestprice.png";
import product1 from "../../Media/Images/product1.png";
import product2 from "../../Media/Images/product2.png";
import product3 from "../../Media/Images/product3.png";
import shoesimg from '../../Media/Images/shoesimg.png';
import watchimg from '../../Media/Images/watchimg.png';
import ContactUs from './contactUs';

const homeProducts = [
  { id: 1, name: 'Men Shirt 2', description: 'Another stylish men shirt.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXlSt5PQ0tylxPAT0Tpu-Rw-STbj5hBdhow&s', price: 22.0 },
  { id: 2, name: 'Men Shirt 4', description: 'Another stylish men shirt.', image: 'https://www.jiomart.com/images/product/500x630/rvjj0ksuo1/tee-town-cotton-polo-neck-tshirt-for-mens-polo-1-grey-product-images-rvjj0ksuo1-0-202211011321.jpg', price: 22.0 },
  { id: 3, name: 'Women Shirt 4', description: 'Another stylish women shirt.', image: 'https://assets.ajio.com/medias/sys_master/root/20230314/nFpJ/64109483f997dde6f4f99674/-473Wx593H-443007587-pink-MODEL.jpg', price: 27.0 },
  { id: 4, name: 'Women Shirt 4', description: 'Another stylish women shirt.', image: 'https://muselot.in/cdn/shop/products/Women_splainpinktshirtmadewith100_cotton_halfsleeveandroundneck-Muselot.jpg?v=1657571213', price: 27.0 },
  { id: 5, name: 'Women Shirt 4', description: 'Another stylish women shirt.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xpcES1OvK8Go7gc0Km9T87iRvwx3rfcCgg&s', price: 27.0 },
  { id: 6, name: 'Women Shirt 4', description: 'Another stylish women shirt.', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/30062023/410361508013_2.jpg', price: 27.0 },
  { id: 7, name: 'Women Shirt 13', description: 'Another stylish women shirt.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicIRqFLfYvKbpxc8noAWSys0-RlavMC_q-A&s', price: 27.0 },
  { id: 8, name: 'Men Shirt 4', description: 'Another stylish men shirt.', image: 'https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP5180.jpg?v=1685610639', price: 22.0 },
  { id: 9, name: 'Men Shirt 4', description: 'Another stylish men shirt.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVp8h938RMKn9mZrypLBrNjHlEWBxk6FWmw&s', price: 22.0 },
  { id: 10, name: 'Women Shirt 4', description: 'Another stylish women shirt.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjvYs-_Sx3NfI6JXDWo7H1sILQDUFYgjH0Q&s', price: 27.0 },
  
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      email: '',
      subject: 'Welcome to Our Store',
      message: 'Thank you for joining our mailing list!'
    };
  }

  scrollLeft = () => {
    this.carouselRef.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  scrollRight = () => {
    this.carouselRef.current.scrollBy({ 
      left: 300,
      behavior: 'smooth'
    });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSendEmail = () => {
    const { email } = this.state;
  
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), 
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };
  
  render() {
    const products = [
      { heading: "Man's Collections", item: 'Summer travel collection', image: product1 },
      { heading: "Bag Collections", item: 'Awesome Bag 2020', image: product2 },
      { heading: "Flash Sale", item: 'Mid Season Up to 40% Off', image: product3 },
      { heading: "Accessory Collections", item: 'Luxury Watches', image: watchimg },
      { heading: "Shoe Collections", item: 'Running Shoes 2021', image: shoesimg },
      
    ];
    return (
      <div>
        <div className="home-container" id='home'>
          <div className="text-content">
            <h2 className="discount">Up to 50% Off</h2>
            <h1 className="main-heading">Shirt For Man</h1>
            <p className="description">
              Discover the latest trends in men's fashion with our exclusive collection of shirts. Stylish and comfortable, perfect for any occasion.
            </p>
            <button className="shop-now">Shop Now!</button>
          </div>
          <div className="image-content">
            <img src={shirtImage} alt="Shirt" className="shirt-image" />
          </div>
        </div>

        <div className="product-carousel-container">
          <button className="carousel-arrow product-left-arrow" onClick={this.scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="product-carousel" ref={this.carouselRef}>
          {products.map((product, index) => (
              <div className="product-carousel-item" key={index}>
                <div className="product-carousel-text">
                  <h6 className="product-carousel-subheading">{product.heading}</h6>
                  <h3 className="product-carousel-main-heading">{product.item}</h3>
                  <div className="product-carousel-shop-now">Shop Now!</div>
                  <div className="product-divider" />
                </div>
                <div className="product-carousel-image">
                  <img src={product.image} alt={`Product ${index + 1}`} className="product-image" />
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-arrow product-right-arrow" onClick={this.scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
          
        <h2 className="product-heading blog-head" id='products'>Our Products</h2>

        <div className="home-products-container">
          {homeProducts.map((product) => (
            <div className="home-product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          ))}
        </div>


        <div className='show-btn'>
          <Link to="/productsMain">
            <button className="show-more-products">Show More</button>
          </Link>
        </div>

        <ContactUs /> 

        <h2 className="product-heading blog-head" id='services'>Services</h2>
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
        <h2 className="product-heading blog-head" id='contactUs'>Join us for the next phase</h2>
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
    );
  }
}

export default Home;
