import React from 'react';
import 'components/mainPageIcon/mainPageIcon.css';

class MainPageIcon extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center mainPage">
        <img src={bg} alt="" />
      </div>
    );
  }
}

export default MainPage;
