import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Search from './components/Search';
import History from './components/History';
import Loading from './components/Loading';
import { useEffect } from 'react';
import SignUp from './components/SignUp';

function App() {

  let homePage;

  if (localStorage.getItem("userID")) {
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

  let signUp;

  if (localStorage.getItem("userID")) {
    signUp = (
      <>
        <Header />
        <Loading />
        <Home />
        <Footer />
      </>
    )
  }
  else {
    signUp = (
      <>
        <Loading />
        <SignUp />
      </>
    )
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/search">
            {(localStorage.getItem("userID")) ?
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
            {(localStorage.getItem("userID")) ?
              <>
                <Header />
                <Loading />
                <History />
                <Footer />
              </> :
              <div>Page access not authorized!</div>
            }
          </Route>
          <Route path="/empty">
            <div>
              Verification link sent to your email! <br />Please click on link to verify email....then <button><Link to="/">Login</Link></button>
            </div>
          </Route>
          <Route path="/signup">
            {signUp}
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
