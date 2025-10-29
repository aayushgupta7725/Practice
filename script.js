let globaloffer=25;
document.getElementById("offer").innerText=globaloffer;
localStorage.clear();
let storedProducts = JSON.parse(localStorage.getItem("Chocolate"))||[];
if (storedProducts.length === 0)
{ storedProducts=[
{   id:1,
    imageUrl:"https://th.bing.com/th/id/OIP.Y-Ozt_6EBW8N36v-IZurOwHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    name:"Nestle",
    price:20,
    favourite:false
},
{   id:2,
    imageUrl:"https://tse3.mm.bing.net/th/id/OIP.dncGcONHxZprUK6lC4u3bgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    name:"BarOne",
    price:10,
    favourite:false
},
{    
    id:3,
    imageUrl:"https://m.media-amazon.com/images/I/61Iy5XrzC-L._SL1500_.jpg",
    name:"Cadbury",
    price:100,
    favourite:false,
},
{   
    id:4,
    imageUrl:"https://tse4.mm.bing.net/th/id/OIP.O3pWtf4BSx-cb9tbekbBiQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Ferrero Rocher",
    price:50,
    favourite:false,
},
];
localStorage.setItem("Chocolate",JSON.stringify(storedProducts));
}

const container= document.getElementById("productcontainer");

function toggleFavourite(id){
    storedProducts=storedProducts.map(product=>{
        if(product.id===id)
            product.favourite= !product.favourite;
        return product;
    });
    localStorage.setItem("Chocolate",JSON.stringify(storedProducts));
    displayproduct();
}

function discountprice(price){
    return (price - (price*globaloffer/100)).toFixed(2);
}

function displayproduct(){
container.innerHTML=``
    
storedProducts.forEach(product=>{
    const new1= discountprice(product.price);
    const card=document.createElement('div');
    card.classList.add('card')
    card.innerHTML=`
    <img src ="${product.imageUrl}" alt="${product.name}" height="200px" width="200px" >
    <div class = "card-body">
      <h3>${product.name}</h3>
      <div class="price"><p>₹${new1} <span style="text-decoration: line-through; color:grey;">${product.price}</span><p></div>
      <button class="like-button ${product.favourite?"liked":""}" onClick="toggleFavourite(${product.id})">&#10084</button>
    </div>`;
    container.appendChild(card);
});
};
displayproduct();