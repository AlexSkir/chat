import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import theme from 'theme/theme';

export default function MyIconButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <IconButton
        variant="contained"
        color={props.theme}
        style={{ outline: 'none' }}
        onClick={props.onClickHandler}
      >
        {props.icon}
      </IconButton>
    </ThemeProvider>
  );
}

MyIconButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
};
