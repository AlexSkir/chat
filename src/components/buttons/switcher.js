import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import theme from 'theme/theme';
import { withStyles } from '@material-ui/core/styles';
import store from 'store/store';

const CustomSwitch = withStyles({
  switchBase: {
    color: theme.palette.golden.dark,
    '&$checked': {
      color: theme.palette.primary.main
    },
    '&$checked + $track': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  checked: {},
  track: {}
})(Switch);

export default function Switcher(props) {
  const [state, setState] = React.useState({
    checked: props.ignore
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    store.dispatch({ type: 'switch', value: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <CustomSwitch checked={state.checked} onChange={handleChange('checked')} value="checked" />
      }
      label="Notifications"
    />
  );
}
