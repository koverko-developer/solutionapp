const puppeteer = require('puppeteer');
const proxyLogin = 'https://kowerkodeveloper:I2g1OrN@'
const proxyPort = ':65233'
var sleep = require('sleep');
const sap = require('./solutionapp');

    (async () => {

    await sap.initialize();
    await sap.start();

    })()
