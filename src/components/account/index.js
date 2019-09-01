import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';
import LogOut from '@material-ui/icons/PowerOff';
import EditIcon from '@material-ui/icons/Edit';
import theme from 'theme/theme';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: `1px solid ${theme.palette.secondary.light}`,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.dark,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.primary.contrastText
      }
    }
  }
}))(MenuItem);

export default function Account(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="secondary"
          onClick={handleClick}
          style={{ outline: 'none' }}
        >
          {props.name}
          <ArrowDropDownIcon style={{ marginRight: '-10px' }} />
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem
            onClick={() => {
              setAnchorEl(null);
              props.editNameHandler();
            }}
          >
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Change Name" />
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => {
              setAnchorEl(null);
            }}
          >
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <Link to="/chat" className="join-chat-link">
              <ListItemText primary="Join Chat" />
            </Link>
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => {
              setAnchorEl(null);
              props.logOutHandler();
            }}
          >
            <ListItemIcon>
              <LogOut />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </StyledMenuItem>
        </StyledMenu>
      </ThemeProvider>
    </div>
  );
}

Account.propTypes = {
  name: PropTypes.string.isRequired,
  editNameHandler: PropTypes.func.isRequired,
  logOutHandler: PropTypes.func.isRequired
};
