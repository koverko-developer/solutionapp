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
const fs = require('fs');
var request = require('sync-request');
var FormData = require('form-data');
const path = require('path');
var robot = require("robotjs");

var list_proxy = ["91.243.188.184","91.243.188.114","91.243.188.30","91.243.188.137","91.243.188.10","91.243.188.35","91.243.188.162","91.243.188.129","91.243.188.42","91.243.188.136","91.243.188.121",
"91.243.188.65","91.243.188.99","91.243.188.117","91.243.188.28","91.243.188.57","91.243.188.134","91.243.188.120","91.243.188.108","91.243.188.88","91.243.188.242","91.243.188.89","91.243.188.203","176.119.140.6","176.119.140.69","176.119.140.102","176.119.140.93","176.119.140.97","176.119.140.113","176.119.140.116","176.119.140.81","176.119.140.90","176.119.140.76","176.119.140.14","176.119.140.244","176.119.140.241","176.119.140.221","176.119.140.245","176.119.140.134","176.119.140.195",
"176.119.140.70","176.119.140.125","176.119.140.82","176.119.140.47","176.119.140.222","81.22.44.247","81.22.44.127","81.22.44.175","81.22.44.207","81.22.44.48","81.22.44.32","81.22.44.18","81.22.44.253","81.22.44.179","81.22.44.104","81.22.44.3","81.22.44.97","81.22.44.43","81.22.44.89","81.22.44.165","81.22.44.7","81.22.44.128","81.22.44.201","81.22.44.13","81.22.44.145","81.22.44.246","81.22.44.228","81.22.44.119","91.227.155.115","91.227.155.99","91.227.155.208","91.227.155.103",
"91.227.155.51","91.227.155.17","91.227.155.5","91.227.155.151","91.227.155.91","91.227.155.107","91.227.155.63","91.227.155.26","91.227.155.138","91.227.155.134","91.227.155.159","91.227.155.245","91.227.155.184","91.227.155.80","91.227.155.19","91.227.155.225","91.227.155.229","91.227.155.12","91.227.155.228","212.109.193.42","212.109.195.65","212.109.192.115","37.46.129.111","37.46.131.91","37.46.128.135","185.43.5.55","185.43.4.185","80.87.194.70","91.240.84.144","193.124.94.170",
"193.124.205.194","193.124.201.201","193.124.47.116","193.124.18.120","193.124.89.17","193.124.204.194","193.124.91.176","193.124.46.103","193.124.93.177","193.124.95.202","193.124.200.111","193.124.203.115","193.124.16.165","134.0.113.131","134.0.117.164","134.0.112.160","134.0.119.157","134.0.116.114","134.0.115.112","194.58.120.237","194.58.42.148","194.58.42.146","194.58.122.49","194.58.39.201","194.58.61.107","194.58.123.171","194.58.59.185","194.58.122.104","194.58.58.153","194.58.60.196","194.58.46.10","194.58.43.163","178.21.8.60","178.21.8.29","37.140.197.187","37.140.199.207","37.140.198.190","185.20.224.234","188.93.211.200","109.120.128.178","109.120.128.179","109.120.128.180","109.120.128.181","109.120.128.182","109.120.128.183","109.120.128.184","109.120.128.185","109.120.128.186","109.120.128.187","109.120.128.188","109.120.128.189","109.120.128.190","77.221.152.210","77.221.152.211","77.221.152.212","77.221.152.213","77.221.152.214","77.221.152.215","77.221.152.216",
"77.221.152.217","77.221.152.218","77.221.152.219","77.221.152.220","77.221.152.221","77.221.152.222","92.243.65.210","92.243.65.211","92.243.65.212","92.243.65.213","92.243.65.214","92.243.65.215","92.243.65.216","92.243.65.217","92.243.65.218","92.243.65.219","92.243.65.220","92.243.65.221","92.243.65.222","83.166.240.184","83.166.241.9","83.166.241.120","194.87.144.231","194.87.147.188","194.87.234.184","194.87.236.19","194.87.237.134","194.87.99.199","212.109.194.3","185.43.6.43",
"37.46.130.35","77.246.158.150","83.220.171.66","31.31.203.167","194.58.92.150","193.124.202.107","194.58.40.71","5.63.158.71","31.31.202.3"];


