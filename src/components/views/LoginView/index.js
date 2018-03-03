import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import actions from '../../../actions';

class LoginView extends React.Component {
  componentWillMount() {
    console.log('login mounted');
  }

  handleEmailChange = (event) => {
    const state = { ...this.state };
    state.userEmail = event.target.value;
    this.setState(state);
  }

  handlePasswordChange = (event) => {
    const state = { ...this.state };
    state.userPassword = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: 'rgb(0, 188, 212)',
          }}
        />
        <div>
          <TextField
            hintText=""
            floatingLabelText="Email"
            onChange={this.handleEmailChange}
          /><br />
        </div>
        <div>
          <TextField
            hintText=""
            type="password"
            floatingLabelText="Password"
            onChange={this.handlePasswordChange}
          /><br />
        </div>
        <br />
        <FlatButton
          type="submit"
          label="Sign In"
          onClick={() => {
            if (this.state &&
                this.state.userEmail &&
                this.state.userPassword) {
              this.props.loginUser(this.state.userEmail, this.state.userPassword);
            } else {
              alert('Please enter a username and password.');
            }
          }}
        />
        <br />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (username, password) => {
    dispatch(actions.loginUser(username, password));
  },
});

LoginView.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginView);
