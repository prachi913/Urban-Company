// window.addEventListener("load",()=>{

	// })
	
	//let search_name="Home_Painters";
	let search_name=sessionStorage.getItem("abc");
	async function lok(){
		let res=await fetch(`http://localhost:3000/${search_name}`);
		let dat=await res.json();
		document.querySelector(".topper1>h1").innerText=`${search_name.split("_").join(" ")}`;
		if(`./video/${search_name}.webm`){
				console.log("there")
		}
		document.querySelector(".topper2").innerHTML=`
		<video autoplay height="300px" width="580px" loop muted autoplay="autoplay">
				<source src="./video/${search_name||null}.webm" type="video/webm">
			</video>
		`
		render_data(dat);
	}
	lok();

	async function render_data(new_data){
		document.querySelector(".data_DOM").innerHTML="";
		let ss=new_data.map((item)=>{
			return `
			<div class="single_element">
					<div class="data_element">
						<div class="pro_details">
							<h2>${item.Title}</h2>
							<span>${item.rating} ${item.reviews||""}</span>
							<p>${item.price}</p>
							<div class="linehr smallerhr"></div>
							<ul>
								${(item.desc1)?`<li>${item.desc1}</li>`:null}
								${(item.desc2)?`<li>${item.desc2}</li>`:null}
							</ul>
							<span style="color:rgb(110, 66, 229)">View Details</span>
						</div>
						<div class="img_but">
							${(item.Image)?`<div class="d_img"><img class="pd_img" src="${item.Image}" alt=""></div>`: `<div class="d_img"><img class="pd_img" display:"none" alt=""></div>`}
							<div class="addtocart_div"><span>-</span><button data-id="${item.id}" class="addtocart">Add</button><span>+</span></div>
						</div>
					</div>
					<div class="linehr enderhr"></div>
				</div>
			`;
		});
		document.querySelector(".data_DOM").innerHTML=ss.join(" ");
		let buttons=document.querySelectorAll(".addtocart");
		let x=JSON.parse(localStorage.getItem("cart_products"))||{};
		for(let i of buttons){
			i.addEventListener("click",async (e)=>{
				let d=e.path[1].children[1];
				d.innerText=1;
				e.path[1].children[0].style.visibility="visible";
				e.path[1].children[0].addEventListener("click",async ()=>{
					if(Number(d.innerText)==1){
						e.path[1].children[0].style.visibility="hidden";
						e.path[1].children[2].style.visibility="hidden";
						d.innerText="Add";
						for(let j=0;j<x[search_name].length;j++){
							let gg=x[search_name][j].split("-")
							console.log(gg[0]);
							if(gg[0]==i.dataset.id){
								console.log("hello")
								x[search_name].splice(j,1);
							}
						}
						if(x[search_name].length==0){
							delete x[search_name];
							if(Object.keys(x).length==0){
								localStorage.removeItem("cart_products");
							}
							else{
								localStorage.setItem("cart_products",JSON.stringify(x));
							}
						}
						
						let o=await lokesh(x);
						document.querySelector(".final_toal>span").innerHTML=`<strong>${(o)? `₹${o}`:``}</strong>`;
					}
					else{
						d.innerText=Number(d.innerText)-1;
						let ty=x[search_name].map((item)=>{
							let gg=item.split("-")
							if(gg[0]==i.dataset.id){
								return`${i.dataset.id}-${Number(d.innerText)}`
							}
							else{
								return item;
							}
						})
						x[search_name]=ty;
						localStorage.setItem("cart_products",JSON.stringify(x));
						let o=await lokesh(x);
						document.querySelector(".final_toal>span").innerHTML=`<strong>${(o)? `₹${o}`:``}</strong>`;
					}	
				})
				e.path[1].children[2].style.visibility="visible";
				e.path[1].children[2].addEventListener("click",async ()=>{
					d.innerText=Number(d.innerText)+1;
					let ty=x[search_name].map((item)=>{
						let gg=item.split("-")
						if(gg[0]==i.dataset.id){
							return`${i.dataset.id}-${Number(d.innerText)}`
						}
						else{
							return item;
						}
					})
					x[search_name]=ty;
					localStorage.setItem("cart_products",JSON.stringify(x));
					let o=await lokesh(x);
					document.querySelector(".final_toal>span").innerHTML=`<strong>${(o)? `₹${o}`:``}</strong>`;
				});
				// console.log(e.path[1].children[0])
				// console.log(e.path[1].children[2]);//.style.visibility="visible";document.querySelector(".addtocart_div span")
					(!x[search_name]) ? x[search_name]=[`${i.dataset.id}-${1}`]:x[search_name].push(`${i.dataset.id}-${1}`);
				localStorage.setItem("cart_products",JSON.stringify(x));
				let o=await lokesh(x);
				document.querySelector(".final_toal>span").innerHTML=`<strong>${(o)? `₹${o}`:``}</strong>`;
			})
		}
		let o=await lokesh(x);
		document.querySelector(".final_toal>span").innerHTML=`<strong>${(o)? `₹${o}`:``}</strong>`;
		console.log(o);
	}
	
	async function lokesh(x){
		let totalvalue=0;
		if(x[search_name]){
			console.log("i am present");
			return fr=x[search_name].reduce(async (acc,item) => {
					let dat=(await abc(item.split("-")[0]));
					totalvalue+=(Number(dat.price.substring(1,dat.price.length))*Number(item.split("-")[1]));
					acc=totalvalue;
					return acc;
			},0);
			async function abc(u){
				let res=await fetch(`http://localhost:3000/${search_name}/${u}`);
				return dat=await res.json();
			}
		}
		else{
			console.log("i am absent");
		}
		
		
	}