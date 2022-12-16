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



// Register As Proffesional

let regis = document.getElementById("registerPro")

regis.addEventListener("click",()=>{
    window.location.assign("registerproff.html");
    // document.querySelector(".transform-box").style.transform = translateY("100px")
})


// let visibleText = document.querySelector(".mybox-para")
// console.log(visibleText)
// // let invisi = document.querySelectorAll(".box-my")

// // visibleText.addEventListener("click",{
// //     invisi.innerHTML = ""
// // })

