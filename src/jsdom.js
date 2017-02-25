import jsdom from 'jsdom';

const document = jsdom.jsdom();
const window = document.defaultView;

Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = window[property];
  }
});
