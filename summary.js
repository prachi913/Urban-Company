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
        //console.dir(trh[1])
       
        calu();

        //console.dir(tr);
        for(let i in tr){
          tr[i].children[0].addEventListener("click",(e)=>{
            tr[i].children[1].value--;
            e.path[2].children[3].innerText=tr[i].children[1].value*e.path[2].children[3].dataset.id;
            calu();
            })
           tr[i].children[2].addEventListener("click",(e)=>{
            tr[i].children[1].value++;
            e.path[2].children[3].innerText=tr[i].children[1].value*e.path[2].children[3].dataset.id;
            calu();
            })

        }
        function calu(){
          let sr=0;
          for(let i of trh){
            console.log(i.children[3].innerText)
            sr=sr+Number(i.children[3].innerText);
          }
          console.log(sr);
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
                      <div class="box">
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


    // Total CLicks-----------------------

//  <p>
// {/* <button onclick="totalClick(1)">+</button>
// <span id="totalClicks">0</span>
// <button onclick="totalClick(-1)">-</button>
// </p>
//  */}


//let decrementButton = document.getElementsByClassName('dec');
//let box = document.querySelector('.box')

// for(let i=0; i< box; i++){
//     console.dir(box[i]);
// }

// console.dir(decrementButton);
// console.log(incrementButton);

// for(let i=0; i < incrementButton; i++){
//     let button = incrementButton[i];
//     button.addEventListener('click', function(event){

//         let buttonClicked = event.target;
//         // console.log(buttonClicked);

//         let input = buttonClicked.parentElement.children[2];
//         // console.log(input);

//     //     let inputValue = input.value;

//     //     let newValue = parseInt(inputValue) + 1;
//     //    input.value = newValue;
//     })
// }


// for(let i=0; i < decrementButton; i++){
//     let button = decrementButton[i];
//     button.addEventListener('click', function(event){
//         let buttonClicked = event.target;
//         // console.log(buttonClicked);

//         let input = buttonClicked.parentElement.children[2];
//         // console.log(input);

//         let inputValue = input.value;

//         let newValue = parseInt(inputValue) + 1;
//        input.value = newValue;
//     })
// }



// address store in the local system ////////////////////////////
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


///////////////////////////////////////////////////////////////////////////////////




//adding data to data countanier

let totalPrice = 0;
let n = 1;

let data = JSON.parse(localStorage.getItem("user_details"))
// console.log(data)

displayLayout(data)

function displayLayout(data) {

    let container = document.querySelector(".dwip_product_details_contaienr")
    data.forEach((el) => {
        let price = el.p

        let div = document.createElement("div")
        div.setAttribute("class", "dwip_all_content_title_button")



        let div2 = document.createElement("div")
        div2.setAttribute("class", "dwip_title_button_flex")


        let para1 = document.createElement("p")
        para1.innerText = el.data;
        para1.setAttribute("class", "dwip_service_name")


        let div3 = document.createElement("div")
        div3.setAttribute("class", "dwip_button_plus_minus")

        btn1 = document.createElement("button")
        btn1.innerText = "-"
        btn1.setAttribute("class", "dwip_minus")
        btn1.addEventListener("click", function () {
            if (n > 1) {
                n--
                document.querySelector(".dwip_digit").innerText = n

                price = price - el.p
                para2.innerText = `₹ ${price}`
                totalPrice -= Number(el.p)


                let fullprice = document.querySelector(".dwip_product_price")
                fullprice.innerText = `₹ ${totalPrice}`

                let endTotal = document.querySelector(".dwip_all_total_number")
                let tip = document.querySelector(".dwip_tip_price").innerText
                let conv = document.querySelector(".dwip_fee").innerText
                let plus = document.querySelector(".dwip_membership_fee").innerText
                endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
                localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

                endTotal.innerText = "₹" + " " + endTotal.innerText

            }


        })

        head = document.createElement("h3")
        head.innerText = n


        head.setAttribute("class", "dwip_digit")

        btn2 = document.createElement("button")
        btn2.innerText = "+"
        btn2.setAttribute("class", "dwip_plus")
        btn2.addEventListener("click", function () {
            if (n < 3) {
                n++
                price = Number(price) + Number(el.p)
                para2.innerText = `₹ ${price}`
                totalPrice += Number(el.p)
                document.querySelector(".dwip_digit").innerText = n


                let fullprice = document.querySelector(".dwip_product_price")
                fullprice.innerText = `₹ ${totalPrice}`


                let endTotal = document.querySelector(".dwip_all_total_number")
                let tip = document.querySelector(".dwip_tip_price").innerText
                let conv = document.querySelector(".dwip_fee").innerText
                let plus = document.querySelector(".dwip_membership_fee").innerText
                endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
                localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

                endTotal.innerText = "₹" + " " + endTotal.innerText

            }

        })


        div3.append(btn1, head, btn2)
        div2.append(para1, div3)


        let div4 = document.createElement("div")
        div4.setAttribute("class", "dwip_amount_title")

        let para2 = document.createElement("div")
        para2.setAttribute("class", "dwip_price_titile")
        para2.innerText = `₹ ${price}`
        totalPrice += Number(price)

        div4.append(para2)

        div.append(div2, div4)
        container.append(div)


        let detailsDiv = document.createElement("div")
        detailsDiv.setAttribute("class", "dwip_details_in_container")

        let detailsPara = document.createElement("p")
        detailsPara.innerText = el.main_part111

        let detailsPara2 = document.createElement("p")
        detailsPara2.innerText = el.main_part122

        detailsDiv.append(detailsPara, detailsPara2)
        container.append(detailsDiv)
        console.log(totalPrice)

    })



}


////////////////////////adding data of fai //////////////////
class object {

    constructor(data, des1, des2, p) {

        this.data = data;
        this.main_part111 = des1;
        this.main_part122 = des2;
        this.p = p;

    }

}

let user_details = JSON.parse(localStorage.getItem("user_details")) || []
function one() {

    let data = document.querySelector(".heading").innerText
    let main_part111 = ". Beared shaping and styling"
    let main_part122 = ". Trimmer instead of Razzer"
    let p = document.querySelector(".p").innerText

    let d1 = new object(data, main_part111, main_part122, p)
    user_details.push(d1)

    let flag = true;
    for (let i = 0; i < user_details.length; i++) {
        if (d1.data === user_details[i]["data"]) {
            flag == false;
            alert("this item is already added")

            return flag
        }
    }

    if (flag) {
        localStorage.setItem("user_details", JSON.stringify(user_details))
        window.location.reload()
    }



}

function two() {

    let data = document.querySelector(".heading1").innerText
    let main_part111 = ". Head massage for 10 minutes"
    let main_part122 = ". oinling head with almond oil"
    let p = document.querySelector(".p1").innerText

    let d1 = new object(data, main_part111, main_part122, p)
    user_details.push(d1)



    let flag = true;
    for (let i = 0; i < user_details.length; i++) {
        if (d1.data === user_details[i]["data"]) {
            flag == false;
            alert("this item is already added")

            return flag
        }
    }

    if (flag) {
        localStorage.setItem("user_details", JSON.stringify(user_details))
        window.location.reload()
    }

}

function three() {

    let data = document.querySelector(".heading2").innerText
    let main_part111 = ". Clean shave"
    let main_part122 = ". massage of face for 5 minutes"
    let p = document.querySelector(".p2").innerText

    let d1 = new object(data, main_part111, main_part122, p)
    user_details.push(d1)

    let flag = true;
    for (let i = 0; i < user_details.length; i++) {
        if (d1.data === user_details[i]["data"]) {
            flag == false;
            alert("this item is already added")

            return flag
        }
    }

    if (flag) {
        localStorage.setItem("user_details", JSON.stringify(user_details))
        window.location.reload()
    }


}

function four() {

    let data = document.querySelector(".heading3").innerText
    let main_part111 = ". Proper Hiar color"
    let main_part122 = ". Full grey hair coverage"
    let p = document.querySelector(".p3").innerText

    let d1 = new object(data, main_part111, main_part122, p)

    let flag = true;
    for (let i = 0; i < user_details.length; i++) {
        if (d1.data === user_details[i]["data"]) {
            flag == false;
            alert("this item is already added")

            return flag
        }
    }

    if (flag) {
        user_details.push(d1)
        localStorage.setItem("user_details", JSON.stringify(user_details))
        window.location.reload()
    }


}


let fullprice = document.querySelector(".dwip_product_price")
fullprice.innerText = `₹ ${totalPrice}`


let endTotal = document.querySelector(".dwip_all_total_number")
let tip = document.querySelector(".dwip_tip_price").innerText
let conv = document.querySelector(".dwip_fee").innerText
let plus = document.querySelector(".dwip_membership_fee").innerText
endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

endTotal.innerText = "₹" + " " + endTotal.innerText

// const faqs = document.querySelectorAll(".dwip_adding_small_tip_box");

// faqs.forEach((el) => {
//     el.addEventListener("click", () => {
//         el.classList.toggle("active");
//     })
// })


// adding tips via buttons
function thirty()
{

    document.querySelector(".dwip_tip_price").innerText = 30
    let endTotal = document.querySelector(".dwip_all_total_number")
    let tip = document.querySelector(".dwip_tip_price").innerText
    let conv = document.querySelector(".dwip_fee").innerText
    let plus = document.querySelector(".dwip_membership_fee").innerText
    endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
    localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

    endTotal.innerText = "₹" + " " + endTotal.innerText
}

function fifty() {
    document.querySelector(".dwip_tip_price").innerText = 50
    let endTotal = document.querySelector(".dwip_all_total_number")
    let tip = document.querySelector(".dwip_tip_price").innerText
    let conv = document.querySelector(".dwip_fee").innerText
    let plus = document.querySelector(".dwip_membership_fee").innerText
    endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
    localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

    endTotal.innerText = "₹" + " " + endTotal.innerText
}

function hund() {
    document.querySelector(".dwip_tip_price").innerText = 100
    let endTotal = document.querySelector(".dwip_all_total_number")
    let tip = document.querySelector(".dwip_tip_price").innerText
    let conv = document.querySelector(".dwip_fee").innerText
    let plus = document.querySelector(".dwip_membership_fee").innerText
    endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
    localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

    endTotal.innerText = "₹" + " " + endTotal.innerText
}

function onefive() {
    document.querySelector(".dwip_tip_price").innerText = 150
    let endTotal = document.querySelector(".dwip_all_total_number")
    let tip = document.querySelector(".dwip_tip_price").innerText
    let conv = document.querySelector(".dwip_fee").innerText
    let plus = document.querySelector(".dwip_membership_fee").innerText
    endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
    localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText) )

    endTotal.innerText = "₹" + " " + endTotal.innerText
}

