//copy over step2 first//write a function cat
//take one argument path
const fs = require('fs');
const process = require('process');

function cat(path, out){
    fs.readFile('one.txt', 'utf8', (err,data) => {
        if(err){
            console.log(`Error: no such file in ${path}`, err);
            process.exit(1);
        }
        newOutput(data, out);
    })
}

//require axios first
const axios = require('axios');
//always use async and await for axios
async function webCat(url, out){
    try {
        let resp = await axios.get(url);
        newOutput(resp.data, out);

    }
    catch(err){
        console.log(`error: cannot get ${url}`, err);
    }
}
let path = process.argv[2];

if(process.argv[2] === '--out' ){
    out = process.argv[3];
    path = process.argv[4];
}   else{
    path = process.argv[2];
}


if (path.slice(0,4) === 'http'){
    webCat(path);
}   else{
    cat(path);
}

//step 3

function newOutput(text, out){
    if(out){
        fs.writeFile(out, text, 'utf8', (err) => {
            if (err){
                console.log(`err: couldn't write file ${out}`, err);
                process.exit(1);
            }
            console.log(text)
            
        })
    }
}

