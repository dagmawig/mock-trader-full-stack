import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useStateValue } from './components/StateWrap';
import { useEffect } from 'react';
import axios from 'axios';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Search from './components/Search';
import History from './components/History';
import Loading from './components/Loading';

function App() {

  const [{ userID }] = useStateValue();
  let homePage;
  if (userID) {
    homePage = (
      <>
        <Header />
        <Loading />
        <Home />
        <Footer />
      </>
    )
  }
  else {
    homePage = (
      <>
        <Loading />
        <Login />
      </>
    )
  }
  //const [{ search, watchlist }, dispatch] = useStateValue();

  // async function updatePrice() {
  //   let res = await axios.post('https://mock-trader.glitch.me/updatePrice', { tickerArr: [search.searchedTicker].concat(watchlist.ticker) });
  //   //return res;
  //   console.log("useEffect");
  //   if(search.searchedTicker === res.data.data.ticker[0] ){
  //     console.log("dispatching");
  //     dispatch({
  //       type: 'SET_SEARCHP',
  //       searchP: res.data.data.price[0]
  //   })
  //   }

  // }

  // useEffect(() => {

  //   //updatePrice();

  //   let interval = null;

  //   if (search.searchedTicker !== '' || watchlist.ticker.length !== 0 ){
  //     console.log('Hereeeee')
  //     interval = setInterval (() => {
  //       updatePrice()
  //     }, 60000)

  //   }
  //   else {
  //     if(interval){
  //       clearInterval(interval);
  //     }
  //   }
  // })

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Loading />
            <Login />
          </Route>
          <Route path="/search">
            {(userID) ?
              <>
                <Header />
                <Loading />
                <Search />
                <Footer />
              </> :
              <div>Page access not authorized!</div>
            }
          </Route>
          <Route path="/history">
            {(userID) ?
              <>
                <Header />
                <Loading />
                <History />
                <Footer />
              </> :
              <div>Page access not authorized!</div>
            }
          </Route>
          <Route path="/">
            {homePage}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