const bitcoin_log = {
      browser : null,
      page : null,
      initialize: async (k, list_fb) => {
      console.log(' k == ' + k);
      console.log('proxy === ' + list_fb[k]['proxyIp']);
      try{
        bitcoin_log.browser = await puppeteer.launch({
          //executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
          headless : false,
          slowMo:10,
          args: [
            '--proxy-server=' + list_fb[k]['proxyIp'] + ':7951',
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
      login: async (k, list_fb) => {
        console.log(' k == ' + k);
        console.log('uname === ' + list_fb[k]['uname']);
        const page = await bitcoin_log.browser.newPage();
        await page.authenticate({ username : "irp1000736", password : "gMtBTI860R" });

        try{
          try{
            await page.goto('https://freebitco.in/?op=signup_page#');
          }catch(e){
            await page.goto('https://freebitco.in/?op=signup_page#');
          }

          await page.waitFor('li[id="menu_drop"]')
          await page.click('li[id="menu_drop"]')
          await page.waitFor(1000);

          try{
            await page.waitFor('li.login_menu_button')
            await page.click('li.login_menu_button')
          }catch(e){
            await bitcoin_log.browser.close();
            k+=1;
            await bitcoin_log.initialize(k, list_fb)
            await bitcoin_log.login(k , list_fb)
          }

          await page.waitFor(1000);

          await page.waitFor('input[id="login_form_btc_address"]')
          await page.type('input[id="login_form_btc_address"]', list_fb[k]['uname'])

          await page.waitFor('input[id="login_form_password"]')
          await page.type('input[id="login_form_password"]', "3057686Kowerko1") //id="login_button"

          try{
            await page.waitFor('button[id="login_button"]')
            await page.click('button[id="login_button"]')
          }catch(e){
            await bitcoin_log.browser.close();
            k+=1;
            await bitcoin_log.initialize(k, list_fb)
            await bitcoin_log.login(k , list_fb)
          }

          try{
            await page.waitFor('input[id="free_play_form_button"]')
          }catch(e){
            await bitcoin_log.browser.close();
            await page.waitFor(60000);
            k+=1;
            await bitcoin_log.initialize(k, list_fb)
            await bitcoin_log.login(k , list_fb)
          }
          await page.waitFor(20000)

          const html = await page.evaluate('new XMLSerializer().serializeToString(document.doctype) + document.documentElement.outerHTML');

          var site_k1  = html.split("data-sitekey")[1];
          var site_k2  = site_k1.split("div")[0];
          var key_google = site_k2.substring(2, site_k2.length - 4)
          console.log(key_google);

          let id_capcha = await initiateCaptchaRequest("79eb76aa0532c07ab11de17e872ca160", key_google , "https://freebitco.in/?op=home");
          console.log(id_capcha);

          let code = 0;
          let capcha_for_paste = "";
          do {
            var resp  = await requestCaptchaResults("79eb76aa0532c07ab11de17e872ca160", id_capcha['request'])
            console.log(resp);
            code = resp['status']
            capcha_for_paste = resp['request']
            console.log(capcha_for_paste);
            console.log(code);
            if(capcha_for_paste.includes('ERROR_CAPTCHA_UNSOLVABLE')){
              k+=1;
              await bitcoin_log.browser.close();
              await bitcoin_log.initialize(k, list_fb)
              await bitcoin_log.login(k , list_fb)
            }
            sleep.sleep(5)
          } while (code === 0);

          await autoScroll(page);
          //
          await page.waitFor(5000)
          // await page.evaluate(`document.getElementById("g-recaptcha-response").innerHTML="${capcha_for_paste}";`);

          ///play_without_captcha_button center
          //await page.waitFor(100000);

          try{
            await page.waitFor('div[id="push_notification_modal"]')
            await page.evaluate(`document.getElementById("push_notification_modal").style="background-color: transparent; border: 0px; box-shadow: none; position: absolute; left: 50%; width: auto !important; display: none; opacity: 1; visibility: hidden; top: -452px";`);
            await page.waitFor('.reveal-modal-bg')
            await page.click('.reveal-modal-bg')

          }catch(e){
            console.log('eeror in pushpad' + e);
          }
          await page.waitFor(1000);//cc_btn_accept_all
          await page.click('.cc_btn_accept_all')
          await page.waitFor(1000)

          await autoScroll(page);
          // await page.waitFor('.play_without_captcha_button')
          // await page.click('.play_without_captcha_button')
          //
          // await page.waitFor(2000)

          await page.click('[value="ROLL!"]')
          //await page.click('input[type="submit"]')
          await page.waitFor(3000);
          //await page.click('input[id="free_play_form_button"]')
          console.log('click button');//id="free_play_form_button"

          await page.waitFor(2000);

          await bitcoin_log.browser.close();
          if(k===121) {
            k = 0;
          }
          else k+=1;
          console.log('k == ' + k );

          await bitcoin_log.initialize(k, list_fb)
          await bitcoin_log.login(k , list_fb)



        }catch(e){
          console.log(e);
          await page.waitFor(50000)
          await bitcoin_log.browser.close();
          k+=1;
          await bitcoin_log.initialize(k, list_fb)
          await bitcoin_log.login(k , list_fb)
        }
      },
      test: async() => {

        let id_capcha = await initiateCaptchaRequest("79eb76aa0532c07ab11de17e872ca160", '6LeGfGIUAAAAAEyUovGUehv82L-IdNRusaYFEm5b' , "https://freebitco.in/?op=home");
        console.log(id_capcha);

        let code = 0;
        let capcha_for_paste = "";
        do {
          var resp  = await requestCaptchaResults("79eb76aa0532c07ab11de17e872ca160", id_capcha)
          console.log(resp);
          code = resp['status']
          capcha_for_paste = resp['response']
          console.log(capcha_for_paste);
          console.log(code);
          sleep.sleep(5)
        } while (code === 0);

      },

  }
  async function initiateCaptchaRequest(apiKey, sitekey, pageurl) {
    const formData = {
      method: 'userrecaptcha',
      googlekey: sitekey,
      key: apiKey,
      pageurl: pageurl,
      json: 1
    };
   var res = request('POST', 'https://rucaptcha.com/in.php', {
      json: {
        method: 'userrecaptcha',
        googlekey: '6LeGfGIUAAAAAEyUovGUehv82L-IdNRusaYFEm5b',
        key: apiKey,
        pageurl: pageurl,
        json: 1},
    });
  var response = JSON.parse(res.getBody('utf8'));
  return response;
}


async function requestCaptchaResults(apiKey, requestId) {
  var res = request('GET', 'https://rucaptcha.com/res.php?key=' + apiKey + '&action=get&id=' + requestId + '&json=1');
  return JSON.parse(res.getBody('utf8'));
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

  var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    //console.log('content-type:', res.headers['content-type']);
    //console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
module.exports = bitcoin_log;
