// -------------------------------Create Product--------------------------
// _________CONTANT___________
const classProduct= document.querySelector(".product");


// __________Create Variable___________
let product=[{img:"https://spng.pngfind.com/pngs/s/592-5924959_1680d-laptop-backpack-backpack-hd-png-download.png",
              name:"DENY",price:200,description:"quilted leather crossbody bag",star:5,size:"XXXX"},
            {img:"https://www.pngfind.com/pngs/m/541-5412120_college-bag-hawlander-backpack-hd-png-download.png",
              name:"Chanel Pre-Owned",price:12403,description:"2021-2022 Coco top-handle bag",star:5,size:"XXXX"},
            {img:"https://freepngimg.com/thumb/women_shoes/3-2-women-shoes-free-download-png.png",
              name:"Nike",price:213,description:"Dunk Low Retro sneakers",star:5,size:"XXXX"},
            {img:"https://freepngimg.com/thumb/jacket/152511-leather-jacket-biker-png-file-hd.png",
             name:"BARROW",price:249,description:"drawstring-hem padded jacket",star:5,size:"XXXX"},
             {img:"https://spng.pngfind.com/pngs/s/592-5924959_1680d-laptop-backpack-backpack-hd-png-download.png",
             name:"DENY",price:200,description:"quilted leather crossbody bag",star:5,size:"XXXX"},
           {img:"https://www.pngfind.com/pngs/m/541-5412120_college-bag-hawlander-backpack-hd-png-download.png",
             name:"Chanel Pre-Owned",price:12403,description:"2021-2022 Coco top-handle bag",star:5,size:"XXXX"},
           {img:"https://www.freepngimg.com/thumb/bag/130700-bag-school-black-download-hd.png",
             name:"Nike",price:213,description:"Dunk Low Retro sneakers",star:5,size:"XXXX"},
           {img:"https://freepngimg.com/thumb/jacket/152511-leather-jacket-biker-png-file-hd.png",
            name:"BARROW",price:249,description:"drawstring-hem padded jacket",star:5,size:"XXXX"}];
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
        console.log(cardProduct);

        let image= document.createElement("div");
        image.className="img";

        let img= document.createElement("img");
        img.src=product[index]["img"];
        image.appendChild(img);
        console.log(image);

        let information=document.createElement("div");
        information.className="information";

        let nameAndPrice=document.createElement("div");
        nameAndPrice.className="name-price";

        let p1=document.createElement("p");
        p1.textContent=product[index]["name"];

        let p2=document.createElement("p");
        p2.textContent="$"+product[index]["price"];

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
    
};
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

}
// _______________Save Product_______________________
let saveProduct=()=>{
    localStorage.setItem("product", JSON.stringify(product));
    // localStorage.setItem("cart", JSON.stringify(cart));
}

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
// ______________Function Of Product Carted___________________
let productCarted=()=>{

}
// ________Variable Const________
const searchProductInput= document.querySelector("#search");
const showProduct = document.querySelector(".show-product");

// ___________Function for searchProduct__________
let searchProduct =()=>{
    let nameProduct= searchProductInput.value.toUpperCase();
    console.log(nameProduct);
    
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
// _______AddeventListener to searchProductInput____________
searchProductInput.addEventListener("keyup", searchProduct);

// saveProduct()
reloadProduct()
displayProduct()