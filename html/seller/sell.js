// __________________________Constan__________________
const taBle= document.querySelector("table");

// ________________________Get product from logal Storage____________________
let productSeller= JSON.parse(localStorage.getItem("product"));
console.log(productSeller);

let saveProduct=()=>{
    localStorage.setItem("product",JSON.stringify(productSeller));
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
    
        let tdTwo=document.createElement("td");
        tdTwo.textContent=productSeller[index].description;
    
        let tdThree=document.createElement("td");
        tdThree.textContent=productSeller[index].size;
    
        let tdFour=document.createElement("td");
        tdFour.textContent="$"+productSeller[index].price;
    
        let tdFive=document.createElement("td");
    
        let iconEdit=document.createElement("i");
        iconEdit.className="fa fa-edit";
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
        // console.log(tBody);
    }
}
// _____________Delete Product____________________
let deleteProduct=(event)=>{
    let index=event.target.parentElement.parentElement.dataset.index;
    console.log(index);
    productSeller.splice(index,1);
    saveProduct()
    showProductSeller();
}

// __________________Add Product___________________

showProductSeller()
