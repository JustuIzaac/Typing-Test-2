import {resetLine} from "./displayText.js";

let mainInput = document.querySelector(".main-input");
let i = 0;
let cpm = 0;
let totalChar = 0;
let cWord = 0;
let icWord = 0;

export function textEvent(){
    let currentlabel = document.querySelector(`#line1-${i}`);
    if(document.querySelector(".f-text").style.display != "none"){
        if(currentlabel.innerText.startsWith(mainInput.value)){
            currentlabel.style.backgroundColor = "var(--gray)";
        }else{
            currentlabel.style.backgroundColor = "var(--incorrect)";
        }
        if(mainInput.value.endsWith(" ")){
            currentlabel.style.backgroundColor = "white";
            if(mainInput.value.slice(0, -1) == currentlabel.innerText){
                currentlabel.style.color = "var(--correct)";
                cpm += currentlabel.innerText.length + 1;
                cWord++;
            }else{
                currentlabel.style.color = "var(--incorrect)";
                icWord++;
            }
            totalChar += currentlabel.innerText.length + 1;
            i++;
            mainInput.value = "";
            try{
                document.querySelector(`#line1-${i}`).style.backgroundColor = "var(--gray)";
            }catch{
                i = 0;
                resetLine();
            }
        }
    }else{
        if(mainInput.value.endsWith(" ")){
            mainInput.value = "";
        }
    }
}

export function resetTextEvent(){
    i = 0;
    cpm = 0;
    totalChar = 0;
    cWord = 0;
    icWord = 0;
    mainInput.value = "";
}

export function getCpm(){
    return cpm;
}

export function getTotalChar(){
    return totalChar;
}

export function getCWord(){
    return cWord;
}

export function getIcWord(){
    return icWord;
}