import React from 'react';
import { Router, Route, Link, Switch } from "react-router-dom";
import HomePage from './HomePage';
import { createBrowserHistory as createHistory } from 'history';
import './App.css';
import MainNavbar from './components/MainNavbar';
import Home from './components/Home';
import { Layout } from './components/Layout';
import Menu from './components/Menu';

const history = createHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <MainNavbar/>
        {/* <Layout> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
              {/* <Route path="/" exact component={HomePage} /> */}
            </Switch>
        {/* </Layout> */}
      </Router>
    </div>
  );
}

export default App;
