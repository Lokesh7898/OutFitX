import React, { Component } from "react";

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishlistItems: [],
        };
    }

    componentDidMount() {
        const storedWishlist = sessionStorage.getItem("wishlist");
        if (storedWishlist) {
            try {
                const wishlistItems = JSON.parse(storedWishlist);
                const validWishlistItems = wishlistItems.map((item) => ({
                    ...item,
                    price: item.price || 0,
                    quantity: item.quantity || 1,
                    total: (item.price || 0) * (item.quantity || 1),
                }));
                this.setState({ wishlistItems: validWishlistItems });
            } catch (error) {
                console.error("Error parsing wishlist from session storage:", error);
            }
        }
    }

    handleQuantityChange = (index, change) => {
        this.setState((prevState) => {
            const wishlistItems = [...prevState.wishlistItems];
            const newQuantity = wishlistItems[index].quantity + change;

            if (newQuantity > 0) {
                wishlistItems[index].quantity = newQuantity;
                wishlistItems[index].total = wishlistItems[index].price * newQuantity;
            }

            return { wishlistItems };
        }, () => {
            sessionStorage.setItem("wishlist", JSON.stringify(this.state.wishlistItems));
        });
    };

    handleAddToCart = (index) => {
        const item = this.state.wishlistItems[index];
        const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const existingIndex = storedCart.findIndex(cartItem => cartItem.id === item.id);

        if (existingIndex > -1) {
            storedCart[existingIndex].quantity += item.quantity;
            storedCart[existingIndex].total = storedCart[existingIndex].price * storedCart[existingIndex].quantity;
        } else {
            const newItem = { ...item, quantity: item.quantity, total: item.price * item.quantity };
            storedCart.push(newItem);
        }

        sessionStorage.setItem("cart", JSON.stringify(storedCart));
        console.log(`Added item ${item.id} to cart`);
    };

    handleDelete = (index) => {
        this.setState((prevState) => {
            const wishlistItems = prevState.wishlistItems.filter((_, i) => i !== index);
            return { wishlistItems };
        }, () => {
            sessionStorage.setItem("wishlist", JSON.stringify(this.state.wishlistItems));
        });
    };

    render() {
        const { wishlistItems } = this.state;

        return (
            <div className="wishlist-page">
                <div className="wishlist-content">
                    <h2 className="wishlist-header">Wishlist</h2>
                    {wishlistItems.length === 0 ? (
                        <div className="no-items-message">
                            No items in your favorite list 🫠.....
                        </div>
                    ) : (
                        <table className="wishlist-table">
                            <thead className="wishlist-table-head">
                                <tr>
                                    <th>IMAGE</th>
                                    <th>DESCRIPTION</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistItems.map((item, index) => (
                                    <tr key={`${item.id}-${index}`}>
                                        <td>
                                            <img
                                                src={item.image}
                                                alt={item.description}
                                                className="wishlist-product-image"
                                            />
                                        </td>
                                        <td>{item.description}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>
                                            <div className="quantity-control">
                                                <button
                                                    className="btn-decrement"
                                                    onClick={() => this.handleQuantityChange(index, -1)}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    min="1"
                                                    readOnly
                                                />
                                                <button
                                                    className="btn-increment"
                                                    onClick={() => this.handleQuantityChange(index, 1)}
                                                    aria-label="Increase quantity"
                                                >
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td>${item.total.toFixed(2)}</td>
                                        <td>
                                            <button
                                                className="wishlist-btn-add"
                                                onClick={() => this.handleAddToCart(index)}
                                                aria-label="Add to cart"
                                            >
                                                <i className="fas fa-cart-plus"></i>
                                            </button>
                                            <button
                                                className="wishlist-btn-delete"
                                                onClick={() => this.handleDelete(index)}
                                                aria-label="Delete item"
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        );
    }
}

export default Wishlist;
