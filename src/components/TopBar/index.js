import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import actions from '../../actions';

const TopBar = props => (
  <div
    style={{
      paddingBottom: '50px',
      paddingTop: '12px',
      paddingRight: '12px',
    }}
  >
    <RaisedButton
      target="_blank"
      label="Logout"
      primary
      icon={<PowerSettingsNew />}
      onClick={() => { props.logoutUser(); }}
      style={{
        float: 'right',
        boxShadow: 'none',
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(actions.logoutUser());
  },
});

TopBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(TopBar);
