import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../components/views/Home';
import Game from '../components/views/Game';

const View = ({ viewType }) => (
  (viewType)
);

View.propTypes = {
  viewType: PropTypes.element.isRequired,
};

const viewList = {
  HOME: (<Home />),
  GAME: (<Game />),
  // MUSIC_SERES: (<iframe title="seres" width="90%" height="1000px" src="https://somoseres.bandcamp.com">iframe not supported</iframe>),
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
