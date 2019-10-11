/* eslint-disable consistent-return */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './header.scss';
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
    if (this.props.login !== 'Guest') {
      this.setState({ name: this.props.login, isLoggedIn: true });
    }
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
      store.dispatch({ type: 'activeInput', value: false });
      this.setState({ active: false, isLoggedIn: true, name, error: false });
    } else {
      this.setState({ error: true });
    }
  }

  input() {
    if (this.props.activeInput) {
      return <LoginInput getInputLogin={e => this.inputOnChange(e)} />;
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
        <Link className="col-auto icon-block" to="/">
          <img className="header-img d-none d-sm-block" src={chat} alt="" />
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
