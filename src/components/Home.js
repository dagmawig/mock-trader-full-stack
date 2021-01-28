import React from 'react';
import './Home.css';

function Home() {
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
                    <div className="home_stock row">
                        <div className="home_stock_ticker col-6">
                            BA
                        </div>
                        <div className="home_stock_price col-6">
                            $209.93
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;