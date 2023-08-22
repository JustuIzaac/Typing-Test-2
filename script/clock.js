import {showResult} from "./showResult.js";
import {resetTextEvent} from "./textEvent.js";

let time = document.querySelector(".time");
let timeRun = false;

function sleep(ms){
    return new Promise(r => setTimeout(r, ms));
}

export async function resetClock(){
    timeRun = false;
    document.querySelector(".main-container").style.display = "none";
    document.querySelector(".loader").style.display = "block";
    await sleep(1200);
    time.innerText = "01:00";
    document.querySelector(".main-container").style.display = "flex";
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".main-input").focus();
}

export function runClock(){
    if(!timeRun){
        timeRun = true;
        let mins = Number(time.innerText.split(":")[0]);
        let sec = Number(time.innerText.split(":")[1]);
        timer(mins, sec);
    }
}


async function timer(mins, sec){
    while(!(mins == 0 && sec == -1)){
        sec--;
        if(sec == -1 && mins != 0){
            sec = 59;
            mins--;
        }
        if(!(mins == 0 && sec == -1)){
            upClock(mins, sec);
        }
        if(!timeRun){
            break;
        }
        await sleep(1000);
    }
    if(timeRun){
        document.querySelector(".f-text").style.display = "none";
        showResult();
    }
    resetTextEvent();
}

function upClock(nMins, nSec){
    let mins = String(nMins);
    let sec = String(nSec);
    if(mins.length == 1){
        mins = "0" + mins;
    }
    if(sec.length == 1){
        sec = "0" + sec;
    }
    time.innerHTML = mins + ":" + sec;
}