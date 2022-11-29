// -------------------------------Create Product--------------------------
// _________CONTANT___________
const classProduct= document.querySelector(".product");


// __________Create Variable___________

let product=[{img:"https://spng.pngfind.com/pngs/s/592-5924959_1680d-laptop-backpack-backpack-hd-png-download.png",
              name:"DENY",price:200,detail:"quilted leather crossbody bag",star:5},
            {img:"https://www.pngfind.com/pngs/m/541-5412120_college-bag-hawlander-backpack-hd-png-download.png",
              name:"Chanel Pre-Owned",price:12403,detail:"2021-2022 Coco top-handle bag",star:5},
            {img:"https://www.pngmart.com/files/6/Shoe-PNG-HD.png",
              name:"Nike",price:213,detail:"Dunk Low Retro sneakers",star:5},
            {img:"https://freepngimg.com/thumb/jacket/152511-leather-jacket-biker-png-file-hd.png",
             name:"BARROW",price:249,detail:"drawstring-hem padded jacket",star:5}];

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
// _______________Save Product_______________________
let saveProduct=()=>{
    localStorage.setItem("product", JSON.stringify(product));
}

// _______________Reload Product_______________
let reloadProduct=()=>{
    let storeProduct= JSON.parse(localStorage.getItem("product"));
    if (saveProduct !==null){
        product=storeProduct;
    }
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
        let card= allCardProduct[i].lastElementChild.firstElementChild.firstElementChild.textContent;
        if (card.indexOf(nameProduct)>-1){
            allCardProduct[i].style.display="";
        }else{
            allCardProduct[i].style.display="none";
        }
    }
}
// _______AddeventListener to searchProductInput____________
searchProductInput.addEventListener("keyup", searchProduct)
saveProduct()
displayProduct()