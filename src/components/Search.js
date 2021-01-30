import React from 'react';
import './Search.css';

function Search() {
    return (
        <div className="search container">
            <div className="search_row row">
                <div className="search_input_section row">
                    <input className="search_input" type="text" placeholder="stock ticker symbol"></input><button className="search_button"><i className="fa fa-search" ></i></button>
                </div>
                <div className="search_header row">
                    <div className="search_header_title col-12">
                        BA
                    </div>
                    <div className="search_header_price col-12">
                        $297.05
                    </div>
                </div>
                <div className="search_position row">
                    <div className="search_position_title col-12">
                        POSITION
                    </div>
                    <div className="search_shares col-6">
                        <div className="search_shares_top row">
                            Shares
                        </div>
                        <div className="search_shares_bottom row">
                            20
                        </div>
                    </div>
                    <div className="search_value col-6">
                        <div className="search_value_top row">
                            Market Value
                        </div>
                        <div className="search_value_bottom row">
                            $12,000.00
                        </div>
                    </div>
                    <div className="search_cost col-12">
                        <div className="search_cost_top row">
                            Average Cost
                        </div>
                        <div className="search_cost_bottom row">
                            $185.00
                        </div>
                    </div>
                    <div className="search_return col-6">
                        <div className="search_return_top row">
                            Total Return
                        </div>
                        <div className="search_return_bottom row">
                            $1000.00
                        </div>
                    </div>
                    <div className="search_buy col-6">
                        <button className="search_buy_button">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;