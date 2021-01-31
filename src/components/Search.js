import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import { useStateValue } from './StateWrap';

function Search() {
    const [ticker, getTicker] = useState('');
    const [{ user, search }, dispatch] = useStateValue();

    const searchStock = (e) => {

        e.preventDefault();

        if (!ticker.split(' ').join('')) alert('ticker field is empty');
        else {
            async function searchTicker() {
                let url = 'https://mock-trader.glitch.me/getPrice/' + ticker;
                let res = await axios.get(url);
                return res;
            }
            searchTicker()
                .then((res => {
                    console.log(res.data);
                    dispatch({
                        type: 'SET_SEARCH',
                        search: {
                            ticker: ticker.toUpperCase(),
                            price: res.data.price
                        }
                    })
                }))
        }


    }
    return (
        <div className="search container">
            <div className="search_row row">
                <div className="search_input_section row">
                    <input className="search_input" type="text" value={ticker} onChange={(e) => getTicker(e.target.value)} placeholder="stock ticker symbol"></input><button className="search_button" onClick={searchStock}><i className="fa fa-search" ></i></button>
                </div>
                {(search.ticker) ?
                    (
                        <div className="search_header row">
                            <div className="search_header_detail col-6">
                                <div className="search_header_title row">
                                    {search.ticker}
                                </div>
                                <div className="search_header_price row">
                                    {search.price}
                                </div>
                            </div>
                            <div className="search_add col-6">
                                <button className="search_add_button">
                                    <i className="fa fa-plus-circle fa-3x"></i>
                                </button>
                            </div>
                        </div>
                    ) : null
                }

                {
                    (user) ?
                    (
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
                    <div className="search_trade col-6">
                        <button className="search_trade_button">
                            Trade
                        </button>
                    </div>
                </div>
                    ) :
                    null
                }

            </div>
        </div>
    );
}

export default Search;