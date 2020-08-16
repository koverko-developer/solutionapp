const ig = require('./instagram');
const sms = require('./sms');
const insta = require('./robot_insta');
const generator = require('./generator');
const fb = require('./fb');
var sleep = require('sleep');


// (async () => {
//     let u_nologged = await fb.getloggedUsers();
//     console.log(u_nologged.length);
//     for(var k = 0; k < u_nologged.length; k++){
//
//             await ig.initialize();
//             let login = await ig.loginFromCookies(u_nologged[k]['ig_did'],
//                                         u_nologged[k]['mid'],
//                                         u_nologged[k]['csrftoken'],
//                                         u_nologged[k]['sessionid']);
//             let p = await generator.getRandomAva();
//             let ava = await ig.addAva(p, u_nologged[k]['ds_user_id']);
//             console.log(k);
//             // for(var i = 0; i < 5; i++){
//             //   let t = await generator.getGenerateText();
//             //   let p = await generator.getRandomPhoto();
//             //   let ava = await ig.addNewPost(p, t);
//             // }
//
//     }
//
// })();




//let users = await fb.addnewTask(userTask);
//let users = await fb.checkTask("5972326347");
//let users = await fb.successFollow("5972326347");
//let fff = await fb.addToFollowersUser("456456", "5972326347")
// (async () => {
//   let userTask = {
//           ds_user_id : '5972326347',
//           task_count : 3,
//           uname : "koverko_dev"
//   }
//
//
//
//   let a = await fb.getTasks();
//
//   if(a.length != 0){
//     let count_followers = 30;
//     if(a[0]['task_count'] < 30) count_followers = a[0]['task_count']
//     let uid = a[0]['ds_user_id'];
//     let uname = a[0]['uname'];
//     let followers = await fb.getFollowersUser(uid);
//     let users_for_followers = await fb.getloggedUsers();
//     if(followers != 'Anonymous') users_for_followers = await generator.getArrayUsersForFollowers(users_for_followers, followers);
//
//     for(var k =0; k<count_followers; k++){
//       await ig.initialize();
//       let login = await ig.loginFromCookies(users_for_followers[k]['ig_did'],
//                                        users_for_followers[k]['mid'],
//                                        users_for_followers[k]['csrftoken'],
//                                        users_for_followers[k]['sessionid'])
//       let follows = await ig.follow(uname, users_for_followers[k]['ds_user_id'], uid);
//       console.log(follows);
//     }
//
//   }
//
//
//   //console.log(users);
// })();

// (async () => {
//   let k = await generator.getRandomAva();
//   console.log(k);
// })();



// for (var i = 0; i < array.length; i++) {
//   array[i]
// }

// l("andrei95_ivanov", "xjtp4hi1d5z6");
// function l(loginUser, password){
//   (async () => {
//     await ig.initialize();
//     let login = await ig.login(loginUser , password);
//     let userInfo = {
//         uname : loginUser,
//         password : password,
//         csrftoken : login[2]['value'],
//         mid : login[3]['value'],
//         sessionid : login[4]['value'],
//         ds_user_id : login[5]['value'],
//         ig_did : login[6]['value']
//     }
//     fb.setloggedUser(userInfo)
//     //console.log(login); //2 -srf  3 -mid  ,   4 - session id ,   5 -ds_user_id
//   })();
// }

// k();
//
// function k(){
//   (async () => {
//     await ig.initialize();
//     let login = await ig.loginFromCookies("EECA66E7-E23A-4B0E-BCAE-E45E449C5601",
//     "Xvz7ogAAAAFTyA9sylqVLT694Lg8",
//     "x6CzYFE2V5hIpCL0vFLapjGibV120oX0",
//     "38100444034%3AYJygsbjGxa5itT%3A25");
//   })();
// }

// z();
//
// function z(){
//   (async () => {
//       await ig.initialize();
//       let login = await ig.loginFromCookies("EECA66E7-E23A-4B0E-BCAE-E45E449C5601",
//                                   "Xvz7ogAAAAFTyA9sylqVLT694Lg8",
//                                   "x6CzYFE2V5hIpCL0vFLapjGibV120oX0",
//                                   "38100444034%3AYJygsbjGxa5itT%3A25");
//       let follows = await ig.follow("koverko_dev");
//       console.log(follows);
//   })();
// }

// g();
//
// function g(){
//   (async () => {
//       let p = await generator.getRandomAva();
//       await ig.initialize();
//       let login = await ig.loginFromCookies("EECA66E7-E23A-4B0E-BCAE-E45E449C5601",
//                                   "Xvz7ogAAAAFTyA9sylqVLT694Lg8",
//                                   "x6CzYFE2V5hIpCL0vFLapjGibV120oX0",
//                                   "38100444034%3AYJygsbjGxa5itT%3A25");
//       let ava = await ig.addAva(p);
//   })();
// }

// h();
//
// function h(){
//   (async () => {
//       await ig.initialize();
//       let login = await ig.loginFromCookies("EECA66E7-E23A-4B0E-BCAE-E45E449C5601",
//                                   "Xvz7ogAAAAFTyA9sylqVLT694Lg8",
//                                   "x6CzYFE2V5hIpCL0vFLapjGibV120oX0",
//                                   "38100444034%3AYJygsbjGxa5itT%3A25");
//       for(var i = 0; i < 5; i++){
//         let t = await generator.getGenerateText();
//         let p = await generator.getRandomPhoto();
//         let ava = await ig.addNewPost(p, t);
//       }
//
//   })();
// }
