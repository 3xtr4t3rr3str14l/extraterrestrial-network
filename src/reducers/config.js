import axios from 'axios';

export default (state = {}, action) => {
  let state2 = state;
  const { type, payload } = action;

  switch (type) {
    case 'SET_CONFIG': {
      const { url, service } = payload;
      state2 = {
        service,
        adapter: axios.create({
          baseURL: url,
          responseType: 'json',
        }),
      };
    }
      break;
    default:
  }
  return state2;
};
