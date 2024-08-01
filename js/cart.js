const handelHome =()=>{
    window.location.href ="../html/index.html";
}
const handelMenu =()=>{
    window.location.href="../html/menu.html";
}

const handelLocation =()=>{
    window.location.href="../html/location.html";
}

const handelExit =()=>{
    window.location.href="../html/index.html";
}

if(window.location.pathname === "/html/cart.html"){
    const cartImg=document.querySelector(".cart-icon");
    cartImg.style.backgroundColor="#F1D5BB";
}


document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("storeMenuItems"));
    
    const cartContainer = document.querySelector(".cart-container")

    const totalPriceContainer=document.querySelector(".total-price")
  
    const renderItems = () => {
      cartContainer.innerHTML = ""
      let totalPrice=0;

     cartItems.map((cartItem, index) =>{
        const cartMenuItem=document.createElement("div")
        cartMenuItem.classList.add("cart-menu-item")

        const image=document.createElement("img")
        image.classList.add("cart-menu-item-image")
        image.src=cartItem.image
        cartMenuItem.appendChild(image)

        const textContainer=document.createElement("div")
        textContainer.classList.add("cart-menu-item-text-container")
        cartMenuItem.appendChild(textContainer)

        totalPrice+=cartItem.price*cartItem.quantity;

        const title=document.createElement("p")
        title.innerText=cartItem.title;
        textContainer.appendChild(title)

        const price=document.createElement("p")
        price.innerText=`$ ${cartItem.price * cartItem.quantity}`
        textContainer.appendChild(price)

       const quantityContainer=document.createElement("div")
       quantityContainer.classList.add("quantity-container")
       cartMenuItem.appendChild(quantityContainer);

       const quantityOuter=document.createElement("div")
       quantityOuter.classList.add("quantity-outer")
       quantityContainer.appendChild(quantityOuter)

       const minus=document.createElement("img")
       minus.src="../img/icon/-.svg"
       minus.addEventListener("click",() => changeQuantity(index,-1))
       quantityOuter.appendChild(minus);

       const quantity=document.createElement("p")
       quantity.classList.add("cart-quantity")
       quantity.innerText=cartItem.quantity
       quantityContainer.appendChild(quantity)

       const quantityInner=document.createElement("div")
       quantityInner.classList.add("quantity-inner")
       quantityContainer.appendChild(quantityInner)

       const plus=document.createElement("img")
       plus.src="../img/icon/+.svg"
       plus.addEventListener("click",() => changeQuantity(index,1))
       quantityInner.appendChild(plus)

       const cancle=document.createElement("div")
       cancle.classList.add("cancle")
       cartMenuItem.appendChild(cancle)

       const remove=document.createElement("img")
       remove.src="../img/icon/cancel.svg"
       remove.addEventListener("click",() => removeItem(index))
       cancle.appendChild(remove)

        cartContainer.appendChild(cartMenuItem);
    
       localStorage.setItem("storeMenuItems",JSON.stringify(cartItems))
     })

     totalPriceContainer.innerText=`$ ${totalPrice}`;
    }

    const changeQuantity=(index,change)=>{
        if(cartItems[index].quantity+change>0){
            cartItems[index].quantity+=change
        }
        renderItems()
    }

    const removeItem=(index)=>{
        cartItems.splice(index,1)
        renderItems()
    }

   renderItems();
})

const confirm=()=>{
    alert("Your order has been confirmed !!");

    localStorage.removeItem("storeMenuItems");
    window.location.href="../html/index.html";
}