import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header'
import About from './components/pages/about'
import Contact from './components/pages/contactUs'
import Faq from './components/pages/faq'
import Management from './components/pages/management'
import Home from './components/pages/home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
        
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
          <Route path="/management" component={Management} />
        </div>
      </Router>

    );
  }
}

export default App;
