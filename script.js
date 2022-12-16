const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStrat = false, prevpageX, preScrollLeft;
let firstImgWidth = firstImg.clientWidth + 28;
arrowIcons.forEach(icon =>{
    icon.addEventListener("click", ()=>{
       carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
    });
});

const dragStart = (e)=>{
    isDragStrat = true;
    prevpageX = e.pageX;
    preScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
   
    if(!isDragStrat) return;
    e.preventDefault();
    let positionDiff =  e.pageX - prevpageX;
    carousel.scrollLeft =  preScrollLeft - positionDiff ;
    console.log(e.pageX)
}
const dragStop = ()=>{
    isDragStrat = false;
}
carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",dragStop);

window.addEventListener("load",()=>{

})

let Electrican = document.getElementById("Electrican");
let HomePainting = document.getElementById("HomePainting");
let CleaningPest = document.getElementById("CleaningPest");
let Ac = document.getElementById("Ac")
const sidebar = document.getElementById("sidebar")
const sidebarTwo = document.getElementById("sidebarTwo")

CleaningPest.onclick = function(){
   CleaningPest.classList.toggle("active");
   sidebar.classList.toggle("active");

}

Ac.onclick = function(){
    Ac.classList.toggle("active");
    sidebarTwo.classList.toggle("active");
 
 }

 Electrican.onclick = function(){
    sessionStorage.setItem("Electrican",Electrican.Electrican)
    console.log(sessionStorage.getItem("Electrican"))
 }
 
 CleaningPest.addEventListener("click",()=>{
    let KitchenCleaning = document.getElementById("KitchenCleaning")
    let SofaCleaning = document.getElementById("SofaCleaning")
    let BathroomCleaning = document.getElementById("BathroomCleaning")
    let FullhomeCleaning = document.getElementById("FullhomeCleaning")
    let DisinfectionService = document.getElementById("DisinfectionService")
    console.log(KitchenCleaning)
    KitchenCleaning.onclick = function(){
        sessionStorage.setItem("abc","Kitchen_Cleaning")
        console.log(sessionStorage.getItem("KitchenCleaning"))
    }
    SofaCleaning.onclick = function(){
        sessionStorage.setItem("abc","Sofa_Cleaning")
    }
    BathroomCleaning.onclick = function(){
        sessionStorage.setItem("abc","Bathroom_Cleaning")
    }
    FullhomeCleaning.onclick = function(){
        sessionStorage.setItem("abc","Fullhome_Cleaning")
    }
    DisinfectionService.onclick = function(){
        sessionStorage.setItem("abc","Disinfection_Service")
    }
 })

 Ac.addEventListener("click",()=>{
    let ACapplications = document.getElementById("AC-applications")
    let AirConditioner = document.getElementById("Air-Conditioner")
    let Geyser = document.getElementById("Geyser")
    
    ACapplications.onclick = function(){
        sessionStorage.setItem("abc","AC_applications")
    }
    AirConditioner.onclick = function(){
        sessionStorage.setItem("abc","Air_Conditioner")
    }
    Geyser.onclick = function(){
        sessionStorage.setItem("abc","Geyser")
    }

 })

fetch

// Register As Proffesional

// let regis = document.getElementById("registerPro")

// regis.addEventListener("click",()=>{
//     window.location.assign("registerproff.html");
//     // document.querySelector(".transform-box").style.transform = translateY("100px")
// })


// let visibleText = document.querySelector(".mybox-para")
// console.log(visibleText)
// // let invisi = document.querySelectorAll(".box-my")

// // visibleText.addEventListener("click",{
// //     invisi.innerHTML = ""
// // })

