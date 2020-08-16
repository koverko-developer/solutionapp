const chrome = require('chrome-cookies-secure');
const puppeteer = require('puppeteer');
const sqlite3 = require('sqlite3');
const path = require("path");
var db = new sqlite3.Database( path.resolve(__dirname, 'koverko_dev.db') );

const url = 'https://www.instagram.com/';

const getCookies = (callback) => {
    chrome.getCookies(url, 'puppeteer', function(err, cookies) {
        if (err) {
            console.log(err, 'error');
            return
        }
        console.log(cookies, 'cookies');
        callback(cookies);
    }, 'koverko_dev') // e.g. 'Profile 2'
}

getCookies(async (cookies) => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.setCookie(...cookies);
    await page.goto(url);
    await page.waitFor(1000);
    browser.close();
});
