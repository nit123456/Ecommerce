// ____________________Contant________________
const form= document.querySelector(".login-page");
const loginTo= document.querySelector(".nav-right").lastElementChild;
// _________________Show log in____________
let show=(element)=>{
    element.style.display="block";
}
// ____________________Hide log in____________
let hide=(element)=>{
    element.style.display="none";
}
let login=()=>{
    show(form);
};
// ______________On Login___________
let onLogin=()=>{
    hide(form);
}
// _______________On Back___________
let onBack=()=>{
    hide(form);
}
loginTo.addEventListener("click",login);
document.querySelector("#login").addEventListener("click",onLogin);
document.querySelector("#back").addEventListener("click",onBack);
