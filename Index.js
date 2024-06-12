const prompt = require("prompt-sync"); //CURSOR İLE İ'Yİ DEĞİŞTİR
let i = 0;
let gamememory = [0];
let fs = require('fs');
let cursor = 0;
let file = "./test.bf";
let mycode = fs.readFileSync(file, 'utf8')//.toString;
let weirdbrackets = new Array();
function WeirdBracketStart() {   
    if(gamememory[cursor]!=0) {
        weirdbrackets.push(i);
        //console.log(i , " " ,weirdbrackets);
    }
    //console.log("new bracket started! bracket number "+weirdbrackets.length + " ", weirdbrackets[weirdbrackets.length -1]);
}
function WeirdBracketEnd() {
    if(gamememory[cursor]!=0) {
        i = weirdbrackets[weirdbrackets.length -1];
        //console.log("Loop " + weirdbrackets.length, " ", weirdbrackets[weirdbrackets.length -1]);
    } else {
        weirdbrackets.splice(weirdbrackets.length-1,1);
        //console.log("ended bracket " + weirdbrackets.length+1)
    }
}


processBFJs(mycode);

function processBFJs(input) {
    console.log(""+input);
    for (i = 0; i < input.length; i++) {
        switch (input[i]) {
            case '>':
                if(cursor +1 > gamememory.length-1) 
                    gamememory.push(0);
                cursor++;
                console.log(cursor);
                break;
            case '<':
                cursor--;
                console.log(cursor);
                break;
            case '+':
                gamememory[cursor]++;
                //console.log(input[i]);
                break;
            case '-':
                gamememory[cursor]--;
                //console.log(input[i]);
                break;
            case '.':
                console.log(""+gamememory[cursor]);
                break;
            case ',':
                gamememory[cursor] = prompt("");
                break;
            case '[':
                WeirdBracketStart();
                break;
            case ']':
                WeirdBracketEnd();
                break;
        }
    }
}