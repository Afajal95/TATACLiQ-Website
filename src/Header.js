import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from './logo.png';
import { useStateValue } from "./StateProvider";


function Header() {
    const [{ basket }] = useStateValue();

    console.log(basket);

     return (
        <nav className="header">
            <Link to="/">
            <img
            className="header_logo"
            src= {logo}
            alt="Logo"
            />
            </Link>
            <div className="header_search">
            <input type="text" className="header_searchInput" placeholder="Search for products, brands and more" />
            <SearchIcon className="header_searchIcon" /> 
            </div>
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                <span className="header_optionLineOne">Hello</span>
                <span className="header_optionLineTwo">Sign In</span>
                </div>
                </Link>

                
                <Link to="/Returns" className="header_link">
                    <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                </Link>
                
                
                <Link to="/ContactUs" className="header_link">
                    <div className="header_option">
                    <span className="header_optionLineOne">Contact</span>
                    <span className="header_optionLineTwo">TATA CLiQ</span>
                </div>
                </Link>


                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLine0ne header_basketCount">{basket?.length}</span>

                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
