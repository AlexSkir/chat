import React from 'react';
import { Link } from 'react-router-dom';
import 'containers/mainPage/MainPage.scss';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      authed: false
    };
  }

  onClickHandler(e) {
    if (!this.state.authed) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center mainPage">
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

export default MainPage;
