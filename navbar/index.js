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

function ad(){
    let arr=["lokesh@admin","prachi@admin","dwip@admin","uma@admin","sandeep@admin"]
    if(arr.includes(document.querySelector(".logologinloginjjjj").children[1].children[0].value)){
        var pass = prompt(`hello admin-${document.querySelector(".logologinloginjjjj").children[1].children[0].value.split("@")[0]} Enter password`);
        if(pass==1234){
            
            window.open("./admin.html");
           
        }
    }
    else{
        localStorage.setItem("service_company_user",document.querySelector(".logologinloginjjjj").children[1].children[0].value)
        window.location.reload();
    }
}

let usr=localStorage.getItem("service_company_user");
document.querySelector("#login1").innerText=(usr)?`user-${usr}`:"Login /Sign Up";