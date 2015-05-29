// This file is required in mocha.opts
// This gives scripts access to initDOM and cleanDOM functions
// so that they can run tests that rely on the DOM

global.initDOM = function() {
  var jsdom = require('jsdom');
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = global.window.navigator;

  for (var i in require.cache) {
    // clean out requires so that react always uses the correct document
    // jsdom doesn't like this so spare it
    if (!/jsdom/.test(i)) {
      delete require.cache[i];
    }
  }
};

global.cleanDOM = function() {
  delete global.window;
  delete global.document;
  delete global.navigator;
};
