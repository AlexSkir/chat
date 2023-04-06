/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { getDate, findSmile, makeSRC } from 'components/functions';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme/theme';

function SmileChatItem(props) {
  const login = props.login;
  const messagePack = props.messagePack;
  if (messagePack.from === login) {
    return (
      <ThemeProvider theme={theme}>
        <div className="row chat-page-item justify-content-end">
          <div className="my-message">
            <div className="col-auto message-wrapper my-message-wrapper">
              <div className="col-auto chat-item-from">{messagePack.from}</div>
              <div className="col-auto chat-item-message">
                {findSmile(messagePack.message).map((mes, m) => {
                  if (typeof mes === 'string') {
                    return <span key={m}>{mes}</span>;
                  }
                  return <img key={m} width="32" height="32" src={makeSRC(mes[0])} alt={mes[0]} />;
                })}
              </div>
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
            <div className="col-auto chat-item-message">
              {findSmile(messagePack.message).map((mes, m) => {
                if (typeof mes === 'string') {
                  return <span key={m}>{mes}</span>;
                }
                return <img key={m} width="32" height="32" src={makeSRC(mes[0])} alt={mes[0]} />;
              })}
            </div>
            <div className="col-auto chat-item-date">{getDate(messagePack.time)}</div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

SmileChatItem.propTypes = {
  login: PropTypes.string.isRequired,
  messagePack: PropTypes.instanceOf(Object).isRequired
};

export default SmileChatItem;
