import React, {Component} from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Reason from './component/Reason';
import Cleanoffice from './component/Cleanoffice';
import Carpet from './component/Carpet';
// import NoMatch from './component/NoMatch';
import './App.css';

class App extends Component{
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Home/>
        <About/>
        <Reason/>
        <Cleanoffice />
        <Carpet />

        <Contact/>
        {/* <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="About" Component={About} />
            <Route exact path="Contact" Component={Contact} />
            <Route exact path="Reason" Component={Reason} />
            <Route Component ={NoMatch}/>
          </Switch>
        </Router> */}
      </React.Fragment>
        // <Navbar />
        // <Home/>
        // <About/>
        // <Contact/>
        // <Reason/>
    );
  }
}

export default App;
