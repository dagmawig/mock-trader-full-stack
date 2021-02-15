import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateWrap';

function Header() {

    const [{ fund, portfolio }, dispatch] = useStateValue();

    //method to format numbers to two decimal digits.
    function formatNum(x) {
        x = x.toFixed(2);
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // method to rest app state during logout
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
                        ${(portfolio.shares.length)? formatNum(portfolio.shares.reduce((total, share, i) => {
                            return total +(share*parseFloat(portfolio.price[i].replace(',', '')));
                        }, 0)): 0}
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