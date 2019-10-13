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

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="container-fluid" onClick={(e) => {
          const input = $('#changeNameInput');
          console.log($(e.target))
          if ($(e.target).is('.container-fluid') || $(e.target).is('.header')) {
            console.log('yep its contairner')
            if (input) {
              console.log('input is here')
              store.dispatch({ type: 'activeInput', value: false });
            }
          }
        }}>
          <Header />
          <Route exact path="/">
            {this.props.login && this.props.login !== 'Guest' && this.props.redirect ? <Redirect to="/chat" /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/chat">
            {this.props.login && this.props.login !== 'Guest' && this.props.redirect ? <Redirect to="/chat" /> : <Redirect to="/" />}
          </Route>
          <Route path="/" exact component={MainPage} />
          <Route path="/chat" component={Chat} />
          <Footer />
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