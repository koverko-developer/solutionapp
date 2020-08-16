const puppeteer = require('puppeteer');
const proxyLogin = 'https://kowerkodeveloper:I2g1OrN@'
const proxyPort = ':65233'
var sleep = require('sleep');
const hub = require('./hub');

(async () => {
  await hub.initialize();
  //await hub.load();
  //await hub.load1();
  await hub.google();
  //await hub.reg();
})()