// let endTotal = document.querySelector(".dwip_all_total_number")
let pay = document.querySelector(".dwip_add_address_and_slot")
pay.innerText = `Pay ${endTotal.innerText}`


// let's move to next page...............

function nextPayment()
{
    window.location.href = "paymentGateway.html"
}




// plus membership add or remove//////////////////
let count = 0;
function removebtn()
{

    let text = document.querySelector(".dwip_change_text")
   
    count++
    if(count % 2 == 1)
    {
        text.innerText = "Add"
        // document.querySelector(".dwip_tip_price").innerText = 150
        let endTotal = document.querySelector(".dwip_all_total_number")
        let tip = document.querySelector(".dwip_tip_price").innerText
        let conv = document.querySelector(".dwip_fee").innerText
        let plus = document.querySelector(".dwip_membership_fee")
        plus.innerText = 0
        endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus.innerText)
        localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

        endTotal.innerText = "₹" + " " + endTotal.innerText
    }
    else
    {
        text.innerText  = "Remove"
        let endTotal = document.querySelector(".dwip_all_total_number")
        let tip = document.querySelector(".dwip_tip_price").innerText
        let conv = document.querySelector(".dwip_fee").innerText
        let plus = document.querySelector(".dwip_membership_fee")
        plus.innerText = 299
        endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus.innerText)
        localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

        endTotal.innerText = "₹" + " " + endTotal.innerText
    }

}