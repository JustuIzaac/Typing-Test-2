let language = localStorage.getItem("lang");
if(language == null){
    language = "id";
}

fetch(`source/word/${language}-words.txt`)
.then(r => r.text())
.then(data => sessionStorage.setItem("words", data))
