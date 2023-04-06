/* eslint-disable consistent-return */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import chat from 'assets/chat.png';
import LoginButton from 'components/buttons/loginButton';
import LoginInput from 'components/buttons/loginInput';
import Account from 'components/account/account';
import store from 'store/store';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      active: false,
      isLoggedIn: false,
      error: false
    };
  }

  componentWillMount() {
    this.setState({
      name: this.props.login,
      isLoggedIn: this.props.login !== 'Guest'
    });
  }

  showInput() {
    if (this.state.active) {
      this.setState({ active: false });
      store.dispatch({ type: 'activeInput', value: false });
    } else {
      this.setState({ active: true });
      store.dispatch({ type: 'activeInput', value: true });
    }
  }

  inputOnChange() {
    const name = $('#inputLogin').val();
    if (name && name.length <= 20) {
      store.dispatch({ type: 'login', value: name });
      store.dispatch({ type: 'redirect', value: true });
      store.dispatch({ type: 'activeInput', value: false });
      this.setState({ active: false, isLoggedIn: true, name, error: false });
      return <Redirect to="/chat" />;
    }
    this.setState({ error: true });
    setTimeout(() => {
      if ($('.input-error') && !$('.input-error').hasClass('hidden')) {
        this.setState({ error: false });
      }
    }, 5000);
  }

  input() {
    if (this.props.activeInput) {
      return (
        <div id="changeNameInput" className="login-input-block">
          <LoginInput getInputLogin={e => this.inputOnChange(e)} />
        </div>
      );
    }
  }

  logOutOnClick() {
    store.dispatch({ type: 'login', value: 'Guest' });
    this.setState({ isLoggedIn: false });
  }

  accountButton() {
    if (this.state.isLoggedIn) {
      return (
        <Account
          name={this.state.name}
          editNameHandler={() => store.dispatch({ type: 'activeInput', value: true })}
          logOutHandler={() => this.logOutOnClick()}
        />
      );
    }
    return <LoginButton showInputOnClick={() => this.showInput()} />;
  }

  render() {
    return (
      <div className="row header justify-content-between align-items-center">
        <Link
          className="col-auto icon-block"
          to="/"
          onClick={() => {
            store.dispatch({ type: 'redirect', value: false });
          }}
        >
          <img className="header-img d-sm-block" src={chat} alt="" />
          <h5 className="icon-name">Awesome Chat</h5>
        </Link>
        <div className="col-auto account-button">{this.accountButton()}</div>
        <span className={`text-danger input-error ${this.state.error ? '' : 'hidden'}`}>
          Input name (max 20 symbols)
        </span>
        {this.input()}
      </div>
    );
  }
}

Header.propTypes = {
  login: PropTypes.string.isRequired,
  activeInput: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ login: state.login, activeInput: state.activeInput });
export default connect(mapStateToProps)(Header);
