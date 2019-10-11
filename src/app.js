import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from 'components/header/header';
import MainPage from 'containers/mainPage/mainPage';
import Footer from 'components/footer';
import Chat from 'containers/chatPage/chatPage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          <Route path="/" exact component={MainPage} />
          <Route path="/chat" component={Chat} />
          {/* <Route
            path="/commonpage"
            render={props => <CommonPage onButtonClick={this.onButtonClick} />}
            exact
          />
          <Route
            path="/personalpage"
            render={props => <PersonalPage person={this.state.person} />}
            exact
          /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}
