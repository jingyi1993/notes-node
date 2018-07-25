console.log('Starting app. ');
//require 3rd library
const fs= require('fs');
const os =require('os');
const notes = require('./note');

var user= os.userInfo();
// console.log(user);

// let res = notes.addNote();
// console.log(res);

let add =notes.add(1,2);
console.log(add)

fs.appendFile ('greeting.txt',`hello ${user.username} ! you are ${add}`,function(err){
    if(err){
        console.log('err')
    }
});







