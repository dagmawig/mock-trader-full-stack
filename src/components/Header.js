import React from 'react';
import './Header.css';
import { useStateValue } from './StateWrap';

function Header() {

    const [{ fund }] = useStateValue();

    function formatNum(x) {
        x = x.toFixed(2);
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="header container">
            <div className="header_row row">
                <div className="header_cash col-5 col-sm-3">
                    <div className="header_cash_top row">
                        Buying Power &emsp;<i className="fa fa-money"></i>
                    </div>
                    <div className="header_cash_bottom row">
                        ${formatNum(fund)}
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
                    <button className="header_button"><i className="fa fa-power-off fa-2x" ></i></button>
                </div>
            </div>
        </div>

    );
}

export default Header;