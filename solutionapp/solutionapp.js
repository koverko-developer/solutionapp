const puppeteer = require('puppeteer');
const BASE_URL = 'https://www.instagram.com/';
var sleep = require('sleep');
const useProxy = require('puppeteer-page-proxy');
const fs = require('fs');
var request = require('sync-request');
var FormData = require('form-data');
const path = require('path');
var robot = require("robotjs");
const random = require('random')

const solutionapp = {
      browser : null,
      page : null,
      initialize: async () => {
      try{
        solutionapp.browser = await puppeteer.launch({
          //executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
          headless : false,
          slowMo:10,
          args: [
            '--proxy-server=176.119.142.45:17490',
            //'--incognito',
            //'--proxy-auth=kowerkodeveloper:I2g1OrN',
            '--disable-metrics-system',
            '--disable-dev-tools',
            '--disable-logging',
            '--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
          ],
        });

      }catch(e){
        console.log('error in initialize ' + e);
      }
      },
      start: async () => {
        let pages = await solutionapp.browser.pages();
        //pages[0].bringToFront();
        if(pages.length > 4) {
          pages[0].close();
          pages[1].close();

        }
        //https://www.google.com/search?sxsrf=ALeKk00O7Lf2sFht6g4Fco64fWn1G6dWqQ:1597570749594&ei=vf44X97mI42asAe27IfwAw&q=site:https://solutionapp.ru&oq=site:https://solutionapp.ru&gs_lcp=CgZwc3ktYWIQA1AAWABgsNAXaANwAHgAgAEAiAEAkgEAmAEAoAECqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwieuaHotp_rAhUNDewKHTb2AT4Q4dUDCAw&uact=5
        const page = await solutionapp.browser.newPage();
        await page.authenticate({ username : "kowerkodeveloper_gmail_com", password : "KXcVV5M1" });
        try{
          try{
            await page.goto('http://yo-pvt-14.airsocks.in/api/v3/changer_channels/channel_1?session=vwk8uo9uqz5rwzw8wwvs0sy7fwkrj3vv');
          }catch(e){
            await page.goto('http://yo-pvt-14.airsocks.in/api/v3/changer_channels/channel_1?session=vwk8uo9uqz5rwzw8wwvs0sy7fwkrj3vv');
          }
          try{
            await page.goto('http://2ip.ru');
          }catch(e){
            solutionapp.start();
          }
          try{
            await page.goto('https://www.google.com/search?q=site:https://solutionapp.ru&oq=site:https://solutionapp.ru');
          }catch(e){
            await page.goto('https://www.google.com/search?q=site:https://solutionapp.ru&oq=site:https://solutionapp.ru');
          }
          let list = await page.evaluate(() =>
                     Array.from(document.querySelectorAll('.C8nzq'),
                     e => e.href));
          console.log(list);
          let random_href = random.int(0, list.length - 2);
          let href = list[random_href];
          await page.click('a[href="' + href + '"]');
          await page.waitFor(30000)
          solutionapp.start();
          await page.waitFor(30000)
          await page.bringToFront();
          await page.click('a[id="link1"]');
          let pages = await solutionapp.browser.pages();
          pages[pages.length-1].bringToFront();
        }catch(e){
          console.log(e);
          //await solutionapp.browser.close();
          solutionapp.start();
        }
      },
  }

  async function autoScroll(page){
      await page.evaluate(async () => {
          await new Promise((resolve, reject) => {
              var totalHeight = 0;
              var distance = 100;
              var timer = setInterval(() => {
                  var scrollHeight = document.body.scrollHeight;
                  window.scrollBy(0, distance);
                  totalHeight += distance;

                  if(totalHeight >= scrollHeight){
                      clearInterval(timer);
                      resolve();
                  }
              }, 100);
          });
      });
  }

module.exports = solutionapp;
