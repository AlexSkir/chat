import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as serviceWorker from 'components/Notifications/serviceWorker';
import sound from 'assets/sound.mp3';
import $ from 'jquery';
import store from 'store/store';
import { findSmile } from 'components/functions/index';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ignore: false
    }
  }

  componentDidMount() {
    this.notifyMe();
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
          this.notificationSend(prop)
        }
      }
    }, 200);
    setTimeout(() => {
      if (this.props.switch !== undefined) {
        this.setState({ ignore: this.props.switch ? false : true });
        if (this.props.switch === true) {
          if (Notification.permission === 'denied' || Notification.permission === 'default') {
            this.notifyMe()
          }
        }
      }
    }, 200);
  }

  showSmile(text) {
    if (text.match(/:\w+:/gm)) {
      let message = '';
      let smile = '';
      let total = [];
      const smileText = findSmile(text);
      smileText.map((item, i) => {
        if (typeof item === 'object') {
          smile = `./smiles/${item[0]}.png`;
        } else {
          message += item;
        }
      })
      total.push(smile);
      total.push(message);
      return total;
    } else {
      return text;
    }
  }

  notificationSend(message) {
    const mes = this.showSmile(message) || '...';
    const now = Date.now();
    const title = `New message at Awesome Chat ${now}`;
    const body = `Message: ${typeof mes === 'object' ? mes[1] : mes}`;
    const tag = now;
    const icon = 'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png';
    const options = {
      tag: tag,
      body: body,
      icon: icon,
      lang: 'en',
      dir: 'ltr',
      sound: sound,
      image: typeof mes === 'object' ? mes[0] : ''
    }
    this.setState({
      title: title,
      options: options
    });
    if ('Notification' in window && document.visibilityState !== 'visible') {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        Notification.requestPermission((result) => {
          if (result === 'granted') {
            navigator.serviceWorker.ready.then((registration) => {
              registration.showNotification(this.state.title, options);
            }).catch((err) => global.console.log(err));
          }
        });
      } else {
        this.notification = new Notification(this.state.title, options);
        this.notification.onclick = (event) => {
          event.preventDefault();
          window.focus();
          this.notification.close();
          store.dispatch({ type: 'redirect', value: true });
        };
        setTimeout(() => {
          this.notification.close();
        }, 2000);
      }
      setTimeout(() => {
        this.playSound();
      }, 500);
    }
  }

  notifyMe() {
    serviceWorker.register();
    if (!('Notification' in window)) {
      global.alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted' || Notification.permission === 'default') {
      Notification.requestPermission((permission) => {
        if (permission === 'granted') {
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification('notification permissions have been granted');
          }).catch((err) => global.console.log(err));
        }
      });
    } else if (Notification.permission === 'denied' && this.props.switch === true) {
      global.alert(`You blocked notification request :( 
    If you want to receive notifications you should unblock it in the browser settings`)
      store.dispatch({ type: 'switch', value: false });
    }
  }

  playSound() {
    if (Notification.permission === 'granted') {
      $('#sound').trigger('play');
    }
  }

  render() {
    return (
      <audio id='sound' preload='auto'>
        <source src={sound} type='audio/mpeg' />
        <embed hidden={true} autostart='false' loop={false} src={sound} />
      </audio>
    );
  }
}

Notifications.propTypes = {
  newMessage: PropTypes.string.isRequired,
  switch: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

const mapStateToProps = state => ({ newMessage: state.newMessage, switch: state.switch });
export default connect(mapStateToProps)(Notifications);