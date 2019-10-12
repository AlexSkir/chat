import React from 'react';
import PropTypes from 'prop-types';
import MyIconButton from 'components/buttons/iconButtons';
import Icon from '@material-ui/core/Icon';
import SignalCellularConnectedNoInternet0BarIcon from '@material-ui/icons/SignalCellularConnectedNoInternet0Bar';

export default function Status(props) {
  return (
    <div className="status-block">
      {props.status === 1 ?
        <MyIconButton
          onClickHandler={() => undefined}
          theme="success"
          icon={<Icon>checkIcon</Icon>}
        /> :
        <><span>reconnecting</span>
          <MyIconButton
            onClickHandler={() => undefined}
            theme="fail"
            icon={<SignalCellularConnectedNoInternet0BarIcon />}
          />
        </>
      }
    </div>
  );
}

Status.propTypes = {
  status: PropTypes.number.isRequired
};
