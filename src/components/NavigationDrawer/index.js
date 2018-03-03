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
          primaryText="NavDrawer Item 1"
          onClick={() => alert('define an action for this placeholder')}
        />
        <ListItem
          key={uuid()}
          value={2}
          primaryText="NavDrawer Item 2"
          nestedItems={[
            <ListItem
              key={uuid()}
              value={3}
              primaryText="Nested Item 1"
              onClick={() => alert('define an action for this placeholder')}
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
