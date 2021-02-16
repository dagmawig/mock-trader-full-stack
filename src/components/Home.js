import React, { useEffect } from 'react';
import './Home.css';
import { useStateValue } from './StateWrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {

    const [{ watchlist, portfolio }, dispatch] = useStateValue();

    // hook to load user data from server
    useEffect(() => {

        if (localStorage.getItem("userID")) {

            async function loadUserData() {
                let url = 'https://mock-trader.glitch.me/loadData';
                let res = await axios.post(url, { userID: localStorage.getItem("userID") });
                return res;
            }

            dispatch({
                type: 'TOGGLE_LOADING',
                loadingDisplay: 'block'
            })

            loadUserData()
                .then(res => {
                    let data = res.data.data;
                    dispatch({
                        type: "LOAD_DATA",
                        data: {
                            fund: data.fund,
                            watchlist: data.watchlist,
                            portfolio: data.portfolio,
                            history: data.history
                        }
                    })

                    dispatch({
                        type: 'TOGGLE_LOADING',
                        loadingDisplay: 'none'
                    })
                })
        }

    }, [])


    // method used on investing and watchlist stock buttons. whenever the stocks are clicked they act as search stock function to display detail of stock.
    const searchStock = (e) => {

        e.preventDefault();

        const ticker = e.currentTarget.value;

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
                }

            }))
    }

    // method to return a div containing a list of watchlist stockes with their price info loaded from app state 
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

    // method to return a div containing a list of investing stockes with their price info loaded from app state 
    const investingDiv = portfolio.ticker.map((ticker, i) => {
        return (
            <div className="home_stock row" key={i + 'in'}>
                <button className="home_watchlist_button" value={ticker} onClick={searchStock}>
                    <Link to="/search" className="home_watchlist_link" >
                        <div className="home_stock_ticker col-4">
                            {ticker}
                        </div>
                        <div className="home_stock_share col-4">
                            {portfolio.shares[i]} shares
                        </div>
                        <div className="home_stock_price col-4">
                            ${portfolio.price[i]}
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
                            Investing
                            </div>
                        <div className="home_header_icon col-6">
                            <i className="fa fa-line-chart"></i>
                        </div>
                    </div>
                    {investingDiv}
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