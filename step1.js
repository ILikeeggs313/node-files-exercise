//write a function cat
//take one argument path
const fs = require('fs');
const process = require('process');

fs.readFile('one.txt', 'utf8', (err,data) => {
    if(err){
        console.log(`Error: no such file in ${path}`, err);
        process.exit(1);
    }
    console.log(data);
})

