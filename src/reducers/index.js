import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import config from './config';

const WebPortalApp = combineReducers({
  visibilityFilter,
  config,
});

export default WebPortalApp;
