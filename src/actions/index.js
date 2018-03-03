const actions = {
  requestLogin(creds) {
    return {
      type: 'LOGIN_REQUEST',
      isFetching: true,
      isAuthenticated: false,
      creds,
    };
  },
  receiveLogin(user) {
    return {
      type: 'LOGIN_SUCCESS',
      isFetching: false,
      isAuthenticated: true,
      id_token: user.id_token,
    };
  },
  loginError(message) {
    return {
      type: 'LOGIN_FAILURE',
      isFetching: false,
      isAuthenticated: false,
      message,
    };
  },
  requestLogout() {
    return {
      type: 'LOGOUT_REQUEST',
      isFetching: true,
      isAuthenticated: true,
    };
  },
  receiveLogout() {
    return {
      type: 'LOGOUT_SUCCESS',
      isFetching: false,
      isAuthenticated: false,
    };
  },
  loginUser(email, password) {
    return (dispatch, getState) => {
      const { config } = getState();
      const { adapter, service: { login } } = config;

      dispatch(actions.requestLogin({ email, password }));
      adapter.post(login, { email, password })
        .then((response) => {
          if (response.status !== 200) {
            alert(`${response.status} ERROR: ${response.statusText}`);
            dispatch(actions.loginError(response));
          }
          localStorage.setItem('id_token', response.data.token);
          dispatch(actions.receiveLogin(response));
        })
        .catch((error) => {
          alert(`Error: ${error.response.data ? error.response.data.message : 'Unknown error'}`);
        });
    };
  },
  logoutUser() {
    return (dispatch) => {
      dispatch(actions.requestLogout());
      localStorage.removeItem('id_token');
      dispatch(actions.receiveLogout());
    };
  },
  setVisibilityFilter(filter) {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter,
    };
  },
  setConfig(config) {
    return {
      type: 'SET_CONFIG',
      payload: config,
    };
  },
};

export default actions;
