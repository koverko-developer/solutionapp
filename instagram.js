const puppeteer = require('puppeteer');
const BASE_URL = 'https://www.instagram.com/';
const sms = require('./sms');
const url = 'https://www.instagram.com/';
var sleep = require('sleep');
const fb = require('./fb');
const proxyLogin = 'https://kowerkodeveloper:I2g1OrN@'
const proxyPort = ':65233'
const useProxy = require('puppeteer-page-proxy');
const generator = require('./generator');

//{"name":{"name_ru":"Валентин","name_eng":"Valentin","name_kir":"Dfktynby"},"surname":{"name_ru":"Смирнов","name_eng":"Smirnov","name_kir":"Cvbhyjd"},"full_uname":"valentin_smirnov32","password":"s3d3bw0s45y5"}

const instagram = {
      browser : null,
      page : null,

      initialize: async (proxy) => {

      try{
        instagram.browser = await puppeteer.launch({
          //executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
          headless : false,
          args: [
            '--proxy-server=' + proxy + ':65233',
            //'--incognito',
            //'--proxy-auth=kowerkodeveloper:I2g1OrN',
            '--disable-metrics-system',
            '--disable-dev-tools',
            '--disable-logging',
            '--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
          ],
        });
        console.log(proxy);
      }catch(e){
        console.log('error in initialize ' + e);
      }
      },
      checkIp: async () => {
        var pageReg = await instagram.browser.newPage();
        await pageReg.goto('https://free.proxy-sale.com/my-ip/');
      },
      changeIp: async () => {
        var pageReg = await instagram.browser.newPage();

      },
      reg: async (phone, uname, password) => {
          let phone_to_input = phone['phone'];
          var pageReg = await instagram.browser.newPage();
          let ip = await generator.getRandomProxy();
          await useProxy(pageReg, proxyLogin + ip +proxyPort);
          console.log(proxyLogin + ip +proxyPort);
          await pageReg.goto('https://2ip.ru/');
          await sleep.sleep(3);
          await pageReg.goto(BASE_URL + 'accounts/signup/phone');

          try{
            await pageReg.waitFor('div._7UhW9');
            phone_to_input = phone_to_input.substring(phone_to_input.length - 10);
            const selectCountry = await pageReg.evaluate(() => {
               return document.querySelector('div._7UhW9').textContent;
            });
            console.log('textContent  ' + selectCountry);
            if(selectCountry === 'UA +380') {
              console.log('UA');
              await pageReg.click('div._7UhW9');
              await pageReg.waitFor('div[role="dialog"]');
              await pageReg.waitFor(2000);
              await pageReg.type('input[name="filter"]', "Russia");
              await pageReg.click('div.y2rAt');

            }
          }catch(e){
              console.log('no elements select country' + e);
          }
          console.log('phone = ' + phone_to_input);
          // const selectCountry = await pageReg.evaluate(() => {
          //    return document.querySelector('.sqdOP');
          // });
          // await pageReg.click('.sqdOP');
          //
          // await pageReg.waitFor('div[role="dialog"]');
          // await pageReg.waitFor(2000);
          await pageReg.waitFor('input[name="phone"]');
          // await pageReg.click('.OZ443')
          await pageReg.type('input[name="phone"]', phone_to_input);
          await pageReg.waitFor('button.cB_4K');
          await pageReg.click('button.cB_4K');
          await pageReg.waitFor('input[name="twofac"]');
          await sms.setStatus(phone['id_operation']);
          await pageReg.waitFor(10000);
          let code = "ERROR";
          do {
            code = await sms.getCode(phone['id_operation']);
            console.log(code);
            await pageReg.waitFor(10000);
          } while (code.includes('ERROR'));

          await pageReg.type('input[name="twofac"]', code);

          await pageReg.waitFor('button.cB_4K ');
          await pageReg.click('button.cB_4K ');

          await pageReg.waitFor('input[name="fullName"]');
          await pageReg.type('input[name="fullName"]', uname);
          await pageReg.type('input[name="password"]', password);

          await pageReg.waitFor('button.cB_4K ');
          await pageReg.click('button.cB_4K ');

          await pageReg.waitFor('span[aria-label="Birthday cupcake"]');

          await pageReg.select('select[title="Year:"]', '1991')
          await pageReg.select('select[title="Month:"]', '1')
          await pageReg.select('select[title="Day:"]', '15')

          await pageReg.waitFor('button.cB_4K ');
          await pageReg.click('button.cB_4K ');

          await pageReg.waitFor(2000);

          await pageReg.waitFor('button.cB_4K ');
          await pageReg.click('button.cB_4K ');

          await pageReg.waitFor('input[name="te;"]');

          await pageReg.waitFor('button.cB_4K ');
          await pageReg.click('button.cB_4K ');

          await sms.setReStatus(phone['id_operation']);

          await pageReg.waitFor('input[name="tel"]');

          let code2 = "ERROR";
          do {
            code2 = await sms.getCode(phone['id_operation']);
            console.log(code2);
            await pageReg.waitFor(10000);
          } while (code2.includes('ERROR'));

          await pageReg.type('input[name="tel"]', code2);

          await pageReg.click('.cB_4K');


          debugger;
      },

      login : async(username, password) => {
        //const context = await instagram.browser.createIncognitoBrowserContext();
        //var pageLogin = await context.newPage();
        const pageLogin = await instagram.browser.newPage();
        await pageLogin.authenticate({ username : "kowerkodeveloper", password : "I2g1OrN" });
        await pageLogin.goto('https://2ip.ru/');
        await sleep.sleep(3);

        await pageLogin.goto(BASE_URL);
        await pageLogin.waitFor('.sqdOP');
        await pageLogin.click('.sqdOP');
        await pageLogin.type('input[name="username"]', username);
        await pageLogin.type('input[name="password"]', password);
        await pageLogin.click('button[type="submit"]');
        await pageLogin.waitFor(3000);
        await pageLogin.waitFor('.sqdOP');
        await pageLogin.click('.sqdOP');

        await pageLogin.waitFor('div[role="dialog"]');
        await pageLogin.click('button.HoLwm');

        try{
          await pageLogin.waitFor('div[role="dialog"]');
          await pageLogin.click('button.HoLwm');
        }catch(e){}

        let cookies = await pageLogin.cookies();

        //await instagram.browser.close();

        return cookies;
      },

      loginFromCookies: async (ig_did, mid, csrftoken, sessionid) => {
        const page = await instagram.browser.newPage();
        await page.authenticate({ username : "kowerkodeveloper", password : "I2g1OrN" });
        await page.goto('https://2ip.ru/');
        await sleep.sleep(3);
        await page.goto(url);

        debugger;

        const cookies = [{
          'name': 'ig_did',
          'value': ig_did
        },{
          'name': 'mid',
          'value': mid
        },{
          'name': 'csrftoken',
          'value': csrftoken
        },{
          'name': 'sessionid',
          'value': sessionid
        }];
        await page.setCookie(...cookies);
        const cookiesSet = await page.cookies(url);
        //console.log(JSON.stringify(cookiesSet));
        await page.goto(url);
        await page.waitFor(5000);
        //await instagram.browser.close();
        return true;
      },

      follow: async (task_uname, uid_fromm, uid_to) => {

        const pageLogin = await instagram.browser.newPage();
        await pageLogin.authenticate({ username : "kowerkodeveloper", password : "I2g1OrN" });
        await pageLogin.goto('https://2ip.ru/');
        await sleep.sleep(3);

        await pageLogin.goto(url+ task_uname);

        try{
          await pageLogin.waitFor('button._5f5mN');
          await pageLogin.click('button._5f5mN');
        }catch(e){
          await pageLogin.waitFor('button.BY3EC');
          await pageLogin.click('button.BY3EC');
        }



        await fb.successFollow(uid_to);
        await fb.addToFollowersUser(uid_fromm, uid_to)
        await pageLogin.waitFor(30000);
        await instagram.browser.close();

        return true;
      },

      addAva: async (path, uid) => {

        try{
          const page = await instagram.browser.newPage();
          await page.goto(url + "accounts/edit/");

          await page.waitFor('button.sqdOP ');
          await page.click('button.sqdOP ');
          await page.waitFor('input[type="file"]');
          const input = await page.$('input[type="file"]');
          await input.uploadFile(path);

          try{
            await page.waitFor('button.UP43G');
            await page.click('button.UP43G');
          }catch(e){}

          try{
            await page.waitFor('div[role="dialog"]');
          }catch(e){}
          //const btn = await page.$x('//button[contains(text(), "Опубликовать")]');
          //await page.click(btn[0]);

          await fb.setAvaTrue(uid);
          await page.waitFor(5000);
          await instagram.browser.close();
        }catch(e){
          console.log("error in add ava"  + e);
        }

        return true;
      },

      addNewPost: async (path, t) => {

        const page = await instagram.browser.newPage();
        await page.goto(url);

        try{
          await page.waitFor('div[role="dialog"]');
          await page.click('button.HoLwm');
        }catch(e){}

        try{
          await page.waitFor('div[role="dialog"]');
          await page.click('button.HoLwm');
        }catch(e){}

        await page.waitFor('div.q02Nz');
        await page.click('div.q02Nz');

        const input = await page.$('input[type="file"]');
        await input.uploadFile(path);

        await page.waitFor('button.UP43G');
        await page.click('button.UP43G');

        await page.waitFor('textarea._472V_');
        await page.type('textarea._472V_', t);

        await page.click('button.UP43G');

        await page.waitFor(10000);
        await page.close();
      },

}

async function getCount(page) {
  return await page.$$eval('.pbNvD', a => a.length);
}

async function scrollDown(page) {
  await page.$eval('.pbNvD:last-child', e => {
    e.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
  });
}


module.exports = instagram;
