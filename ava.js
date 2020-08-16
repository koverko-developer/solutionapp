const ig = require('./instagram');
const sms = require('./sms');
const insta = require('./robot_insta');
const generator = require('./generator');
const fb = require('./fb');
var sleep = require('sleep');

(async () => {
    let u_nologged = await fb.getloggedUsers();
    for(var k = 0; k < u_nologged.length; k++){
      console.log('count = ' +  u_nologged.length);
      let arrUname = ['koverko_dev','docteur.life', '938.071', 'saveirobr.ofc', 'melihsezerr_', 'maiarmahmoud_official', '_.abdou.__.blink', 'home_innovation_cl', 'dominicantester', 'pubg_syria_official'];
      let arrUid = ['5972326347','3145234619', '980067904', '4517679948', '1523159328', '2191914275', '2102046391', '449218840', '1697609286','4114215067']
      let proxy = u_nologged[k]['proxy'];
      await ig.initialize(proxy);
      let login = await ig.loginFromCookies(u_nologged[k]['ig_did'],
                                             u_nologged[k]['mid'],
                                             u_nologged[k]['csrftoken'],
                                             u_nologged[k]['sessionid']);
      let p = await generator.getRandomAva();
      let ava = await ig.addAva(p, u_nologged[k]['ds_user_id']);
      // for(let i =0; i < 10; i++){
      //   let proxy = u_nologged[k]['proxy'];
      //   await ig.initialize(proxy);
      //   let login = await ig.loginFromCookies(u_nologged[k]['ig_did'],
      //                                          u_nologged[k]['mid'],
      //                                          u_nologged[k]['csrftoken'],
      //                                          u_nologged[k]['sessionid']);
      //   //let login = await ig.login(u_nologged[k]['uname'] , u_nologged[k]['password']);
      //   //let follows = await ig.follow(arrUname[i], u_nologged[k]['ds_user_id'], arrUid[i]);
      // }
    }

})();
