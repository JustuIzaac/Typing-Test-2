import {resetText} from "./displayText.js";
import {resetClock} from "./clock.js";
import {resetTextEvent} from "./textEvent.js";

export function refreshEvent(){
    document.querySelector(".f-text").style.display = "block";
    if(document.querySelector("#result-box").className == "result-box height-change-anim"){
        document.querySelector("#result-box").className = "result-box";
        document.querySelector("#result-box").style.height = "28em";
    }
    resetText();
    resetClock();
    resetTextEvent();
}