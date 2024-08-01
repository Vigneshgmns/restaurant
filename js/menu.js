const menuItem=[{
    title:"Smashed Avo",
    image:"../img/smashed-avo.png",
    price:20,
    id:0,
    quantity:1,
},{
    title:"Yin & Yang",
    image:"../img/yin-yang.png",
    price:30,
    id:1,
    quantity:1,
},{
    title:"Pancakes",
    image:"../img/pancakes.png",
    price:25,
    id:2,
    quantity:1,
},{
    title:"Huevos Rancheros",
    image:"../img/huevos-rancheros.png",
    price: 35,
    id:3,
    quantity:1,
},{
    title:"Rancheros (Tofu)",
    image:"../img/rancheros-tofu.png",
    price:45,
    id:4,
    quantity:1,
},{
    title:"Breakkie Egg Roll",
    image:"../img/breakkie-egg-roll.png",
    price:40,
    id:5,
    quantity:1,
},{
   title:"Breakkie Veggie Roll",
   image:"../img/breakkie-veggie-roll.png",
   price:55,
   id:6,
   quantity:1,
},{
    title:"Burrito",
    image:"../img/burrito.png",
    price:50,
    id:7,
    quantity:1,
}];

const menuContainerBox=document.querySelector(".menu-container-box");

menuItem.forEach((menuItem)=>{
    const menuItemBox=document.createElement("div");
    menuItemBox.classList.add("menu-item-box");

    const image=document.createElement("img");
    image.src=menuItem.image;
    image.alt=menuItem.title;
    menuItemBox.appendChild(image);

    const title=document.createElement("p");
    title.innerText=menuItem.title;
    title.style.fontSize="20px";    
    title.style.textAlign="center";
    menuItemBox.appendChild(title);  
    
    menuItemBox.addEventListener("click",()=>{
       const storeItemsStrings=localStorage.getItem("storeMenuItems");
       let storedItems=[];
       if(storeItemsStrings){
           storedItems=JSON.parse(storeItemsStrings);
       }
       storedItems.push(menuItem);
       localStorage.setItem("storeMenuItems",JSON.stringify(storedItems));
    
    }); 


 menuContainerBox.appendChild(menuItemBox);
});


const handelHome=()=> {
    window.location.href = "../html/index.html";
}

const handelCart=()=>{
    window.location.href = "../html/cart.html";
}

const handelLocation=()=>{
    window.location.href = "../html/location.html";
}

const handelExit=()=>{
    window.location.href = "../html/index.html"; 
}


if(window.location.pathname === "/html/menu.html"){
    const cartImg=document.querySelector(".menu-icon");
    cartImg.style.backgroundColor="#F1D5BB";
}