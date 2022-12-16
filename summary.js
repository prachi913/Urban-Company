// for address box pop up

// on click cross icon;
document.querySelector("#dwip_cross").addEventListener("click", addressPopClose)

function addressPopClose() {
    document.querySelector(".dwip_address_container").classList.remove("active")
}

//on click add address button
document.querySelector(".dwip_add_address").addEventListener("click", addressPop)

function addressPop() {

    let btn = document.querySelector(".dwip_address_container")
  
        btn.classList.add("active")
    

    // this is for removing all the value of input boxes
    let get_address_data = (identity) => {
        let x = document.querySelector(identity)
        return x;
    }

    get_address_data(".dwip_name").value = null;
    get_address_data(".dwip_pincode").value = null;
    get_address_data(".dwip_mobile").value = null;
    get_address_data(".dwip_locality").value = null;
    get_address_data(".dwip_area").value = null;
    get_address_data(".dwip_city").value = null;
    get_address_data(".dwip_landmark").value = null;
    get_address_data(".dwip_states").value = null;
    get_address_data(".dwip_locality").value = null;
}
//////////////////////////////////////////////////////
// localStorage.setItem("cart_products",JSON.stringify({
//     "Home_Painters":["1-2",],
//     "Electrician":["2-3","3-5"]
//     }))



let new_data=[];
    let total=0;
    let abc=JSON.parse(localStorage.getItem("cart_products"));
    window.addEventListener("load",async ()=>{
        for(let i in abc){
            for(let j=0;j<abc[i].length;j++){
                let x=await lok(i,abc[i][j].split("-")[0],abc[i][j].split("-")[1])
                new_data.push(x);
            }
        }
        loke(new_data);
       
        let tr = document.querySelectorAll('.box');
        let trh= document.querySelectorAll('.cart_dwip');
       
        calu();

        
        for(let i in tr){
          tr[i].children[0].addEventListener("click",(e)=>{
            window.location.href="./lokesh.html";
            let new_ft=[];
            tr[i].children[1].value--;
            e.path[2].children[3].innerText=tr[i].children[1].value*e.path[2].children[3].dataset.id;
            calu();
            if(tr[i].children[1].value!=0){
                for(let t=0;t<abc[e.path[1].attributes[0].value].length;t++){
                    if(abc[e.path[1].attributes[0].value][t].split("-")[0]==e.path[1].id){
                        new_ft.push(`${e.path[1].id}-${tr[i].children[1].value}`)
                    }
                    else{
                        new_ft.push(abc[e.path[1].attributes[0].value][t])
                    }   
                }
                abc[e.path[1].attributes[0].value]=new_ft;
                localStorage.setItem("cart_products",JSON.stringify(abc));
                window.location.reload();
            }
            else{
                for(let t=0;t<abc[e.path[1].attributes[0].value].length;t++){
                    if(abc[e.path[1].attributes[0].value][t].split("-")[0]==e.path[1].id){
                        abc[e.path[1].attributes[0].value].splice(t,1);
                    }
                }
                if(abc[e.path[1].attributes[0].value].length==0){
                    delete abc[e.path[1].attributes[0].value]
                }
                localStorage.setItem("cart_products",JSON.stringify(abc));
                window.location.reload();
            }
            })
           tr[i].children[2].addEventListener("click",(e)=>{
            let new_ft=[];
            tr[i].children[1].value++;
            e.path[2].children[3].innerText=tr[i].children[1].value*e.path[2].children[3].dataset.id;
            console.log(new_ft);
            calu();
            for(let t=0;t<abc[e.path[1].attributes[0].value].length;t++){
                if(abc[e.path[1].attributes[0].value][t].split("-")[0]==e.path[1].id){
                    new_ft.push(`${e.path[1].id}-${tr[i].children[1].value}`)
                }
                else{
                    new_ft.push(abc[e.path[1].attributes[0].value][t])
                }
            }
            abc[e.path[1].attributes[0].value]=new_ft;
            localStorage.setItem("cart_products",JSON.stringify(abc));
            window.location.reload();
            })
        }
        function calu(){
          let sr=0;
          for(let i of trh){
            sr=sr+Number(i.children[3].innerText);
          }
          document.querySelector(".dwip_all_total_number").innerText=sr;
        }    
    })
   
   
    async function lok(f,g,h){
    let res=await fetch(`http://localhost:3000/${f}/${g}`);
    let dat=await res.json();
        total+=(Number(dat.price.substring(1,dat.price.length-1)));
            return `<div class="cart_dwip">
                      <img src="${dat.Image}"/>
                      <h4>${dat.Title}</h4>
                      <div name="${f}" id="${dat.id}" class="box">
                            <div class = "dec_button button">-</div>
                            <input type="text"  value="${h}" class = "input-filed">
                            <div class = "inc_button button">+</div>
                      </div>
                      <p data-id="${Number(dat.price.substring(1,dat.price.length-1))}">${Number(dat.price.substring(1,dat.price.length-1))*Number(h)}</p>
                   </div>`
    }
     
    function loke(new_data){
        document.querySelector(".hj").innerHTML=new_data.join(" ");
    }
   

let addressData = JSON.parse(localStorage.getItem("addressData")) || []
class obj {

    constructor(name, mobile, pin, area, land, alter, city, state, local) {
        this.name = name;
        this.mobile = mobile;
        this.pincode = pin;
        this.area = area;
        this.locality = local;
        this.alternate = alter;
        this.city = city;
        this.state = state;
        this.landmark = land;
    }

}

saveAddress = () => {
    // event.preventDefault()
    let get_address_data = (identity) => {
        let x = document.querySelector(identity)
        return x;
    }

    let name = get_address_data(".dwip_name").value;
    let mobile = get_address_data(".dwip_pincode").value;
    let pincode = get_address_data(".dwip_mobile").value;
    let area = get_address_data(".dwip_locality").value;
    let locality = get_address_data(".dwip_area").value;
    let alternate = get_address_data(".dwip_city").value;
    let city = get_address_data(".dwip_landmark").value;
    let state = get_address_data(".dwip_states").value;
    let landmark = get_address_data(".dwip_locality").value;

    // getting the data and store it into local storage;
    let d1 = new obj(name, mobile, pincode, area, locality, alternate, city, state, landmark)
    addressData.push(d1)
    localStorage.setItem("addressData", JSON.stringify(addressData))



    // get the address box where i have to append the data;
    let addressBox = document.querySelector(".dwip_address_insdie_box")
    addressBox.innerHTML = null

    // creating the p tag where i can insert the address;
    let para = document.createElement("p")
    para.setAttribute("class", 'dwip_address_para')
    para.innerText = ` ${name} ${area} ${landmark} ${locality} ${city} ${pincode}...`

    // creating the button to change the address;
    let button = document.createElement("button")
    button.innerText = "Change"
    button.addEventListener("click", () => // function to on click change button open the address popup
    {
        document.querySelector(".dwip_address_container").classList.add("active")
    })
    button.setAttribute("class", "dwip_change_address_to_para")


    //append the data to address button
    addressBox.append(para, button)
    addressBox.style.visibility = "visible"
}


function nextPayment()
{
   
    let onet=JSON.parse(localStorage.getItem("cart_products"));
    localStorage.clear("cart_products");
    localStorage.setItem("final_products",JSON.stringify(onet));
    window.location.href = "paymentGateway.html";
}



