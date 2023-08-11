'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    
    let [hours, minutes, seconds] = s.split(":");
    
    if(hours == "12") {
        hours = "00";
    }
    
    if(s.includes("PM")) {
        hours = parseInt(hours) + 12;
        seconds = seconds.split("PM")[0];
    } else {
        seconds = seconds.split("AM")[0];    
    }
    
            
    return `${hours}:${minutes}:${seconds}`;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
