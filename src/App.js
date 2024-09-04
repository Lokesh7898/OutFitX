import React, { Component } from "react";
import "./Assets/Style/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Assets/Jsx/Components/NavBar";
import Home from "./Assets/Jsx/Pages/Home";
import Cart from "./Assets/Jsx/Pages/Cart";
import Products from "./Assets/Jsx/Pages/Product";
import ContactUs from "./Assets/Jsx/Pages/contactUs";
import Wishlist from "./Assets/Jsx/Pages/WishList";
import Login from "./Assets/Jsx/Components/Login";
import Footer from './Assets/Jsx/Pages/footer';
import Services from "./Assets/Jsx/Pages/Services";
import Checkout from "./Assets/Jsx/Components/Checkout";
import ProductsPage from "./Assets/Jsx/Pages/Product";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contactUs" element={<ContactUs />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/productsMain" element={<ProductsPage />} />
                        
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        );
    }
}

export default App;
