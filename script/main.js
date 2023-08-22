import {runClock} from "./clock.js";
import {displayText} from "./displayText.js";
import {textEvent} from "./textEvent.js";
import {refreshEvent} from "./refresh.js";
import {resetLanguage} from "./resetLanguage.js";

let mainInput = document.querySelector(".main-input");
let bRestart = document.querySelector(".b-restart");
let clock = document.querySelector(".clock");
let languageSelect = document.querySelector(".lang-select");

function initSetup(){
    let langugage = localStorage.getItem("lang");
    if(langugage == null){
        langugage = "id"
    }
    
    languageSelect.value = langugage;
}

languageSelect.onchange = function(){
    resetLanguage(languageSelect.options[languageSelect.selectedIndex].value);
}

bRestart.onclick = function(){
    refreshEvent();
};

mainInput.oninput = function(){
    runClock();
    textEvent();
}

clock.onclick = function(){
    if(document.querySelector(".time").style.display != "none"){
        document.querySelector(".time").style.display = "none";
    }else{
        document.querySelector(".time").style.display = "inline";
    }
}

window.onload = function(){
    initSetup();
}

displayText();