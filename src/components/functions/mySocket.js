import BrowserWebSocket from 'browser-websocket';
import store from 'store/store';

// let messages = [];

export default function connectSocket() {
  // const ws = new BrowserWebSocket('wss://awesome-chat-ws.herokuapp.com/');
  const ws = new BrowserWebSocket('wss://wssproxy.herokuapp.com/');

  ws.on('open', () => {
    setTimeout(() => {
      console.log('open', ws.ws.readyState);
      store.dispatch({ type: 'status', value: ws.ws.readyState });
    }, 300);
  });
  ws.on('close', () => {
    console.log('connection closed', ws.ws.readyState, 'reconnecting');
    store.dispatch({ type: 'status', value: ws.ws.readyState });
    ws.reconnect();
  })
  ws.on('message', event => {
    const mes = JSON.parse(event.data).splice(0, 100).reverse();
    if (mes.length === 1) {
      const newMes = `${mes[0].from}: ${mes[0].message}`;
      // messages.push(mes[0])
      store.dispatch({ type: 'newMessage', value: newMes });
      // store.dispatch({ type: 'messages', value: mes });
      // } else {
      //   if (messages.length === 0) {
      //     messages = mes;
      //     store.dispatch({ type: 'messages', value: mes });
      //   }
    }

    store.dispatch({ type: 'messages', value: mes }); //delete

    const div = document.getElementById('messages-area');
    if (div) {
      setTimeout(() => {
        div.scrollTo({ top: div.scrollHeight - div.clientHeight, behavior: 'smooth' });
      }, 50);
    }
  });
  return ws;
}