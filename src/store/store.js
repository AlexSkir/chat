import { createStore } from 'redux';

const initialState = {
  login: localStorage.getItem('login') || 'Guest',
  messages: ['loading'],
  activeInput: false,
  status: 3,
  newMessage: localStorage.getItem('newMes') || 'new message!',
  switch: JSON.parse(localStorage.getItem('switch')) === undefined || 'null' ? true : JSON.parse(localStorage.getItem('switch'))
};

let mesAll = [];
let newMessage;

function appState(state = initialState, action) {
  switch (action.type) {
    case 'login':
      localStorage.setItem('login', action.value);
      return Object.assign({}, state, {
        login: action.value
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
      if (mesAll.length === 0) {
        mesAll = action.value;
      } else {
        mesAll.map(item => {
          if (
            item.id &&
            mesAll.every(allitems => allitems.id !== action.value[0].id)
          ) {
            newMessage = action.value[0];
            mesAll.push(newMessage);
            mesAll.slice(0, 100);
          } else if (!item.id) {
            console.log(item);
          }
        });
        return Object.assign({}, state, {
          messages: [...mesAll]
        });
      }
      return Object.assign({}, state, {
        messages: mesAll
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
