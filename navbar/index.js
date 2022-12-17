let dropcityid=document.getElementById("dropcityid")
dropcityid.onclick=function(){
    funfun()
}

let dropcityid_dropdown_container=document.getElementById("dropcityid_dropdown-container")
function funfun(){
 dropcityid_dropdown_container.classList.toggle("container")
}
let chlosidehere=document.getElementById("chlosidehere")
chlosidehere.onclick=function(){
    gungun()
}
let loginsliding=document.getElementById("loginsliding")
function gungun(){
    loginsliding.classList.toggle("logindddd")
}
let login1=document.getElementById("login1")
login1.onclick=function(){
    login1open()
}
let kikikiki=document.getElementById("kikikiki")
let boodyyy=document.querySelector("body")
function login1open(){
    kikikiki.classList.toggle("logoinopen")
boodyyy.classList.toggle("bodddy")
}
let xxxxyx=document.getElementById("xxxxyx")
xxxxyx.onclick=function(){
    
    kikikiki.style.display="none"
    boodyyy.style.overflow="visible"
    location.reload();
}