//write a function cat
//take one argument path
const fs = require('fs');
const process = require('process');

function cat(){
    fs.readFile('one.txt', 'utf8', (err,data) => {
        if(err){
            console.log(`Error: no such file in ${path}`, err);
            process.exit(1);
        }
        console.log(data);
    })
}

//require axios first
const axios = require('axios');
//always use async and await for axios
async function webCat(){
    try {
        let resp = await axios.get(url);
        console.log(resp.data);

    }
    catch(err){
        console.log(`error: cannot get ${url}`, err);
    }
}
let path = process.argv[2];

if (path.slice(0,4) === 'http'){
    webCat(path);
}   else{
    cat(path);
}

