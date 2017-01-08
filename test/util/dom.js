import jsdom from 'jsdom';

// setup the simplest document possible
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

// get the window object out of the document
const win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
const propagateToGlobal = (window) => {
  Object.keys(window).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(window, key) && !(key in global)) {
      global[key] = window[key];
    }
  });
};

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);
