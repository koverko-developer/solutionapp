const sms = require('./sms');
const loadJsonFile = require('load-json-file');
const random = require('random')
var randomstring = require("randomstring");
var fs = require('fs');
var request = require('sync-request');

const generator = {

      getFullname: async () => {

        console.log('выбераем пол:');
        let random_sex_int = random.int(0, 1)
        if(random_sex_int == 0) console.log('man');
        else console.log('woman');

        let names_m = await loadJsonFile('names_m.json');
        let names_w = await loadJsonFile('names_w.json');
        let surnames_m = await loadJsonFile('surnames_m.json');
        let surnames_w = await loadJsonFile('surnames_w.json');

        let name = "";
        if(random_sex_int == 0) {
          let random_name_int = random.int(0, names_m.length-1)
          name = names_m[random_name_int];
        }else {
          let random_name_int = random.int(0, names_w.length-1)
          name = names_w[random_name_int];
        }
        console.log('name = ' + name['name_ru'] + "___" + name['name_eng']);

        let surname = "";
        if(random_sex_int == 0) {
          let random_name_int = random.int(0, surnames_m.length-1)
          surname = surnames_m[random_name_int];
        }else {
          let random_name_int = random.int(0, surnames_w.length-1)
          surname = surnames_w[random_name_int];
        }

        let full_uname = await generator.getRandomUname(name['name_eng'], surname['name_eng']);
        let password = await generator.getRandowPassword();

        console.log('surname = ' + surname['name_ru'] + "___" + surname['name_eng']);
        console.log("full uname = " + full_uname);

        let user = {
            name : name,
            surname : surname,
            full_uname : full_uname,
            password : password,
            proxy : ''
        }

        return user;
      },
      getRandomUname: async (name, surname) => {
            let random_type = random.int(0, 17)
            let random_value_int = random.int(0, 99)

            console.log("random_type = " + random_type + "    random_value_int = " + random_value_int);
            let uname = "";
            if(random_type == 0) uname = name + "." + surname + "_";
            else if(random_type == 1) uname = name + "_" + surname + "_";
            else if(random_type == 2) uname = name + random_value_int + "." + surname;
            else if(random_type == 3) uname = name + random_value_int + "_" + surname;
            else if(random_type == 4) uname = name + "_" + surname + random_value_int;
            else if(random_type == 5) uname = name + "." + surname + random_value_int;
            else if(random_type == 6) uname = surname + "." + name + "_";
            else if(random_type == 7) uname = surname + "_" + name + "_";
            else if(random_type == 8) uname = surname + random_value_int + "." + name;
            else if(random_type == 9) uname = surname + random_value_int + "_" + name;
            else if(random_type == 10) uname = surname + "_" + name + random_value_int;
            else if(random_type == 11) uname = surname + "." + name + random_value_int;
            else if(random_type == 12) uname = surname + name + random_value_int;
            else if(random_type == 13) uname = surname + name + "_";
            else if(random_type == 14) uname = name + surname + random_value_int;
            else if(random_type == 15) uname = name + surname + "_";
            else if(random_type == 16) uname = name + surname + random_value_int + name;
            else if(random_type == 17) uname = name + surname + random_value_int + surname;

            return uname.toLowerCase();
      },
      getRandomUnameGoogle: async (name, surname) => {
            let random_type = random.int(0, 17)
            let random_value_int = random.int(0, 99)

            console.log("random_type = " + random_type + "    random_value_int = " + random_value_int);
            let uname = "";
            if(random_type == 0) uname = name + "." + surname + ".";
            else if(random_type == 1) uname = name + "." + surname + ".";
            else if(random_type == 2) uname = name + random_value_int + "." + surname;
            else if(random_type == 3) uname = name + random_value_int + "." + surname;
            else if(random_type == 4) uname = name + "." + surname + random_value_int;
            else if(random_type == 5) uname = name + "." + surname + random_value_int;
            else if(random_type == 6) uname = surname + "." + name + ".";
            else if(random_type == 7) uname = surname + "." + name + ".";
            else if(random_type == 8) uname = surname + random_value_int + "." + name;
            else if(random_type == 9) uname = surname + random_value_int + "." + name;
            else if(random_type == 10) uname = surname + "." + name + random_value_int;
            else if(random_type == 11) uname = surname + "." + name + random_value_int;
            else if(random_type == 12) uname = surname + name + random_value_int;
            else if(random_type == 13) uname = surname + name + ".";
            else if(random_type == 14) uname = name + surname + random_value_int;
            else if(random_type == 15) uname = name + surname + ".";
            else if(random_type == 16) uname = name + surname + random_value_int + name;
            else if(random_type == 17) uname = name + surname + random_value_int + surname;

            return uname.toLowerCase();
      },
      getRandowPassword: async () => {
            let password = randomstring.generate({
                        length: 12,
                        charset: 'qwertyuioplkjhgfdsazxcvbnm0123456789'
                      });
            return password;
      },

      getRandomAva: async () => {
              let ar = await fs.readdirSync("D:/image/ava", function(err, items) {
              });
              let randomAva = random.int(0, ar.length -1)
              let path = "D:/image/ava/" + ar[randomAva];
              return path;
      },

      getRandomPhoto: async () => {
              let ar = await fs.readdirSync("D:/image/ava", function(err, items) {
              });
              let randomAva = random.int(0, ar.length -1)
              let path = "D:/image/ava/" + ar[randomAva];
              return path;
      },
      getGenerateText: async () => {
        var res = request('GET', 'http://www.api.seazon.org/2-0-1-1-1-0/0-0-1/2-9-15-30-1-1/api.txt');
        let body = res.getBody().toString();
        let n_text = body.substring(3, body.length - 5) + "  #koverkodeveloper"
        return n_text;
      },

      getArrayUsersForFollowers: async (for_followers, followers) => {
          let array_for_followers = [];
          let pets = followers.split(",");
          console.log(pets);
          for(var i = 0; i<for_followers.length; i++){
            var item = for_followers[i];
            if(pets.indexOf(item['ds_user_id']) === -1) array_for_followers.push(item)
          }
          console.log(array_for_followers);
          return array_for_followers;
      },
      getRandomProxy: async() => {
        // 10 штук пока
        let randomX = random.int(0, 9)
        var arProxy = [
          "91.107.119.217",
          "80.66.84.232",
          "83.217.10.69",
          "92.63.195.39",
          "89.191.227.81",
          "194.116.163.90",
          "95.46.8.25",
          "185.239.50.111",
          "193.233.149.49",
          "192.162.247.57"
        ];
        return arProxy[randomX];
      },
}



module.exports = generator;
