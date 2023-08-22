export function resetLanguage(value){
    localStorage.setItem("lang", value);
    sessionStorage.clear();
    location.reload();
}
