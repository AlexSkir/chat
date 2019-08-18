import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import theme from 'theme/theme';

export default function LoginButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="secondary"
        style={{ outline: 'none' }}
        onClick={props.showInputOnClick}
      >
        Log In
      </Button>
    </ThemeProvider>
  );
}

LoginButton.propTypes = {
  showInputOnClick: PropTypes.func.isRequired
};
