// the setup
const { JSDOM } = require("jsdom");

const jsdom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);