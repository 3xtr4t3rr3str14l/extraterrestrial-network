import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import config from './config';
import auth from './auth';

const WebPortalApp = combineReducers({
  visibilityFilter,
  config,
  auth,
});

export default WebPortalApp;
