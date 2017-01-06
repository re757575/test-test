import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

module.exports = () => {
  const jsdom = require('jsdom').jsdom; // eslint-disable-line global-require

  global.document = jsdom('');
  global.window = document.defaultView;
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      global[property] = document.defaultView[property];
    }
  });

  global.navigator = {
    userAgent: 'node.js'
  };
};
