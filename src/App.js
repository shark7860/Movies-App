import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
import "./App.scss";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <div className="app">
  <Router>
    <Header/>
    <div className="container">
      
    </div>
    <Switch>
    <Route path='/' component={Home}></Route>
    <Route path='/movie/:imdbId' component={MovieDetail}></Route>
    <Route component={PageNotFound}></Route>
    </Switch>
    <Footer/>
  </Router>
  </div>
  );
}

