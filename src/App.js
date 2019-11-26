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
<Navigation />
         <Router>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" Component={About} />
            <Route path="/Reason" Component={Reason} />
            <Route path="/Cleanoffice" Component={Cleanoffice} />
            <Route path="/Carpet" Component={Carpet} />
            <Route path="/Marble" Component={Marble} />
            <Route path="/Other" Component={Other} />
            <Route path="/Client" Component={Client} />
            <Route path="/Contact" Component={Contact} />

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
      </React.Fragment>

    );
  }
}


export default App;
