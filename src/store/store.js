/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { createStore } from 'redux';

let switchOption;

if (
  JSON.parse(localStorage.getItem('switch')) === undefined ||
  JSON.parse(localStorage.getItem('switch')) === null
) {
  switchOption = true;
  localStorage.setItem('switch', true);
} else {
  switchOption = JSON.parse(localStorage.getItem('switch'));
}

const initialState = {
  login: localStorage.getItem('login') || 'Guest',
  messages: ['loading'],
  activeInput: false,
  status: 3,
  newMessage: localStorage.getItem('newMes') || 'new message!',
  switch: switchOption,
  redirect: true
};

const mesAll = [];

function appState(state = initialState, action) {
  switch (action.type) {
    case 'login':
      localStorage.setItem('login', action.value);
      return Object.assign({}, state, {
        login: action.value
      });
    case 'redirect':
      return Object.assign({}, state, {
        redirect: action.value
      });
    case 'switch':
      localStorage.setItem('switch', action.value);
      return Object.assign({}, state, {
        switch: action.value
      });
    case 'newMessage':
      return Object.assign({}, state, {
        newMessage: action.value
      });
    case 'messages':
      if (typeof action.value === 'object') {
        for (const message in action.value) {
          mesAll.push(action.value[message]);
        }
      }
      return Object.assign({}, state, {
        messages: [...mesAll]
      });
    case 'activeInput':
      return Object.assign({}, state, {
        activeInput: action.value
      });
    case 'status':
      return Object.assign({}, state, {
        status: action.value
      });
    default:
      return state;
  }
}

const store = createStore(appState);

export default store;
