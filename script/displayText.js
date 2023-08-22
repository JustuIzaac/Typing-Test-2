import {getRandomWord} from "./words.js";

function generateLine(){
    let charLength = 0;
    let arrLine = [];
    let maxLength = 59;
    while(true){
        let word = getRandomWord();
        charLength += word.length + 1;
        if(charLength > maxLength){
            break;
        }else{
            arrLine.push(word);
        }
    }
    return arrLine;
}

let arrLine1 = generateLine();
let arrLine2 = generateLine();
let fLine1 = document.querySelector(".line1");
let fLine2 = document.querySelector(".line2");

function makeLabel(){
    for(let i=0; i<arrLine1.length; i++){
        let label = document.createElement("label");
        label.setAttribute("id", `line1-${i}`);
        label.setAttribute("class", "l-text line1");
        label.innerText = arrLine1[i];
        fLine1.appendChild(label);
    }
    for(let i=0; i<arrLine2.length; i++){
        let label = document.createElement("label");
        label.setAttribute("id", `line2-${i}`);
        label.setAttribute("class", "l-text line2");
        label.innerText = arrLine2[i];
        fLine2.appendChild(label);
    }
    document.querySelector("#line1-0").style.backgroundColor = "var(--gray)";
}

export function displayText(){
    makeLabel();
}

export function resetText(){
    arrLine1 = generateLine();
    arrLine2 = generateLine();
    fLine1.innerHTML = "";
    fLine2.innerHTML = "";
    makeLabel();
}

export function resetLine(){
    arrLine1 = arrLine2;
    arrLine2 = generateLine();
    fLine1.innerHTML = "";
    fLine2.innerHTML = "";
    makeLabel();
}