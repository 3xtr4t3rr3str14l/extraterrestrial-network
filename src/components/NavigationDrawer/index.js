import uuid from 'uuid/v4';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {
  List, ListItem, makeSelectable,
} from 'material-ui/List';
import actions from '../../actions';

// to handle the selected list item
let SelectableList = makeSelectable(List);
function wrapState(ComposedComponent) {
  return class wrapStateList extends React.Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const NavigationDrawer = (props) => {
  this.state = {
    open: true,
  };
  this.appBarStyle = {
    boxShadow: 'none',
  };
  return (
    <Drawer
      open={this.state.open}
    >
      <AppBar
        onClick={() => props.onClick('HOME')}
      />
      <SelectableList>
        <ListItem
          key={uuid()}
          value={1}
          primaryText="Programming"
          nestedItems={[
            <ListItem
              key={uuid()}
              value={2}
              primaryText="Game"
              onClick={() => props.onClick('GAME')}
            />,
            <ListItem
              key={uuid()}
              value={3}
              primaryText="Github"
              onClick={() => window.open('https://github.com/3xtr4t3rr3str14l', '_blank')}
            />,
          ]}
        />
        <ListItem
          key={uuid()}
          value={4}
          primaryText="Music"
          nestedItems={[
            <ListItem
              key={uuid()}
              value={5}
              primaryText="seres"
              // onClick={() => props.onClick('MUSIC_SERES')}
              onClick={() => window.open('https://somoseres.bandcamp.com', '_blank')}
            />,
            <ListItem
              key={uuid()}
              value={6}
              primaryText="Starfruit"
              // onClick={() => props.onClick('MUSIC_STARFRUIT')}
              onClick={() => window.open('https://starfruit.bandcamp.com', '_blank')}
            />,
            <ListItem
              key={uuid()}
              value={7}
              primaryText="K0m0d0tr0n"
              onClick={() => window.open('https://soundcloud.com/k0m0d0tr0n', '_blank')}
            />,
            <ListItem
              key={uuid()}
              value={8}
              primaryText="Black Wolf Nightmare"
              onClick={() => window.open('https://blackwolfnightmare.bandcamp.com', '_blank')}
            />,
            <ListItem
              key={uuid()}
              value={9}
              primaryText="The Royal Academia Cordofonica Ensemble"
              onClick={() => window.open('https://soundcloud.com/alfonso-callejas/royal-academia-cordofonica-in-the-key-of-seafood', '_blank')}
            />,
          ]}
        />
      </SelectableList>
    </Drawer>
  );
};

NavigationDrawer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onClick: (filter) => {
    dispatch(actions.setVisibilityFilter(filter));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NavigationDrawer);
