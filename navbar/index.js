let dropcityid=document.getElementById("dropcityid").addEventListener("click",funfun)

let dropcityid_dropdown_container=document.getElementById("dropcityid_dropdown-container")
function funfun(){
 dropcityid_dropdown_container.classList.toggle("dropcityid_dropdown-container")
}
// var i;
// for (i = 0; i <dropcityid.length; i++) {
//     dropcityid[i].addEventListener("click", function() {
//         this.classList.toggle("dropcityid_dropdown-container");
//     let dropdownContent=this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }