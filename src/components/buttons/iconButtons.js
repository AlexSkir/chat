import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import theme from 'theme/theme';

export default function MyIconButton(props) {
  const useStyles = makeStyles(() => ({
    root: {
      position: 'absolute'
    },
    iconHover: {
      color: theme.palette[props.theme].main,
      '&:hover': {
        color: theme.palette[props.theme].light
      },
      '&:active': {
        color: theme.palette[props.theme].dark
      }
    }
  }));
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <IconButton
        variant="contained"
        className={classes.iconHover}
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
