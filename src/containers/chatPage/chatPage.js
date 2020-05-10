/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'emojione-picker/css/picker.css';
import $ from 'jquery';
import store from 'store/store';
import { replaceSmileWithUnicode } from 'components/functions';
import 'containers/chatPage/chatPage.scss';
import TextChatItem from 'components/chatItems/textChatItem';
import SmileChatItem from 'components/chatItems/smileChatItem';
import ChatInput from 'components/ChatInput/ChatInput';
import connectSocket from 'components/functions/mySocket';
import Switcher from 'components/buttons/switcher';
import Status from 'components/wsStatus/wsStatus';

//const ws = connectSocket();
class Chat extends Component {
  constructor() {
    super();
    this.state = {};
    this.mounted = false;
    this.name = store.getState().login;
    this.ws = connectSocket();
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentDidMount() {
    this.mounted = true;
    const div = document.getElementById('messages-area');
    setTimeout(() => {
      if (div) {
        div.scrollTo({ top: div.scrollHeight - div.clientHeight, behavior: 'instant' });
      }
    }, 1500);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  submitClickHandler() {
    const mess = {
      from: this.name,
      message: replaceSmileWithUnicode($('#inputChat').html())
    };
    this.ws.emit(JSON.stringify(mess));
    $('#inputChat').text('');
  }

  render() {
    return (
      <div
        className="row chat-page justify-content-center align-items-center"
        onClick={() => store.dispatch({ type: 'activeInput', value: false })}
        role="button"
        onKeyPress={undefined}
        tabIndex="-1"
      >
        <div className="switcher">
          <Switcher ignore={this.props.switch} />
          <Status status={this.props.status} />
        </div>
        <div className="row chat-page-messages">
          <div id="messages-area" className="messages-wrapper">
            {this.props.messages.map(item => {
              if (item && item.message) {
                if (item.message.match(/:\w+:/gm)) {
                  return <SmileChatItem key={item.id} login={this.name} messagePack={item} />;
                }
                return <TextChatItem key={item.id} login={this.name} messagePack={item} />;
              }
            })}
          </div>
        </div>
        <ChatInput submitClickHandler={() => {
          if (this.props.status === 1) {
            this.submitClickHandler();
          }
        }
        } />
      </div>
    );
  }
}

Chat.propTypes = {
  status: PropTypes.number.isRequired,
  messages: PropTypes.array.isRequired,
  switch: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

const mapStateToProps = state => ({ status: state.status, messages: state.messages, switch: state.switch });
export default connect(mapStateToProps)(Chat);
