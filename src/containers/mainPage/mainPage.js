import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from 'store/store';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      inputActive: false
    };
  }

  onClickHandler(e) {
    if (this.props.login === 'Guest') {
      if (this.state.inputActive === false) {
        store.dispatch({ type: 'activeInput', value: true });
        this.setState({ inputActive: true });
        e.preventDefault();
      } else {
        store.dispatch({ type: 'activeInput', value: false });
        this.setState({ inputActive: false });
        e.preventDefault();
      }
    } else {
      store.dispatch({ type: 'activeInput', value: false });
      store.dispatch({ type: 'redirect', value: true });
    }
  }

  render() {
    return (
      <div
        className="row justify-content-center align-items-center mainPage"
        onClick={() =>
          this.state.inputActive ? store.dispatch({ type: 'activeInput', value: false }) : null
        }
        role="button"
        onKeyPress={undefined}
        tabIndex="-1"
      >
        <Link to="/chat" onClick={e => this.onClickHandler(e)}>
          <div className="smile-text text-monospace text-uppercase">
            <div className="circle" />
            <div className="circle-blink">
              <div className="shadow" />
              <div className="blinked" />
            </div>
            <span className="char1">J</span>
            <span className="char2">o</span>
            <span className="char3">i</span>
            <span className="char4">n</span>
            <span className="char5" />
            <span className="char6">o</span>
            <span className="char7">u</span>
            <span className="char8">r</span>
            <span className="char9" />
            <span className="char10">a</span>
            <span className="char11">w</span>
            <span className="char12">e</span>
            <span className="char13">s</span>
            <span className="char14">o</span>
            <span className="char15">m</span>
            <span className="char16">e</span>
            <span className="char17" />
            <span className="char18">c</span>
            <span className="char19">h</span>
            <span className="char20">a</span>
            <span className="char21">t</span>
          </div>
        </Link>
      </div>
    );
  }
}

MainPage.propTypes = {
  login: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps)(MainPage);
