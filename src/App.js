import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiTheme from './MuiTheme';
import NavigationDrawer from './components/NavigationDrawer';
import VisibleView from './containers/VisibleView';
import actions from './actions';
import TopBar from './components/TopBar';
// import LoginView from './components/views/LoginView';

class App extends React.Component {
  componentWillMount() {
    const config = {
      version: '1.0.0',
      // url: 'https://aliwuebalwjcbalwkjfdaslkh.com/',
      // service: {
      //   login: '',
      // },
    };
    this.props.setConfig(config);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
        <div>
          {
            // {!this.props.isAuthenticated &&
            //   <LoginView />
            // }
            // {this.props.isAuthenticated &&
          }
          <div>
            <NavigationDrawer />
            <TopBar />
            <VisibleView />
          </div>
          {
            // }
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  setConfig: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool.isRequired,
};

// function mapStateToProps(state) {
//   const { auth } = state;
//   const { isAuthenticated, errorMessage } = auth;
//
//   return {
//     isAuthenticated,
//     errorMessage,
//   };
// }

const mapDispatchToProps = dispatch => ({
  setConfig: (config) => {
    dispatch(actions.setConfig(config));
  },
});

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(App);
