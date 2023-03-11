import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import EmojiPicker from 'emojione-picker';
import 'emojione-picker/css/picker.css';
import { makeEmojiFromUnicode } from 'components/functions';
import 'components/ChatInput/chatInput.scss';
import MyIconButton from 'components/buttons/iconButtons';
import Icon from '@material-ui/core/Icon';

class ChatInput extends Component {
  constructor() {
    super();
    this.state = {
      emoji: false,
      html: '',
      attachment: false
    };
    this.mounted = false;
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.setState(null);
    this.mounted = false;
  }

  showSmilesOnHover() {
    this.setState({ emoji: true });
  }

  hideSmilesOnMouseLeave() {
    this.setState({ emoji: false });
  }

  toggleAttachBlock() {
    if (this.state.attachment) {
      this.setState({ attachment: false });
    } else {
      this.setState({ attachment: true });
    }
  }

  handleChange = evt => {
    this.setState({ html: evt.target.value });
  };

  render() {
    return (
      <div className="row chat-page-form justify-content-center align-items-center">
        <div className="input-area row justify-content-center align-items-center">
          <div className="media-selector">
            <MyIconButton
              onClickHandler={() => this.toggleAttachBlock()}
              theme="secondary"
              icon={<Icon>attach_file</Icon>}
            />
            <div className={`media-selector-info ${this.state.attachment ? '' : 'hidden'}`}>
              Does not work yet
            </div>
          </div>
          <span
            id="inputChat"
            className="input-text-area row align-items-center"
            html={this.state.html}
            onChange={this.handleChange}
            contentEditable="true"
            aria-multiline="true"
            role="textbox"
            // role="button"
            tabIndex="-1"
            onClick={e => {
              if ($(e.target).is('img')) {
                var range = document.createRange();
                $(e.target).focus();
                range.selectNodeContents(e.target);
                range.collapse(true);
                range.setEndAfter(e.target);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                $("#inputChat").focus();
                return false;
              }
            }}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.which === 13 || e.keyCode === 13) {
                e.preventDefault();
                this.props.submitClickHandler();
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
                  id="emoji-box"
                  className="emoji-picker"
                  nonce="NONCE_GENERATED_WHEN_TRANSMITTING"
                  onChange={e => {
                    this.setState({ html: makeEmojiFromUnicode(e) });
                  }}
                />
              </div>
            </div>
            <div className="send-button">
              <MyIconButton
                onClickHandler={() => this.props.submitClickHandler()}
                theme="secondary"
                icon={<Icon>send</Icon>}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChatInput.propTypes = {
  submitClickHandler: PropTypes.func.isRequired
};

export default ChatInput;
