import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateWrap';

function Header() {

    const [{ fund }, dispatch] = useStateValue();

    function formatNum(x) {
        x = x.toFixed(2);
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function logout() {
        localStorage.setItem("userID", "");

        dispatch({
            type: 'RESET',
            reset: null
        })
    }

    return (
        <div className="header container">
            <div className="header_row row">
                <div className="header_cash col-5 col-sm-4">
                    <div className="header_cash_top row">
                        Buying Power &emsp;<i className="fa fa-money"></i>
                    </div>
                    <div className="header_cash_bottom row">
                        ${(fund)? formatNum(fund): ""}
                    </div>
                </div>
                <div className="header_stock col-5 col-sm-4">
                    <div className="header_stock_top row">
                        Investing &emsp;<i className="fa fa-line-chart"></i>
                    </div>
                    <div className="header_stock_bottom row">
                        $1000.000
                    </div>
                </div>
                <div className="header_logout col-2">
                    <button className="header_button" onClick={logout}>
                        <Link to="/">
                            <i className="fa fa-power-off fa-2x" ></i>
                        </Link>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Header;