import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Search from './components/Search';
import History from './components/History';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <Header />
            <Search />
            <Footer />
          </Route>
          <Route path="/history">
            <Header />
            <History />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
