import { createStore } from 'redux';

const initialState = {
  login: localStorage.getItem('login') || 'Guest',
  city: ''
};

function appState(state = initialState, action) {
  switch (action.type) {
    case 'login':
      localStorage.setItem('login', action.value);
      return Object.assign({}, state, {
        login: action.value
      });
    case 'city':
      return Object.assign({}, state, {
        city: action.value
      });
    default:
      return state;
  }
}

const store = createStore(appState);

export default store;
