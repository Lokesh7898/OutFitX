import React, { Component } from "react";
import boyimage from "../../Media/Images/manimg.png";
import { Link } from "react-router-dom";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      coupon: "",
    };
  }

  componentDidMount() {
    // Load products from session storage
    const storedProducts = JSON.parse(sessionStorage.getItem('cart')) || [];
    this.setState({ products: storedProducts });
  }

  componentDidUpdate(prevProps, prevState) {
    // Save products to session storage whenever they change
    if (prevState.products !== this.state.products) {
      sessionStorage.setItem('cart', JSON.stringify(this.state.products));
    }
  }

  handleQuantityChange = (index, change) => {
    this.setState(prevState => {
      const updatedProducts = [...prevState.products];
      const newQuantity = updatedProducts[index].quantity + change ;
      // Ensure quantity is always at least 1
      updatedProducts[index].quantity = Math.max(1, newQuantity);
      updatedProducts[index].total = updatedProducts[index].quantity * updatedProducts[index].price; // Update total
      return { products: updatedProducts };
    });
  };

  handleCouponChange = (e) => {
    this.setState({ coupon: e.target.value });
  };

  handleDelete = (index) => {
    this.setState((prevState) => {
      const products = prevState.products.filter((_, i) => i !== index);
      return { products };
    });
  };

  render() {
    const { products, coupon } = this.state;

    const subtotal = products.reduce((sum, product) => sum + (product.total || 0), 0);
    const savings = 20.0; // Hardcoded savings amount, consider dynamic calculation if needed
    const total = subtotal - savings;

    return (
      <div className="cart-container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>UNIT PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image || boyimage} // Fallback image if product image is not available
                    alt="Product"
                    className="image-section"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.description || 'No description available'}</td>
                <td>${(product.price || 0).toFixed(2)}</td>
                <td>
                  <div className="quantity-container">
                    <button
                      className="btn-decrease"
                      onClick={() => this.handleQuantityChange(index, -1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={product.quantity}
                      min="1"
                      readOnly
                    />
                    <button
                      className="btn-increase"
                      onClick={() => this.handleQuantityChange(index, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${(product.total || 0).toFixed(2)}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => this.handleDelete(index)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="summary-row">
          <div className="coupon-section">
            <input
              type="text"
              className="input-field"
              placeholder="Enter Your Coupon"
              value={coupon}
              onChange={this.handleCouponChange}
            />
            <button className="apply-btn">APPLY</button>
          </div>
          <div className="cart-total">
            <div className="cart-item">
              <p>Cart Subtotal:</p>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-item">
              <p>Shipping:</p>
              <span>Free</span>
            </div>
            <div className="cart-item">
              <p>You Save:</p>
              <span>${savings.toFixed(2)}</span>
            </div>
            <hr className="product-divider" />
            <div className="cart-item">
              <p>Total:</p>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="btn-div">
              <Link to='/checkout' className="shop-now-cart">CHECKOUT</Link>
              <Link to='/' className="shop-now-cart">CONTINUE SHOPPING</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
