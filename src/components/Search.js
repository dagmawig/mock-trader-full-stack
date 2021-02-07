import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import { useStateValue } from './StateWrap';

//let plusButtonClass;
//let searchedTicker;

function Search() {
    const [ticker, getTicker] = useState('');
    const [{ userID, search, watchlist, fund, portfolio }, dispatch] = useStateValue();
    const [trade, startTrade] = useState(['Trade', 'purple', 'hidden']);
    const [shareBuy, getBuyShare] = useState(0);
    const [shareSell, getSellShare] = useState(0);
    const [limitPrice, getLimitPrice] = useState(0);
    const [limitOrder, getLimitOrder] = useState(0);

    function formatNum(x) {
        x = x.toFixed(2);
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function openBuy() {
        window.$('#buyModal').modal('show');

        dispatch({
            type: 'TOGGLE_LOADING',
            loadingDisplay: 'block'
        })

        async function searchTicker() {
            let url = 'https://mock-trader.glitch.me/getPrice/' + search.searchedTicker;
            let res = await axios.get(url);
            return res;
        }
        searchTicker()
            .then((res) => {

                let shares = (portfolio.ticker.includes(ticker.toUpperCase()))? portfolio.shares[portfolio.ticker.indexOf(ticker.toUpperCase())] : 0;

                let cost = (portfolio.ticker.includes(ticker.toUpperCase())) ? portfolio.averageC[portfolio.ticker.indexOf(ticker.toUpperCase())] : 0;

                console.log("modalBuyPrice", res.data);
                dispatch({
                    type: 'SET_SEARCH',
                    search: {
                        price: res.data.price,
                        plusButtonClass: (!watchlist.ticker.includes(ticker.toUpperCase())) ? 'fa fa-plus-square fa-3x' : 'fa fa-minus-square fa-3x',
                        searchedTicker: ticker.toUpperCase(),
                        shares: shares,
                        averCost: cost
                    }
                })
                dispatch({
                    type: 'TOGGLE_LOADING',
                    loadingDisplay: 'none'
                })

            })
    }
    function openSell() {
        window.$('#sellModal').modal('show');

        dispatch({
            type: 'TOGGLE_LOADING',
            loadingDisplay: 'block'
        })

        async function searchTicker() {
            let url = 'https://mock-trader.glitch.me/getPrice/' + search.searchedTicker;
            let res = await axios.get(url);
            return res;
        }
        searchTicker()
            .then((res) => {

                let shares = (portfolio.ticker.includes(ticker.toUpperCase()))? portfolio.shares[portfolio.ticker.indexOf(ticker.toUpperCase())] : 0;

                let cost = (portfolio.ticker.includes(ticker.toUpperCase())) ? portfolio.averageC[portfolio.ticker.indexOf(ticker.toUpperCase())] : 0;

                console.log("modalBuyPrice", res.data);
                dispatch({
                    type: 'SET_SEARCH',
                    search: {
                        price: res.data.price,
                        plusButtonClass: (!watchlist.ticker.includes(ticker.toUpperCase())) ? 'fa fa-plus-square fa-3x' : 'fa fa-minus-square fa-3x',
                        searchedTicker: ticker.toUpperCase(),
                        shares: shares,
                        averCost: cost
                    }
                })
                dispatch({
                    type: 'TOGGLE_LOADING',
                    loadingDisplay: 'none'
                })

            })
    }
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

                        let shares = (portfolio.ticker.includes(ticker.toUpperCase())) ? portfolio.shares[portfolio.ticker.indexOf(ticker.toUpperCase())] : 0;

                        let cost = (portfolio.ticker.includes(ticker.toUpperCase())) ? portfolio.averageC[portfolio.ticker.indexOf(ticker.toUpperCase())] : 0;

                        dispatch({
                            type: 'SET_SEARCH',
                            search: {
                                price: res.data.price,
                                plusButtonClass: (!watchlist.ticker.includes(ticker.toUpperCase())) ? 'fa fa-plus-square fa-3x' : 'fa fa-minus-square fa-3x',
                                searchedTicker: ticker.toUpperCase(),
                                shares: shares,
                                averCost: cost
                            }
                        })
                        dispatch({
                            type: 'TOGGLE_LOADING',
                            loadingDisplay: 'none'
                        })
                        startTrade(['Trade', 'purple', 'hidden']);
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
                        <>
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
                         <div className="search_position row">
                         <div className="search_position_title col-12">
                             POSITION
             </div>
                         <div className="search_shares col-6">
                             <div className="search_shares_top row">
                                 Shares
                 </div>
                             <div className="search_shares_bottom row">
                                 {search.shares}
                 </div>
                         </div>
                         <div className="search_value col-6">
                             <div className="search_value_top row">
                                 Market Value
                 </div>
                             <div className="search_value_bottom row">
                                 ${formatNum(search.shares*parseFloat(search.price))}
                 </div>
                         </div>
                         <div className="search_cost col-12">
                             <div className="search_cost_top row">
                                 Average Cost
                 </div>
                             <div className="search_cost_bottom row">
                                 ${search.averCost}
                 </div>
                         </div>
                         <div className="search_return col-6">
                             <div className="search_return_top row">
                                 Total Return
                 </div>
                             <div className="search_return_bottom row">
                                 ${formatNum(search.shares*(parseFloat(search.price)-search.averCost))}
                 </div>
                         </div>
                         <div className="search_trade col-6">
                             <button className="search_trade_button search_sell" style={{ visibility: trade[2] }} onClick={openSell}>
                                 Sell
                             </button>
                             <button className="search_trade_button search_buy" style={{ visibility: trade[2] }} onClick={openBuy}>
                                 Buy
                             </button>
                             <button className="search_trade_button search_trade_b" style={{ backgroundColor: trade[1] }} onClick={() => startTrade((trade[0] === 'Trade') ? ['X', 'grey', ''] : ['Trade', 'purple', 'hidden'])}>
                                 {trade[0]}
                             </button>
                         </div>
                     </div>
                     </>
                    ) : null
                }

                <div className="modal" role="dialog" id="buyModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header row">
                                <h3 className="modal-title">Buy {search.searchedTicker}</h3>
                                <button type="button" className="close modal_close_button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="modal_x">&times;</span>
                                </button>
                                <p className="modal_fund col-12">${formatNum(fund)} available</p>

                            </div>
                            <div className="modal-body">
                                <div className="modal_share">
                                    <div className="modal_share_text">Number of Shares</div>
                                    <div className="modal_share_input">
                                        <input type="number" placeholder="0" value={shareBuy} onChange={(e) => getBuyShare(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="modal_price">
                                    <div className="modal_price_text">
                                        Market Price
                                    </div>
                                    <div className="modal_price_num">${search.price}</div>
                                </div>
                                <div className="modal_cost">
                                    <div className="modal_cost_text">Estimated Cost</div>
                                    <div className="modal_cost_num">${formatNum(shareBuy * parseFloat(search.price))}</div>
                                </div>
                                <div className="modal_limit">
                                    <div className="modal_limit_check">
                                        <label for="limitPrice">Limit Price</label>
                                        <input type="checkbox" id="limitPrice"></input>
                                    </div>
                                    <div className="modal_limit_input">
                                        <input type="number" placeholder="$" value={limitPrice} onChange={(e) => getLimitPrice(e.target.value)}></input>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal" role="dialog" id="sellModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header row">
                                <h3 className="modal-title">Sell {search.searchedTicker}</h3>
                                <button type="button" className="close modal_close_button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="modal_x">&times;</span>
                                </button>
                                <p className="modal_fund col-12">{search.shares} shares available</p>

                            </div>
                            <div className="modal-body">
                                <div className="modal_share">
                                    <div className="modal_share_text">Number of Shares</div>
                                    <div className="modal_share_input">
                                        <input type="number" placeholder="0" value={shareSell} onChange={(e) => getSellShare(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="modal_price">
                                    <div className="modal_price_text">
                                        Market Price
                                    </div>
                                    <div className="modal_price_num">${search.price}</div>
                                </div>
                                <div className="modal_cost">
                                    <div className="modal_cost_text">Estimated Credit</div>
                                    <div className="modal_cost_num">${formatNum(shareSell * parseFloat(search.price))}</div>
                                </div>
                                <div className="modal_limit">
                                    <div className="modal_limit_check">
                                        <label for="limitPrice">Limit Order</label>
                                        <input type="checkbox" id="limitPrice"></input>
                                    </div>
                                    <div className="modal_limit_input">
                                        <input type="number" placeholder="$" value={limitOrder} onChange={(e) => getLimitOrder(e.target.value)}></input>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success">Sell</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Search;