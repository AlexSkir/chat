import React from 'react';
import PropTypes from 'prop-types';
import 'components/chatItems/chatItems.scss';
import { getDate } from 'components/functions';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme/theme';

function TextChatItem(props) {
  const login = props.login;
  const messagePack = props.messagePack;
  if (messagePack.from === login) {
    return (
      <ThemeProvider theme={theme}>
        <div className="row chat-page-item justify-content-end">
          <div className="my-message">
            <div className="col-auto message-wrapper my-message-wrapper">
              <div className="col-auto chat-item-from">{messagePack.from}</div>
              <div className="col-auto chat-item-message">{messagePack.message}</div>
              <div className="col-auto chat-item-date">{getDate(messagePack.time)}</div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="row chat-page-item justify-content-start">
        <div className="their-message">
          <div className="col-auto message-wrapper their-message-wrapper">
            <div className="col-auto chat-item-from">{messagePack.from}</div>
            <div className="w-100" />
            <div className="col-auto chat-item-message">{messagePack.message}</div>
            <div className="w-100" />
            <div className="col-auto chat-item-date">{getDate(messagePack.time)}</div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

TextChatItem.propTypes = {
  login: PropTypes.string.isRequired,
  messagePack: PropTypes.instanceOf(Object).isRequired
};

export default TextChatItem;
