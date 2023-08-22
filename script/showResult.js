import {getCpm, getTotalChar, getCWord, getIcWord} from "./textEvent.js";

let wpmLabel = document.querySelector(".wpm");
let cCharLabel = document.querySelector(".keystroke1");
let icCharLabel = document.querySelector(".keystroke2");
let totalCharLabel = document.querySelector(".keystroke3");
let accuLabel = document.querySelector(".accu");
let cWordLabel = document.querySelector(".cword");
let icWordLabel = document.querySelector(".icword");

export function showResult(){
    let cpm = getCpm();
    let totalChar = getTotalChar();
    let cWord = getCWord();
    let icWord = getIcWord();
    let wpm = Math.round(cpm/5);
    let icChar = totalChar - cpm;
    let accu = Math.round(cpm/totalChar*100);
    console.log(getCpm());
    if(isNaN(accu)){
        accu = 0;
    }
    wpmLabel.innerText = `${wpm} WPM`;
    cCharLabel.innerText = `${cpm}`;
    icCharLabel.innerText = `${icChar}`;
    totalCharLabel.innerText = `${totalChar}`;
    accuLabel.innerText = `${accu}%`;
    cWordLabel.innerText = `${cWord}`;
    icWordLabel.innerText = `${icWord}`;

    document.querySelector(".result-container").style.display = "block";
    location.hash = "";
    location.hash = "result-container";
    document.querySelector("#result-box").style.height = "0";
    document.querySelector("#result-box").className = "result-box height-change-anim";
}