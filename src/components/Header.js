import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header container">
            <div className="header_row row">
                <div className="header_cash col-4 col-sm-3">
                    <div className="header_cash_top row">
                        Cash &emsp;<i className="fa fa-money"></i>
                    </div>
                    <div className="header_cash_bottom row">
                        $1000.000
                    </div>
                </div>
                <div className="header_stock col-5 col-sm-3">
                    <div className="header_stock_top row">
                        Investing &emsp;<i className="fa fa-line-chart"></i>
                    </div>
                    <div className="header_stock_bottom row">
                        $1000.000
                    </div>
                </div>
                <div className="header_logout col-2">
                    <button className="header_button btn btn-danger">Log Out</button>
                </div>
            </div>
        </div>

    );
}

export default Header;