import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../components/views/Home';

const View = ({ viewType }) => (
  (viewType)
);

View.propTypes = {
  viewType: PropTypes.element.isRequired,
};

const viewList = {
  HOME: (<Home />),
};

const getVisibleView = (filter) => {
  const viewType = viewList[filter];
  return viewType;
};

const mapStateToProps = (state) => {
  const visibleView = getVisibleView(state.visibilityFilter);
  return {
    viewType: visibleView,
  };
};

const VisibleView = connect(
  mapStateToProps,
  null,
)(View);

export default VisibleView;
