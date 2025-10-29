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
    name:"Barone",
    price:10,
    favourite:false
},
];
localStorage.setItem("Chocolate",JSON.stringify(storedProducts));
}

const container= document.getElementById("productcontainer");
container.innerHTML=``
    
storedProducts.forEach(product=>{
    const card=document.createElement('div');
    card.classList.add('card')
    card.innerHTML=`
    <img src ="${product.imageUrl}" alt="${product.name}" height="200px" width="200px" >
    <div class = "card-body">
      <h3>${product.name}</h3>
      <div class="price">${product.price}</div>
      <button class="like-button" onClick="toggleFavourite()"></button>
    </div>`;
    container.appendChild(card);

});
