/* eslint-disable no-cond-assign */
/* eslint-disable no-bitwise */
import $ from 'jquery';

export function makeRandomId() {
  const j = [];
  let x;
  for (let i = 0; i < 20; i += 1) {
    x = [
      [48, 57],
      [65, 90],
      [97, 122]
    ][(Math.random() * 3) >> 0];
    j[i] = String.fromCharCode(((Math.random() * (x[1] - x[0] + 1)) >> 0) + x[0]);
  }
  return j.join('');
}

export function getDate(time) {
  const data = new Date(time);
  let day = data.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = data.getMonth() + 1;
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
  return `./smiles/${code}.png`;
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
  while (replaced.indexOf('&nbsp;') !== -1) {
    const str = replaced.replace('&nbsp;', ' ');
    replaced = str;
  }
  while (replaced.indexOf('<br>') !== -1) {
    const str = replaced.replace('<br>', '').replace('</br>', '');
    replaced = str;
  }
  while (replaced.indexOf('<span') !== -1) {
    const str = replaced.replace('<span style="font-size: 1rem;">', '').replace('</span>', '');
    replaced = str;
  }
  while (replaced.indexOf('./smiles/') !== -1) {
    const str = replaced
      .replace('<img', '')
      .replace('height="32"', '')
      .replace('width="32"', '')
      .replace('src="./smiles/', ':')
      .replace('.png"', ':')
      .replace('>', '');
    replaced = str;
  }

  return replaced;
}

function pasteHtmlAtCaret(html) {
  let sel;
  let range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      const el = document.createElement('div');
      el.innerHTML = html;
      const frag = document.createDocumentFragment();
      const lastNode = frag.appendChild(html);
      range.insertNode(frag);
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(html);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  } else if (document.selection && document.selection.type !== 'Control') {
    document.selection.createRange().pasteHTML(html);
  }
}

export function makeEmojiFromUnicode(event) {
  const img = new Image(32, 32);
  img.src = makeSRC(event.unicode);
  $('#inputChat').focus();
  pasteHtmlAtCaret(img);
}
