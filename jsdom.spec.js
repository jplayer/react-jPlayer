import jsdom from 'jsdom';

const { window } = new jsdom.JSDOM('', { url: 'http://localhost/' });

Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = window[property];
  }
});
