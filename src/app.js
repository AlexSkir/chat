/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from 'components/header/header';
import MainPage from 'containers/mainPage/mainPage';
import Footer from 'components/footer';
import Chat from 'containers/chatPage/chatPage';
import store from 'store/store';
import $ from 'jquery';
import Notifications from 'components/Notifications/notif';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div
          className="container-fluid"
          onClick={e => {
            const input = $('#changeNameInput');
            if ($(e.target).is('.container-fluid') || $(e.target).is('.header')) {
              if (input) {
                store.dispatch({ type: 'activeInput', value: false });
              }
            }
          }}
        >
          <Header />
          <Route exact path="/">
            {this.props.login && this.props.login !== 'Guest' && this.props.redirect ? (
              <Redirect to="/chat" />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/chat">
            {this.props.login && this.props.login !== 'Guest' && this.props.redirect ? (
              <Redirect to="/chat" />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/" exact component={MainPage} />
          <Route path="/chat" component={Chat} />
          <Footer />
          <Notifications />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  login: PropTypes.string.isRequired,
  redirect: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ login: state.login, redirect: state.redirect });
export default connect(mapStateToProps)(App);
