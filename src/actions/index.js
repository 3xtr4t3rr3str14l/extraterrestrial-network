const actions = {
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
