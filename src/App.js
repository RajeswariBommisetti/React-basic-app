import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chart from './components/Chart';
import Media from './components/Media';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Creating routes to navigate easily using react router */}
        <BrowserRouter>
          <div className="App">
              <Switch>
              <Route path="/charts" component={Chart} />
              <Route path="/uploadImages" component={Media} />
              <Route path="/" component={Chart}/>
              </Switch>
          </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
