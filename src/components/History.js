import React, { useEffect } from 'react';
import './History.css';
import { useStateValue } from './StateWrap';
import axios from 'axios';




function History() {

    const [{ history, loadingDisplay }, dispatch] = useStateValue();

    // method for format numbers to two decimal digits.
    function formatNum(x) {
        x = x.toFixed(2);
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // method to loop through the history object and return a list of history divs to display.
    const historyDiv = (history.ticker.length !== 0) ? history.ticker.map((ticker, i) => {

        let d = new Date(history.date[i]);

        // changing UTC timezone to western hemsphere
        d = new Date(d.getTime() - ( d.getTimezoneOffset()*60000 )).toDateString();

        return (
            <div className="history_list row" key={i + "hist"}>
                <div className="history_list_top row">
                    <div className="history_list_stock col-6">
                        {ticker}: {history.limit[i]}
                    </div>
                    <div className="history_list_price col-6">
                        {(history.value[i] < 0) ? `-$${formatNum(Math.abs(history.value[i]))}` : `$${formatNum(history.value[i])}`}
                    </div>
                </div>
                <div className="history_list_bottom row">
                    <div className="history_list_date col-6">
                        {d}
                    </div>
                    <div className="history_list_value col-6">
                        {`${history.shares[i]} shares @ $${history.price[i]}`}
                    </div>
                </div>
            </div>
        );
    }) :
        <div className="history_list row">
           {(loadingDisplay === 'block')? "" : <>You Have No History. <br /> Go Make Some!!</>} 
        </div>
        ;

    // hook to reload info from server
    useEffect(() => {

        console.log(localStorage.getItem("userID"));

        if (localStorage.getItem("userID")) {

            async function loadUserData() {
                let url = 'https://mock-trader.glitch.me/loadData';
                console.log(url);
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
                    console.log(data.watchlist, data.portfolio, data.history);
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

    return (
        <div className="history container">
            <div className="history_row row">
                <div className="history_section row">
                    <div className="history_header row">
                        History
                    </div>
                    {historyDiv}
                </div>
            </div>
        </div>
    );
}

export default History;