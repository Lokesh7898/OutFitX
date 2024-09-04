import React, { Component } from 'react';
import mastercard from '../../Media/Images/mastercard.jpg';
import payoneer from '../../Media/Images/payoneer.png';
import visa from '../../Media/Images/visa.jpg';
import discover from '../../Media/Images/discover.jpg';
import { Link } from 'react-router-dom';

class Checkout extends Component {
    state = {
        showModal: false,
        errors: {},
    };

    validateForm = () => {
        const errors = {};
        const requiredFields = [
            'firstName', 'lastName', 'email', 'phone', 'country', 'state', 'address1', 'postalCode'
        ];

        requiredFields.forEach(field => {
            if (!this.refs[field].value) {
                errors[field] = 'This field is required';
            }
        });

        this.setState({ errors });
        return Object.keys(errors).length === 0;
    };

    handleCheckoutClick = () => {
        if (this.validateForm()) {
            this.setState({ showModal: true });
        }
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { showModal, errors } = this.state;

        return (
            <div className="checkout-container container">
                <h3><b>Make Your Checkout Here</b></h3>
                <p>Please register in order to checkout more quickly</p>
                <div className="row">
                    <div className="col-md-8 checkout-form">
                        <form>
                            <div className="form-row d-flex gap-5">
                                <div className="form-group col-md-4">
                                    <label htmlFor="firstName">First Name <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="First Name"
                                        ref="firstName"
                                    />
                                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="lastName">Last Name <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Last Name"
                                        ref="lastName"
                                    />
                                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                </div>
                            </div>
                            <div className="form-row d-flex gap-5">
                                <div className="form-group col-md-4">
                                    <label htmlFor="email">Email Address <span className="text-danger">*</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email Address"
                                        ref="email"
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="phone">Phone Number <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone Number"
                                        ref="phone"
                                    />
                                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                                </div>
                            </div>
                            <div className="form-row d-flex gap-5">
                                <div className="form-group col-md-4">
                                    <label htmlFor="country">Country <span className="text-danger">*</span></label>
                                    <select id="country" className="form-control" ref="country">
                                        <option value="">Choose...</option>
                                        <option>United Kingdom</option>
                                    </select>
                                    {errors.country && <span className="error-message">{errors.country}</span>}
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="state">State / Division <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        placeholder="State / Division"
                                        ref="state"
                                    />
                                    {errors.state && <span className="error-message">{errors.state}</span>}
                                </div>
                            </div>
                            <div className="form-row d-flex gap-5">
                                <div className="form-group col-md-4">
                                    <label htmlFor="address1">Address Line 1 <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address1"
                                        placeholder="Address Line 1"
                                        ref="address1"
                                    />
                                    {errors.address1 && <span className="error-message">{errors.address1}</span>}
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="address2">Address Line 2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address2"
                                        placeholder="Address Line 2"
                                        ref="address2"
                                    />
                                </div>
                            </div>
                            <div className="form-row d-flex gap-5">
                                <div className="form-group col-md-4">
                                    <label htmlFor="postalCode">Postal Code <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="postalCode"
                                        placeholder="Postal Code"
                                        ref="postalCode"
                                    />
                                    {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company"
                                        placeholder="Company"
                                        ref="company"
                                    />
                                </div>
                            </div>
                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="createAccount"
                                    ref="createAccount"
                                />
                                <label className="form-check-label checkout-form-check-label" htmlFor="createAccount">Create an account?</label>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-4 checkout-payment">
                        <div className="checkout-card">
                            <div className="checkout-card-body">
                                <h4 className="checkout-card-title ul-head">CART TOTALS</h4>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item checkout-list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Sub Total</h6>
                                        </div>
                                        <span className="text-muted">$330.00</span>
                                    </li>
                                    <li className="list-group-item checkout-list-group-item d-flex justify-content-between lh-condensed">
                                        <div className='d-flex'>
                                            <h6 className="my-0">(+)</h6>
                                            <small className="text-muted">Shipping</small>
                                        </div>
                                        <span className="text-muted">$10.00</span>
                                    </li>
                                    <li className="list-group-item checkout-list-group-item d-flex justify-content-between">
                                        <span>Total</span>
                                        <strong>$340.00</strong>
                                    </li>
                                </ul>
                                <h4 className="checkout-card-title ul-head">PAYMENTS</h4>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="checkPayments" value="checkPayments" />
                                        <label className="form-check-label checkout-form-check-label" htmlFor="checkPayments">
                                            Check Payments
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="cashOnDelivery" value="cashOnDelivery" />
                                        <label className="form-check-label checkout-form-check-label" htmlFor="cashOnDelivery">
                                            Cash On Delivery
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" value="paypal" />
                                        <label className="form-check-label checkout-form-check-label" htmlFor="paypal">
                                            PayPal
                                        </label>
                                    </div>
                                </div>
                                <div className="image-row d-flex justify-content-between mb-3">
                                    <img src={mastercard} alt="Card 1" className="image-card" />
                                    <img src={payoneer} alt="Card 2" className="image-card" />
                                    <img src={discover} alt="Card 3" className="image-card" />
                                    <img src={visa} alt="Card 4" className="image-card" />
                                </div>
                                <button type="button" className="checkout-success-modal-btn" onClick={this.handleCheckoutClick}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>

                {showModal && (
                    <div className="checkout-success-modal">
                        <div className="checkout-success-modal-content">
                            <div className="checkout-success-modal-header">
                                <h4 className="checkout-success-modal-title">Order Placed Successfully</h4>
                                <button className="checkout-success-modal-close" onClick={this.handleCloseModal}>&times;</button>
                            </div>
                            <div className="checkout-success-modal-body">
                                <div className="order-payment-success">
                                    <i className="fas fa-check checkout-success-icon"></i>
                                </div>
                                <h2>Success!</h2>
                                <p>Thank you for your purchase! Your order has been successfully placed.</p>
                                <Link to="/" className="checkout-success-modal-btn">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Checkout;
