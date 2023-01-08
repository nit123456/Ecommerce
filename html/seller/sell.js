// __________________________Constan__________________
const taBle= document.querySelector("table");
const dialogForm= document.querySelector(".add-product");

// ________________________Get product from logal Storage____________________
let productSeller= JSON.parse(localStorage.getItem("product"));
console.log(productSeller)

// _____________Save_________________________
let saveProduct=()=>{
    localStorage.setItem("product",JSON.stringify(productSeller));
}
// ______________Show Dialog ADDPRODUCT_____________________
let show=(element)=>{
    element.style.display="block";
}

// ________________hide Dialog ADDPRODUCT____________________
let hide=(element)=>{
    element.style.display="none";
}

// _________________________Loop to create card product of seller_________________________
let showProductSeller=()=>{
    document.querySelector("tbody").remove();
    let tBody=document.createElement("tbody");
    
    for (index in productSeller){
        let trOfTbody=document.createElement("tr");
        trOfTbody.dataset.index = index;
    
        let tdOne=document.createElement("td");
        let img=document.createElement("img");
        img.src=productSeller[index].img;
        tdOne.appendChild(img);
        let name=document.createElement("p");
        name.textContent=productSeller[index].name;
        tdOne.appendChild(name);
    
        let tdTwo=document.createElement("td");
        tdTwo.textContent=productSeller[index].description;
    
        let tdThree=document.createElement("td");
        tdThree.textContent=productSeller[index].size;
    
        let tdFour=document.createElement("td");
        tdFour.textContent="$"+productSeller[index].price;
    
        let tdFive=document.createElement("td");
    
        let iconEdit=document.createElement("i");
        iconEdit.className="fa fa-edit";
        iconEdit.addEventListener("click",editProduct);
        let iconTrash=document.createElement("i");
        iconTrash.className="fa fa-trash";
        iconTrash.addEventListener("click",deleteProduct);
        // ____________Append icon to tdFive_________________
        tdFive.appendChild(iconEdit);
        tdFive.appendChild(iconTrash);
    // _______________Append all Element_____________
        trOfTbody.appendChild(tdOne);
        trOfTbody.appendChild(tdTwo);
        trOfTbody.appendChild(tdThree);
        trOfTbody.appendChild(tdFour);
        trOfTbody.appendChild(tdFive);
        tBody.appendChild(trOfTbody);
        taBle.appendChild(tBody);
    }
}
// _____________Add Pruduct________________
let addProduct=()=>{
    show(dialogForm);
}
// _______________Cancel Product__________________
let cancelProduct=()=>{
    hide(dialogForm);
}
// _________________URL validate input from www.freecodecamp.com ___________________
let validateInputURL=urlString=>{
    try{
        return Boolean(new URL(urlString));
    }
    catch(e){
        return false;
    }
}
// _____________Create Product_________________
let createProduct=()=>{
    
    let newProduct={};
    newProduct.img= document.querySelector("#img").value;
    newProduct.name= document.querySelector("#name").value;
    newProduct.description= document.querySelector("#description").value;
    newProduct.size= document.querySelector("#size").value;
    newProduct.price=document.querySelector("#price").value;
    newProduct.currency= document.querySelector("#currency").value;
    newProduct.star=5;
    let booLean=true;
    if (newProduct.name.length>10){
        alert ("Your product name is too long");
    }
    if (newProduct.img=="" || !(validateInputURL(newProduct.img))){
        booLean=false;
        alert ("Please fill URL image!");
    }
    if (newProduct.size=="Chose"){
        alert ("Please select a size");
        booLean=false;
    }
    if (newProduct.description==""){
        alert ("Please enter a description");
        booLean=false;
    }
    if (newProduct.price<1){
        alert ("Please enter a price");
        booLean=false;
    }
    if (newProduct.currency==""){
            alert ("Please select a currency");
            booLean=false;
    }
    if(booLean){
        productSeller.push(newProduct);
        saveProduct();
        hide(dialogForm);
        showProductSeller();

    }
   
}

// ៌៌៌៌៌៌៌៌៌៌៌៌៌៌៌៌៌__________________Edit Product____________________
let editProduct=(event)=>{
    document.querySelector(".btn-add2").lastElementChild.textContent="EDIT";

    let index=event.target.parentElement.parentElement.dataset.index;
    let product=productSeller[index];
    // ____________Update dialog with product information_______________
    document.querySelector("#img").value=product.img;
    document.querySelector("#name").value=product.name;
    document.querySelector("#description").value=product.description;
    document.querySelector("#size").value=product.size;
    document.querySelector("#price").value=product.price;
    productSeller.splice(index, 1);
    // ____________Show dialog_______________
    show(dialogForm);

}

// _____________add addEventListener to button______________
document.querySelector("#btn").addEventListener("click", addProduct);
document.querySelector(".btn-add2").firstElementChild.addEventListener("click", cancelProduct);
document.querySelector(".btn-add2").lastElementChild.addEventListener("click", createProduct);
// _____________Delete Product____________________
let deleteProduct=(event)=>{
    let index=event.target.parentElement.parentElement.dataset.index;
    productSeller.splice(index,1);
    saveProduct()
    showProductSeller();
}

// __________________Add Product___________________
saveProduct()
showProductSeller()
