import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyMuiTheme from './MuiTheme';
import NavigationDrawer from './components/NavigationDrawer';
import VisibleView from './containers/VisibleView';
import actions from './actions';
import TopBar from './components/TopBar';

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
      <MuiThemeProvider muiTheme={MyMuiTheme}>
        <div>
          <div>
            <NavigationDrawer />
            <TopBar />
            <div style={{
              paddingLeft: '350px',
            }}
            >
              <VisibleView />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  setConfig: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setConfig: (config) => {
    dispatch(actions.setConfig(config));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
