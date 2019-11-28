import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Reason from './component/Reason';
import Cleanoffice from './component/Cleanoffice';
import Carpet from './component/Carpet';
import Marble from './component/Marble';
import Other from './component/Other';
import Client from './component/Client';
import Footer from './component/Footer'
// import Location from './component/Location'
// import NoMatch from './component/NoMatch';
import './App.css';



class App extends Component{
  render() {
    return (
      <React.Fragment>
        {/* <Navigation />
        <Home />
        <About />
        <Reason/>
        <Cleanoffice />
        <Carpet />
        <Marble />
        <Others />
        <Client />

        <Contact/> */}

         <Router>
          <Navigation />
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Reason" component={Reason} />
            <Route path="/Cleanoffice" component={Cleanoffice} />
            <Route path="/Carpet" component={Carpet} />
            <Route path="/Marble" component={Marble} />
            <Route path="/Other" component={Other} />
            <Route path="/Client" component={Client} />
            <Route path="/Contact" component={Contact} />
         </Switch>
        </Router>

         {/* <Home /> */}
        <About />
        <Reason/>
        <Cleanoffice />
        <Carpet />
        <Marble />
        <Other />
        <Client />
        <Contact/>
        <Footer />
      </React.Fragment>

    );
  }
}


export default App;
