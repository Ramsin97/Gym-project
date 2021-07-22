import { Component } from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';
import Header from './Header/Header';

import Home from "./Home/Home";
import Staff from './Staff/Staff';
import Cafeteria from "./Cafeteria/Cafeteria";
import Packages from "./Packages/Packages";
import Contactus from "./Contactus/Contactus";

import { Footer } from './Footer/Footer';

import { BrowserRouter, Switch, Route } from "react-router-dom"


class App extends Component {
  render() {

    return (

      <div className="App">


        <BrowserRouter>

          <Navbar />
          <Header />
          <Switch>

            <Route path="/" component={Home} exact></Route>
            <Route path="/Staff" component={Staff} exact></Route>
            <Route path="/Cafeteria" component={Cafeteria} exact></Route>
            <Route path="/Packages" component={Packages} exact></Route>
            <Route path="/Contactus" component={Contactus} exact></Route>

          </Switch>
          <Footer />

        </BrowserRouter>


      </div>

    );
  }
}

export default App;