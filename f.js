const ig = require('./instagram');
const sms = require('./sms');
const insta = require('./robot_insta');
const generator = require('./generator');
const fb = require('./fb');
var sleep = require('sleep');
const random = require('random')
var sleep = require('sleep');

(async () => {
  let arrUname = ['koverko_dev','docteur.life', '938.071', 'saveirobr.ofc', 'melihsezerr_', 'maiarmahmoud_official', '_.abdou.__.blink', 'home_innovation_cl', 'dominicantester', 'pubg_syria_official'];
  let arrUid = ['5972326347','3145234619', '980067904', '4517679948', '1523159328', '2191914275', '2102046391', '449218840', '1697609286','4114215067']

  for(let i =0; i < 10; i++){

    await ig.initialize('185.239.50.111');
    // let login = await ig.loginFromCookies('E018F934-48BA-4BE8-A2F6-213D7F7545E2',
    //                                        'XwODVgAAAAEaNidpfm5z_zsrVP6x',
    //                                        'o1H5yCbDN0Hi5Jax1mwBS0u9vsv2NPGL',
    //                                        '38111838796%3Ale2Kettr0rLsa8%3A3')
    let follows = await ig.follow(arrUname[i], '38111838796', arrUid[i]);
    let random_time = random.int(4, 10)
    await sleep.sleep(random_time)

    console.log(follows);

  }
})()
