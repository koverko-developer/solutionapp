const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['Galaxy Note 3'];
const url = 'https://www.instagram.com/koverko_dev';
(async () => {
  const browser = await puppeteer.launch({
    headless : false,
    //args: ['--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'],
  });
  const page = await browser.newPage();
  // await page.setViewport({ width: 80, height: 40 });
  // await page.emulate(iPhonex);
  await page.goto(url);

  debugger;

  const cookies = [{
    'name': 'ig_did',
    'value': '1D75297C-98AA-471F-BD4B-CF9FA3E7D4F4'
  },{
    'name': 'mid',
    'value': 'XkA3iwALAAFL502J7snfGPzMqgFS'
  },{
    'name': 'csrftoken',
    'value': 'dYd8vDw9wCwJUWaqjNCTrYdsJry7ryAX'
  },{
    'name': 'sessionid',
    'value': '5972326347%3ArpHBWV1fPqVU8h%3A27'
  }];
  await page.setCookie(...cookies);
  const cookiesSet = await page.cookies(url);
  console.log(JSON.stringify(cookiesSet));
  await page.goto(url);

})();
