import React from 'react';
import './Home.css';
import { useStateValue } from './StateWrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {

    const [{ watchlist, portfolio }, dispatch] = useStateValue();

    const searchStock = (e) => {

        e.preventDefault();

        const ticker = e.currentTarget.value;
        console.log(ticker);

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

                    let shares = (portfolio.ticker.includes(ticker.toUpperCase()))? portfolio.shares[portfolio.ticker.indexOf(ticker.toUpperCase())] : 0;

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
                }

            }))
    }

    const watchlistDiv = watchlist.ticker.map((ticker, i) => {
        return (
            <div className="home_stock row" key={i + 'wl'}>
                    <button className="home_watchlist_button" value={ticker} onClick={searchStock}>
                    <Link to="/search" className="home_watchlist_link" >
                        <div className="home_stock_ticker col-6">
                            {ticker}
                        </div>
                        <div className="home_stock_price col-6">
                            ${watchlist.price[i]}
                        </div>
                        </Link>
                    </button>
            </div>
        );
    })



    return (
        <div className="home container">
            <div className="home_row row">
                <div className="home_investing row">
                    <div className="home_header row">
                        <div className="home_header_title col-6">
                            Stocks
                            </div>
                        <div className="home_header_icon col-6">
                            <i className="fa fa-line-chart"></i>
                        </div>
                    </div>
                    <div className="home_stock row">
                        <div className="home_stock_ticker col-6">
                            BA
                        </div>
                        <div className="home_stock_price col-6">
                            $209.93
                        </div>
                    </div>
                    <div className="home_stock row">
                        <div className="home_stock_ticker col-6">
                            BA
                        </div>
                        <div className="home_stock_price col-6">
                            $209.93
                        </div>
                    </div>
                </div>
                <div className="home_watchlist row">
                    <div className="home_header row">
                        <div className="home_header_title col-6">
                            Watchlist
                            </div>
                        <div className="home_header_icon col-6">
                            <i className="fa fa-bolt"></i>
                        </div>
                    </div>
                    {watchlistDiv}
                </div>
            </div>
        </div>
    );
}

export default Home;