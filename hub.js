const puppeteer = require('puppeteer');
const proxyLogin = 'https://kowerkodeveloper:I2g1OrN@'
const proxyPort = ':65233'
var sleep = require('sleep');
const useProxy = require('puppeteer-page-proxy');
const random = require('random')
//await useProxy(request, 'socks4://127.0.0.1:1080');


const hub = {
      browser : null,
      page : null,

      initialize: async () => {
      try{
        hub.browser = await puppeteer.launch({
          //executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
          headless : false,
          args: [
            '--proxy-server=176.119.142.45:17490',
          //'--proxy-server=176.119.142.33:10952',
            //'--incognito',
            //'--proxy-auth=kowerkodeveloper9112:c71070',
            //'--proxy-auth=zheka_kot12_mail_ru:Q9NDyvXJ',
            '--disable-metrics-system',
            '--disable-dev-tools',
            '--disable-logging',
            //'--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
          ],
        });

        //console.log();
      }catch(e){
        console.log('error in initialize ' + e);
      }
    },
    load: async () => {
      const page = await hub.browser.newPage();
      await useProxy(page, 'socks5://kowerkodeveloper9112:c71070@176.119.142.33:10952');
      try{
        await page.goto('node-ru-30.astroproxy.com:10951/api/changeIP?apiToken=7016e2705e01e7e0');
        await page.waitFor(1000);
      }catch(e){

      }

      try{
        await page.goto('https://2ip.ru');
        await page.waitFor(1000);
      }catch(e){

      }
      try{
        await page.goto('http://solutionapp.ru/');
        await page.waitFor(20000);
      }catch(e){

      }

      // try{
      //   await page.goto('https://www.instagram.com/spt_admin/');
      // }catch(e){
      //   console.log(e);
      // }
      // await page.waitFor('a[page_id="profilePage"]')
      // await page.click('a[page_id="profilePage"]')
      //hub.load1();

      let pages = await hub.browser.pages();
      if(pages.length > 6) {
        pages[0].close();
        pages[1].close();
      }
      await autoScroll(page);

      //await page.waitFor(100000);

      hub.load();

    },
    load1: async () => {
      const page = await hub.browser.newPage();
      //await useProxy(page, 'socks5://kowerkodeveloper_gmail_com:KXcVV5M1@176.119.142.45:17491');
      await page.authenticate({ username : "kowerkodeveloper_gmail_com", password : "KXcVV5M1" });
      try{
        await page.goto('http://yo-pvt-14.airsocks.in/api/v3/changer_channels/channel_1?session=vwk8uo9uqz5rwzw8wwvs0sy7fwkrj3vv');
        await page.waitFor(10000);
      }catch(e){
        console.log(e);
      }

      try{
        await page.goto('https://2ip.ru');
        await page.waitFor(1000);
      }catch(e){

      }
      // try{
      //   await page.goto('http://solutionapp.ru/');
      //   await page.waitFor(15000);
      // }catch(e){
      //
      // }
      try{
        await page.goto('https://www.instagram.com/spt_admin/');
      }catch(e){
        console.log(e);
      }
      await page.waitFor('a[page_id="profilePage"]')
      await page.click('a[page_id="profilePage"]')
      await page.waitFor(15000);
      let pages = await hub.browser.pages();
      if(pages.length > 10) {
        pages[0].close();
        pages[1].close();
      }
      await autoScroll(page);

      await page.waitFor(35000);

      hub.load1();

    },
    reg: async () => {
      const page = await hub.browser.newPage();
      await useProxy(page, 'socks5://kowerkodeveloper9112:c71070@176.119.142.33:10952');
      try{
        await page.goto('node-ru-30.astroproxy.com:10951/api/changeIP?apiToken=7016e2705e01e7e0');
        await page.waitFor(1000);
      }catch(e){

      }
      await page.goto('https://account.mail.ru/signup?from=main&rf=auth.mail.ru');
    },

    google: async () => {
      const page = await hub.browser.newPage();
      //await useProxy(page, 'socks5://kowerkodeveloper_gmail_com:KXcVV5M1@176.119.142.45:17491');
      await page.authenticate({ username : "kowerkodeveloper_gmail_com", password : "KXcVV5M1" });
      try{
        await page.goto('http://yo-pvt-14.airsocks.in/api/v3/changer_channels/channel_1?session=vwk8uo9uqz5rwzw8wwvs0sy7fwkrj3vv');
        await page.waitFor(10000);
      }catch(e){
        console.log(e);
      }

      try{
        await page.goto('https://2ip.ru');
        await page.waitFor(1000);
      }catch(e){

      }
      // try{
      //   await page.goto('http://solutionapp.ru/');
      //   await page.waitFor(15000);
      // }catch(e){
      //
      // }
      try{
        await page.goto('https://www.google.ru/search?newwindow=1&ei=tachX9aKK9bZrgT9kb2IAg&q=site%3Ahttps%3A%2F%2Fsolutionapp.ru');

        await page.waitFor(2000);
      }catch(e){
        console.log(e);
      }
      await page.waitFor('div[class = "rc"]');
      await page.click('div[class = "rc"]');
      await page.waitFor(15000);
      let pages = await hub.browser.pages();
      if(pages.length > 10) {
        pages[0].close();
        pages[1].close();
      }
      await autoScroll(page);

      await page.waitFor(35000);

      hub.google();
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
module.exports = hub;
