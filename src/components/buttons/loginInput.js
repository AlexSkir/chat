import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import theme from 'theme/theme';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: theme.palette.primary.contrastText
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.secondary.dark
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.dark
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.dark
      }
    }
  }
})(TextField);

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute'
  },
  iconHover: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '5px',
    color: theme.palette.primary.dark,
    '&:hover': {
      color: theme.palette.secondary.light
    },
    '&:active': {
      color: theme.palette.secondary.dark
    }
  }
}));

export default function LoginInput(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form>
      <CssTextField
        id="inputLogin"
        label="Name"
        value={values.name}
        onChange={handleChange('name')}
        onKeyPress={e => {
          if (e.which === 13 || e.keyCode === 13 || e.key === 'enter') {
            props.getInputLogin();
          }
        }}
        margin="normal"
        variant="outlined"
        style={{
          backgroundColor: theme.palette.primary.light
        }}
      />
      <Icon className={classes.iconHover} onClick={props.getInputLogin}>
        send
      </Icon>
    </form>
  );
}

LoginInput.propTypes = {
  getInputLogin: PropTypes.func.isRequired
};
