import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import { useStateValue } from './StateWrap';

//let plusButtonClass;
//let searchedTicker;

function Search() {
    const [ticker, getTicker] = useState('');
    const [{ userID, search, watchlist }, dispatch] = useStateValue();
    const [trade, startTrade] = useState(['Trade', 'purple', 'hidden']);

    // function startTrade() {
    //     trade=!trade;
    //     console.log(trade)
    // }


    const updateWatchlist = (e) => {

        e.preventDefault();

        if (!watchlist.ticker.includes(search.searchedTicker.toUpperCase())) {
            watchlist.ticker.push(search.searchedTicker.toUpperCase());
            watchlist.price.push(search.price);
        }
        else {
            let index = watchlist.ticker.indexOf(search.searchedTicker.toUpperCase());
            watchlist.ticker.splice(index, 1);
            watchlist.price.splice(index, 1);
        }

        dispatch({
            type: 'TOGGLE_LOADING',
            loadingDisplay: 'block'
        })

        async function setWatchlist() {
            let res = await axios.post('https://mock-trader.glitch.me/updateWatchlist', { userID: userID, newWatchlist: watchlist })
            return res;
        }
        setWatchlist()
            .then((res) => {
                console.log(res.data);
                search.plusButtonClass = (!res.data.watchlist.ticker.includes(search.searchedTicker.toUpperCase())) ? 'fa fa-plus-square fa-3x' : 'fa fa-minus-square fa-3x';
                dispatch({
                    type: 'UPDATE_WATCHLIST',
                    watchlist: res.data.watchlist,
                })
                dispatch({
                    type: 'TOGGLE_LOADING',
                    loadingDisplay: 'none'
                })
            })
    }
    const searchStock = (e) => {

        e.preventDefault();

        if (!ticker.split(' ').join('')) alert('ticker field is empty');
        else if (ticker === 'user') {
            async function newUser() {
                let res = await axios.post('https://mock-trader.glitch.me/createUser', { userID: userID })
                return res;
            }
            newUser()
                .then((res) => {
                    console.log(res.data);
                });
        }
        else {

            dispatch({
                type: 'TOGGLE_LOADING',
                loadingDisplay: 'block'
            })

            async function searchTicker() {
                let url = 'https://mock-trader.glitch.me/getPrice/' + ticker;
                let res = await axios.get(url);
                return res;
            }
            searchTicker()
                .then((res => {

                    console.log(res.data);
                    if (res.data.price == "") { alert("No such stock exists!"); }
                    else {
                        dispatch({
                            type: 'SET_SEARCH',
                            search: {
                                price: res.data.price,
                                plusButtonClass: (!watchlist.ticker.includes(ticker.toUpperCase())) ? 'fa fa-plus-square fa-3x' : 'fa fa-minus-square fa-3x',
                                searchedTicker: ticker.toUpperCase()
                            }
                        })
                        dispatch({
                            type: 'TOGGLE_LOADING',
                            loadingDisplay: 'none'
                        })
                    }

                }))
        }


    }
    return (
        <div className="search container">
            <div className="search_row row">
                <div className="search_input_section row">
                    <input className="search_input" type="text" value={ticker} onChange={(e) => getTicker(e.target.value)} placeholder="stock ticker symbol"></input><button className="search_button" onClick={searchStock}><i className="fa fa-search" ></i></button>
                </div>
                {(search.searchedTicker) ?
                    (
                        <div className="search_header row">
                            <div className="search_header_detail col-6">
                                <div className="search_header_title row">
                                    {search.searchedTicker}
                                </div>
                                <div className="search_header_price row">
                                    ${search.price}
                                </div>
                            </div>
                            <div className="search_add col-6">
                                <button className="search_add_button" onClick={updateWatchlist}>
                                    <i className={search.plusButtonClass}></i>
                                </button>
                            </div>
                        </div>
                    ) : null
                }

                {
                    (userID) ?
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
                                    <button className="search_trade_button search_sell" style={{ visibility: trade[2] }}>
                                        Sell
                                    </button>
                                    <button className="search_trade_button search_buy" style={{ visibility: trade[2] }}>
                                        Buy
                                    </button>
                                    <button className="search_trade_button search_trade_b" style={{ backgroundColor: trade[1] }} onClick={() => startTrade((trade[0] === 'Trade') ? ['X', 'grey', ''] : ['Trade', 'purple', 'hidden'])}>
                                        {trade[0]}
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