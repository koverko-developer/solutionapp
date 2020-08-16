const sms = require('./sms');
const loadJsonFile = require('load-json-file');
const random = require('random')
var randomstring = require("randomstring");

var firebase = require("firebase");

var apps = firebase.initializeApp({
apiKey: "AIzaSyAet4VmmuhViG6LgrAi7XAR0zzbccSUFPA",
authDomain: "shops-db02f.firebaseapp.com",
databaseURL: "https://shops-db02f.firebaseio.com",
projectId: "shops-db02f",
storageBucket: "shops-db02f.appspot.com",
messagingSenderId: "790389803332",
appId: "1:790389803332:web:1c509c640e38477bc36f11"});

const fb = {

      setnewUser: async (user) => {
        var newPostKey = firebase.database().ref().child('users').push().key;
        const res = await firebase.database().ref('/nologgedusers/' + newPostKey).set({
          user
        });
        return res;
      },
      setloggedUser: async (data) => {
        const res = await firebase.database().ref('/loggedusers/' + data['ds_user_id'] +"/").set({
          data
        });
        return res;
      },
      setBitcoinUsers: async (user) => {
        var newPostKey = firebase.database().ref().child('bitcoinusers2').push().key;
        const res = await firebase.database().ref('/bitcoinusers2/' + newPostKey).set({
          user
        });
        return res;
      },
      getBitcoinUsers : async() => {
        var ref = await firebase.database().ref('/bitcoinusers2/');
        let keys = [];
        await ref.once('value',function(snap) {
            snap.forEach(function(item) {
                var itemVal = item.val();
                keys.push(itemVal['user']);
            });

        });
        return keys;
      },
      getnewUsers: async () => {
          var ref = await firebase.database().ref('/nologgedusers/');
          let keys = [];
          await ref.once('value',function(snap) {
              snap.forEach(function(item) {
                  var itemVal = item.val();
                  keys.push(itemVal['user']);
              });

          });
          return keys;
      },

      getloggedUsers: async () => {
          var ref = await firebase.database().ref('/loggedusers/');
          let keys = [];
          await ref.once('value',function(snap) {
              snap.forEach(function(item) {
                  var itemVal = item.val();
                  keys.push(itemVal['data']);
              });

          });
          return keys;
      },
      addnewTask: async (data) => {
        let chrck = await fb.checkTask(data['ds_user_id']);
        if(chrck != 0) data['task_count'] = data['task_count'] + chrck;
        const res = await firebase.database().ref('/tasks_follow/' + data['ds_user_id'] +"/").set({
          data
        });
        return res;
      },
      checkTask: async (uid) => {
        var ref = await firebase.database().ref('/tasks_follow/' + uid +"/");
        let count = 0;
        await ref.once('value',function(snap) {
          let d = (snap.val() && snap.val().data['task_count']) || 'Anonymous';
          if (d === 'Anonymous') count = 0;
          else count = d;
        });
        return count;
      },
      successFollow: async (uid) => {
        let task_count = await fb.checkTask(uid);
        if(task_count != 0) task_count -=1;
        var updates = {};
        updates['/tasks_follow/' + uid + "/data/task_count"] = task_count;
        const res = await firebase.database().ref().update(updates);
        return res;
      },

      addToFollowersUser: async (followers_uid, user_uid) => {
        var ref = await firebase.database().ref('/tasks_follow/' + user_uid );
        let followers = 0;
        await ref.once('value',function(snap) {
          let d = (snap.val() && snap.val().followers) || 'Anonymous';
          if (d === 'Anonymous') followers = 0;
          else followers = d;
        });
        var updates = {};
        if(followers == 0) {
          updates['/tasks_follow/' + user_uid + "/followers"] = followers_uid;
          const res = await firebase.database().ref().update(updates);
        }
        else {
          followers_uid = followers + "," + followers_uid;
          updates['/tasks_follow/' + user_uid + "/followers"] = followers_uid;
          const res = await firebase.database().ref().update(updates);
        }

        console.log(followers);
        return followers;
      },

      getTasks: async () => {
        var ref = await firebase.database().ref('/tasks_follow/');
        let keys = [];
        await ref.once('value',function(snap) {
            snap.forEach(function(item) {
                var itemVal = item.val();
                if(itemVal['data']['task_count'] != 0)  keys.push(itemVal['data']);
            });

        });
        return keys;
      },

      getFollowersUser: async (user_uid) => {
        var ref = await firebase.database().ref('/tasks_follow/' + user_uid );
        let followers = 0;
        await ref.once('value',function(snap) {
          followers = (snap.val() && snap.val().followers) || 'Anonymous';
        });
        return followers;
      },

      setAvaTrue: async (user_id) => {
        var updates = {};
        updates['/loggedusers/' + user_id + "/avatar"] = true;
        const res = await firebase.database().ref().update(updates);
        return true;
      },
}



module.exports = fb;

//  const res = await db.collection('cities').doc('LA').set(data);

// firebase.database().ref('/users/' + data['pk'] +'/info').set({
//   data
// });


// ***************************

// firebase.database().ref('/users/' + user_ig.pk+'/followers_old').once('value').then(function(snapshot) {
//   var followers_old = (snapshot.val() && snapshot.val().followers) || 'Anonymous';
//   followers_old.forEach(element => {
//     if(!arr_f.includes(element['pk'])) arr_unfollowers.push(element)
//   });
// });
