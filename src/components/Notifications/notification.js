import React from 'react';
import Notification from 'react-web-notification';
import $ from 'jquery';
import sound from 'assets/sound.mp3';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//allow react dev tools work
window.React = React;

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      activeWindow: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ignore: this.props.switch ? false : true });
    }, 100);
    $(window).blur(() => {
      this.setState({ activeWindow: false });
    })
    $(window).focus(() => {
      this.setState({ activeWindow: true });
    })
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      const prop = this.props.newMessage;
      const oldMes = localStorage.getItem('newMes');
      if (prop !== oldMes || oldMes === 'undefined') {
        this.setState({ newProp: prop })
        localStorage.setItem('newMes', prop)
        if (this.state.ignore === false) {
          $('#notif').click();
        }
      }
    }, 200);
    setTimeout(() => {
      if (this.props.switch !== undefined) {
        this.setState({ ignore: this.props.switch ? false : true });
      }
    }, 200);
  }

  handlePermissionGranted() {
    if (this.props.switch === true) {
      console.log('Permission Granted');
      this.setState({
        ignore: false
      });
    }
  }

  handlePermissionDenied() {
    if (this.props.switch === false) {
      console.log('Permission Denied');
      this.setState({
        ignore: true
      });
    }
  }
  handleNotSupported() {
    console.log('Web Notification not Supported');
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnClick(e, tag) {
    //console.log(e, 'Notification clicked tag:' + tag);
  }

  handleNotificationOnError(e, tag) {
    //console.log(e, 'Notification error tag:' + tag);
  }

  handleNotificationOnClose(e, tag) {
    //console.log(e, 'Notification closed tag:' + tag);
  }

  handleNotificationOnShow(e, tag) {
    setTimeout(() => {
      this.playSound();
    }, 500);
    //console.log(e, 'Notification shown tag:' + tag);
  }

  playSound() {
    $('#sound').trigger('play');
  }

  handleButtonClick() {
    if (this.state.ignore) {
      return;
    }
    const now = Date.now();

    const title = `New message at Awesome Chat ${now}`;
    const body = `Message: ${this.state.newProp || '...'}`;
    const tag = now;
    const icon = 'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png';
    const options = {
      tag: tag,
      body: body,
      icon: icon,
      lang: 'en',
      dir: 'ltr',
      sound: sound
    }
    this.setState({
      title: title,
      options: options
    });
  }

  handleButtonClick2() {
    this.props.swRegistration.getNotifications({}).then(function (notifications) {
      console.log(notifications);
    });
  }

  render() {
    return (
      <div>
        <button id="notif" style={{ display: 'none' }} onClick={this.handleButtonClick.bind(this)}>Notif!</button>
        {document.title === 'swExample' && <button onClick={this.handleButtonClick2.bind(this)}>swRegistration.getNotifications</button>}
        <Notification
          ignore={(this.state.ignore && this.state.activeWindow) || this.state.activeWindow}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={2000}
          title={this.state.title}
          options={this.state.options}
          swRegistration={this.props.swRegistration}
        />
        <audio id='sound' preload='auto'>
          <source src={sound} type='audio/mpeg' />
          <embed hidden={true} autostart='false' loop={false} src={sound} />
        </audio>
      </div>
    )
  }
};

Notifications.propTypes = {
  newMessage: PropTypes.string.isRequired,
  switch: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

const mapStateToProps = state => ({ newMessage: state.newMessage, switch: state.switch });
export default connect(mapStateToProps)(Notifications);