// -------------------------------Create Product--------------------------
// _________CONTANT___________
const classProduct= document.querySelector(".product");
const containerDetail= document.querySelector(".container-detail");
const select= document.querySelector("#select");

// __________Create Variable___________
let product=[{img:"../../pic/shoe2.png",
              name:"Deny",price:200,description:"quilted leather crossbody bag",star:5,size:"XXXX",currency:"$",},
            {img:"../../pic/shoegirl3.png",
              name:"Chanel",price:40,description:"2021-2022 Coco top-handle bag",star:5,size:"XXXX",currency:"$"},
            {img:"../../pic/shoe1.png",
              name:"Nike",price:50,description:"Dunk Low Retro sneakers",star:5,size:"XXXX",currency:"$"},
            {img:"../../pic/shoegirl1.png",
             name:"Barrow",price:40,description:"drawstring-hem padded jacket",star:5,size:"XXXX",currency:"$"},
             {img:"../../pic/shoegirl2.png",
             name:"Deny",price:100,description:"quilted leather crossbody bag",star:5,size:"XXXX",currency:"$"},
           {img:"../../pic/shoegirl4.png",
             name:"Chanel",price:124,description:"2021-2022 Coco top-handle bag",star:5,size:"XXXX",currency:"$"},
           {img:"../../pic/shoeboy2.png",
             name:"Nike",price:30,description:"Dunk Low Retro sneakers",star:5,size:"XXXX",currency:"$"},
           {img:"../../pic/boygirl1.png",
            name:"Barrow",price:24,description:"drawstring-hem padded jacket",star:5,size:"XXXX",currency:"$"}];
let cart=[];

// ________________Display Product___________________
let displayProduct=()=>{
    let showProduct=document.createElement("div");
    showProduct.className="show-product";
   for(index in product){
        // ________Create Element___________
        let cardProduct= document.createElement("div");
        cardProduct.className="card-product";
        cardProduct.dataset.index = index;

        let image= document.createElement("div");
        image.className="img";

        let img= document.createElement("img");
        img.src=product[index]["img"];
        image.appendChild(img);
        // console.log(image);

        let information=document.createElement("div");
        information.className="information";

        let nameAndPrice=document.createElement("div");
        nameAndPrice.className="name-price";

        let p1=document.createElement("p");
        p1.textContent=product[index]["name"];

        let p2=document.createElement("p");
        p2.textContent=product[index].currency+product[index]["price"];

        nameAndPrice.appendChild(p1);
        nameAndPrice.appendChild(p2);

        let starRating=document.createElement("div");
        starRating.className="star-rating";

        for (let i=0;i< product[index]["star"];i++){
            let icon = document.createElement("i");
            icon.className="fa fa-star"
            starRating.appendChild(icon);
            
        }
        
        let classButton=document.createElement("div");
        classButton.className="button";

        let button1=document.createElement("button");
        button1.textContent="Details";
        button1.addEventListener("click",detailInfo);
        classButton.appendChild(button1);

        let button2=document.createElement("button");
        button2.textContent="Cart";
        button2.addEventListener("click", addCart)
        classButton.appendChild(button2);
        // ___________Append Child___________
        information.appendChild(nameAndPrice);
        information.appendChild(starRating);
        information.appendChild(classButton)
        cardProduct.appendChild(image);
        cardProduct.appendChild(information);
        showProduct.appendChild(cardProduct);
        // console.log(showProduct);
    }
    classProduct.appendChild(showProduct);
}

// ____________________ hide and show__________________
let hide=(element)=>{
    element.style.display="none";
}
let show=(element)=>{
    element.style.display="block";
}

// ___________________Details information__________________
let detailInfo=(event)=>{
    show(containerDetail);
    let index =event.target.parentElement.parentElement.parentElement.dataset.index;
    document.querySelector(".img-left img").src=product[index].img;
    document.querySelector(" #name").textContent=product[index].name;
    document.querySelector("#price").textContent=product[index].price;
    document.querySelector("#description").textContent=product[index].description;
    document.querySelector("#size").textContent=product[index].size;
    
}
// _________________Back from detail____________________
let onBack=()=>{
    hide(containerDetail);
}
document.querySelector("#back").addEventListener("click",onBack);
// _______________Function add cart_____________
let addCart=(event)=>{
    let newCart={};
    let index= event.target.parentElement.parentElement.parentElement.dataset.index;
    newCart.img=product[index].img;
    newCart.name=product[index].name;
    newCart.price=product[index].price;
    newCart.description=product[index].description;
    newCart.size=product[index].size;
    cart.push(newCart)

    saveCart()
    let message= newCart.name+" added to your cart!";
    alert(message);

}
document.querySelector("#cart").addEventListener("click", addCart);
// _______________Save Product_______________________
let saveProduct=()=>{
    localStorage.setItem("product", JSON.stringify(product));
    // localStorage.setItem("cart", JSON.stringify(cart));
}
// ______________Save Cart____________________
let saveCart=()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
}
// _______________Reload Product_______________
let reloadProduct=()=>{
    let storeProduct= JSON.parse(localStorage.getItem("product"));
    let storeCart= JSON.parse(localStorage.getItem("cart"));
    if (storeProduct !==null){
        product=storeProduct;
    }
    if (storeCart!==null){
        cart=storeCart;
    }

};

// ________Variable Const________
const searchProductInput= document.querySelector("#search");
const showProduct = document.querySelector(".show-product");

// ___________Function for searchProduct__________
let searchProduct =()=>{
    let nameProduct= searchProductInput.value.toUpperCase();
    // _______Loop on all class card-product________
    let allCardProduct = document.querySelectorAll(".card-product");
    for(let i=0;i<allCardProduct.length;i++){
        let card= allCardProduct[i].lastElementChild.firstElementChild.firstElementChild.textContent.toLocaleUpperCase();
        if (card.indexOf(nameProduct)>-1){
            allCardProduct[i].style.display="";
        }else{
            allCardProduct[i].style.display="none";
        }
    }
}
// ________________Sort Product___________________
let sortProduct=()=>{
    let selectedValue= Number(select.value);
    let allCardProduct = document.querySelectorAll(".card-product");
    for(let i=0;i<allCardProduct.length ;i++){
        let card= allCardProduct[i].lastElementChild.firstElementChild.lastElementChild.textContent.trim();
        let cardPrice= Number(card.substring(1));
        if (cardPrice<=selectedValue || cardPrice==0){
            allCardProduct[i].style.display="";
        }else{
            allCardProduct[i].style.display="none";
        }
    }
}
// _______AddeventListener to searchProductInput____________
searchProductInput.addEventListener("keyup", searchProduct);
saveProduct()
reloadProduct()
displayProduct()