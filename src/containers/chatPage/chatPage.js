/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import EmojiPicker from 'emojione-picker';
import 'emojione-picker/css/picker.css';
import $ from 'jquery';
import store from 'store/store';
import { getDate, makeSRC, findSmile, replaceSmileWithUnicode } from 'components/functions';
import 'containers/chatPage/chatPage.css';
import MyIconButton from 'components/buttons/iconButtons';
import Icon from '@material-ui/core/Icon';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      name: '',
      status: 'disconnected',
      emoji: false
    };
    this.messages = [];
    this.ws = new WebSocket('ws://st-chat.shas.tel');
    this.mounted = false;
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentDidMount() {
    this.mounted = true;
    this.ws.onopen = () => {
      if (this.mounted) {
        this.setState({ status: 'connected' });
      }
    };
    this.ws.onmessage = event => {
      if (this.messages.length === 0) {
        const mes = JSON.parse(event.data);
        this.messages = mes.reverse();
      } else {
        this.messages.push(JSON.parse(event.data)[0]);
      }

      setTimeout(() => {
        if (this.mounted) {
          this.setState({
            name: store.getState().login,
            messages: this.messages
          });
        }
      }, 500);
    };
  }

  componentWillUnmount() {
    this.setState(null);
    this.mounted = false;
    this.messages = [];
  }

  submitClickHandler() {
    this.sendMessage(replaceSmileWithUnicode($('#inputChat').html()));
    $('#inputChat').text('');
  }

  sendMessage(text) {
    if (text) {
      const mess = {
        from: this.state.name,
        message: text
      };
      this.ws.send(JSON.stringify(mess));
    }
  }

  emojiHandler(e) {
    const img = new Image(32, 32);
    img.src = makeSRC(e.unicode);
    $(img).appendTo('#inputChat');
  }

  showSmilesOnHover() {
    this.setState({ emoji: true });
  }

  hideSmilesOnMouseLeave() {
    this.setState({ emoji: false });
  }

  render() {
    return (
      <div className="row chat-page justify-content-center align-items-center">
        <div className="row chat-page-messages">
          {this.state.messages.map((item, i) => {
            if (item.message.match(/:\w+:/gm)) {
              return (
                <div key={`${i}`} className="row chat-page-item align-items-center">
                  <span key={`${item.from}${i}`}>{item.from}</span>
                  {findSmile(item.message).map((mes, m) => {
                    if (typeof mes === 'string') {
                      return <span key={m}>{mes}</span>;
                    }
                    return (
                      <img key={m} width="32" height="32" src={makeSRC(mes[0])} alt={mes[0]} />
                    );
                  })}
                  <span key={`${item.id}${item.time}${i}`}>{getDate(item.time)}</span>
                </div>
              );
            }
            return (
              <div key={`${i}`} className="row chat-page-item align-items-center">
                <span key={`${item.from}${i}`}>{item.from}</span>
                <span key={`${item.id}${item.message}${i}`}>{item.message}</span>
                <span key={`${item.id}${item.time}${i}`}>{getDate(item.time)}</span>
              </div>
            );
          })}
        </div>
        <div className="row chat-page-form justify-content-center align-items-center">
          <span className="connect-status">
            {this.state.status ? this.state.status : 'disconnected'}
          </span>
          <div className="input-area row justify-content-center align-items-center">
            <div className="media-selector">
              <MyIconButton
                onClickHandler={() => console.log('not ready yet')}
                theme="secondary"
                icon={<Icon>attach_file</Icon>}
              />
            </div>
            <div
              id="inputChat"
              className="input-text-area row align-items-center"
              contentEditable="true"
              role="button"
              onFocus={undefined}
              tabIndex="-1"
              onKeyPress={e => {
                if (e.key === 'Enter' || e.which === 13 || e.keyCode === 13) {
                  e.preventDefault();
                  this.submitClickHandler();
                }
              }}
            />
            <div className="chat-buttons">
              <div
                id="emoji-block"
                className="emoji-block"
                onMouseEnter={() => this.showSmilesOnHover()}
                onMouseLeave={() => this.hideSmilesOnMouseLeave()}
              >
                <MyIconButton
                  onClickHandler={() => this.showSmilesOnHover()}
                  theme="secondary"
                  icon={<Icon>emoji_emotions</Icon>}
                />
                <div className={`${this.state.emoji ? 'smile-block' : 'hidden'}`}>
                  <EmojiPicker
                    className="emoji-picker"
                    nonce="NONCE_GENERATED_WHEN_TRANSMITTING"
                    onChange={e => this.emojiHandler(e)}
                  />
                </div>
              </div>
              <div className="send-button">
                <MyIconButton
                  onClickHandler={() => this.submitClickHandler()}
                  theme="secondary"
                  icon={<Icon>send</Icon>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
