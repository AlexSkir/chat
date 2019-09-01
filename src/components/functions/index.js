/* eslint-disable no-bitwise */

export function makeRandomId() {
  const j = [];
  let x;
  for (let i = 0; i < 20; i += 1) {
    x = [[48, 57], [65, 90], [97, 122]][(Math.random() * 3) >> 0];
    j[i] = String.fromCharCode(((Math.random() * (x[1] - x[0] + 1)) >> 0) + x[0]);
  }
  return j.join('');
}

export function getDate() {
  const data = new Date();
  let day = data.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = data.getMonth();
  if (month < 10) {
    month = `0${month}`;
  }
  let hour = data.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = data.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hour}:${minutes} ${day}/${month}/${data.getFullYear()}`;
}

export function makeSRC(code) {
  return `https://firebasestorage.googleapis.com/v0/b/awesome-chat-emoji.appspot.com/o/${code}.png?alt=media`;
}

export function findSmile(text) {
  let before = text;
  const after = [];
  while (before.match(/:\w+:/gm)) {
    const str = before.match(/:\w+:/gm)[0];
    const message = before.split(str);
    const unicode = str.split(':')[1];
    after.push(message[0]);
    after.push([unicode]);
    if (!message[1].match(/:\w+:/gm)) {
      after.push(message[1]);
      return after;
    }
    before = message[1];
  }
  return after;
}

export function replaceSmileWithUnicode(text) {
  let replaced = text;
  while (replaced.indexOf('.png?alt=media">') !== -1) {
    const str = replaced
      .replace(
        '<img width="32" height="32" src="https://firebasestorage.googleapis.com/v0/b/awesome-chat-emoji.appspot.com/o/',
        ':'
      )
      .replace('.png?alt=media">', ':');
    replaced = str;
  }
  while (replaced.indexOf('&nbsp;') !== -1) {
    const str = replaced.replace('&nbsp;', ' ');
    replaced = str;
  }
  return replaced;
}
