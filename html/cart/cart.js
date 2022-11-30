// ----------------------Cart Page----------------------//
const myCart= document.querySelector(".all-cart");


// ____________Variables__________________
// let getCarted= JSON.parse(localStorage.getItem("cart"));
// console.log(getCarted)
let cart=JSON.parse(localStorage.getItem("cart"));

// let reloadCart=()=>{
//     let storeCart= JSON.parse(localStorage.getItem("cart"));
//     if (storeCart!==null){
//         cart=storeCart;
//     }
// };


let saveCart=()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
}
// ___________Function carted___________
let customerCard =()=>{
    // _________________Ceate Element__________________
    if (cart!=[]){
        for (index in cart){
            let cardCart= document.createElement("div");
            cardCart.dataset.index = index;
            cardCart.className="card-cart";


            let left= document.createElement("div");
            left.className="left";

            let img= document.createElement("img");
            img.src=cart[index].img;
            left.appendChild(img);

            let right= document.createElement("div");
            right.className= "right";

            let info=document.createElement("div");
            info.className="info";

            // __________Create H3__________
            let h3one=document.createElement("h3");
            h3one.textContent=cart[index].name;
            let h3tow=document.createElement("h3");
            h3tow.textContent="Size";
            let h3three=document.createElement("h3");
            h3three.textContent="Price";


            // __________Create P________
            let pOne= document.createElement("p");
            pOne.textContent=cart[index].description;
            let pTwo= document.createElement("p");
            pTwo.textContent=cart[index].size;
            let pThree= document.createElement("p");
            pThree.textContent="$"+cart[index].price;

            // ________Create i ( trash )_________
            let remove= document.createElement("div");
            remove.className="remove";
            let icon=document.createElement("i");
            icon.className="fa fa-trash";
            icon.addEventListener("click", deleteCart);
            remove.appendChild(icon);

            // _________Append all Element______________
            info.appendChild(h3one);
            info.appendChild(pOne);
            info.appendChild(h3tow);
            info.appendChild(pTwo);
            info.appendChild(h3three);
            info.appendChild(pThree);
            right.appendChild(info);
            right.appendChild(remove);
            cardCart.appendChild(left);
            cardCart.appendChild(right);
            myCart.appendChild(cardCart);
        }
    }
    else{
        let fileEmpty = document.createElement("div");
        fileEmpty.className="file-empty";
        let text=document.createElement("p");
        text.textContent="Your Cart is Empty";

        fileEmpty.appendChild(text);
        myCart.appendChild(fileEmpty);
    }
}
// ________________Function Remove cart______________
let deleteCart=(event)=>{
    let index=event.target.parentElement.parentElement.parentElement.dataset.index;
    console.log(index)
    cart.splice(index, 1);

    saveCart();
    // reloadCart();
    location.reload()
    customerCard()
}
// reloadCart()
customerCard()