let Itemsarray=[
    {
     id:1,
     category:"HOT",
     image:'./images/sec4Girl1.png',
     name:'Spread Collar Shirt',
     price:'$48.99',
     number:'5.0'
 },

 {
    id:2,
    category:"HOT",
    image:'./images/sec4Girl7.png',
    name:'White Solid Formal Shirt',
    price:'$39.00',
    number:'4.9'
},

{
    id:3,
    category:"HOT",
    image:'./images/sec4Girl3.png',
    name:'Shine On Me Blouse',
    price:'$42.99',
    number:'4.8'
},

{
    id:4,
    category:"HOT",
    image:'./images/sec4Girl4.png',
    name:'Gray Solid Padded Jacket',
    price:'$32.99',
    number:'4.7'
},

{
    id:5,
    category:"HOT",
    image:'./images/sec4Girl5.png',
    name:'Printed Loose T-shirt',
    price:'$39.99',
    number:'5.0'
},

{
    id:6,
    category:"HOT",
    image:'./images/sec4Girl6.png',
    name:'Summer Wind Crop Shirt',
    price:'$39.95',
    number:'4.7'
},

{
    id:7,
    category:"HOT",
    image:'./images/sec4Girl7.png',
    name:'Tailored Jacket',
    price:'$46.00',
    number:'4.9'
},

{
    id:8,
    category:"HOT",
    image:'./images/sec4Girl8.png',
    name:'Solid Round Neck T-shirt',
    price:'$36.00',
    number:'5.0'
},

{
    id:9,
    category:"SALE",
    image:'./images/GITLSALE.jfif',
    name:'Solid Round Neck T-shirt',
    price:'$36.00',
    number:'5.0'
},

{
    id:10,
    category:"NEW ARRIVALS",
    image:'./images/NEWaRRIVALgIRL.jfif',
    name:'Solid Round Neck T-shirt',
    price:'$36.00',
    number:'5.0'
},

{
    id:11,
    category:"ACCESSORIES",
    image:'./images/ACCESORYGIRL.jpg',
    name:'Solid Round Neck T-shirt',
    price:'$36.00',
    number:'5.0'
},

]

let shopDiv=document.querySelector('.shopDiv');

function pageshop(){

Itemsarray.map((item)=>{
        let itemcon=document.createElement('div');
        itemcon.classList.add('item-con');

        let imageG=document.createElement('img');
        imageG.src=item.image;
        imageG.classList.add('imageSize');
        itemcon.appendChild(imageG);


        let itemcontext=document.createElement('div');
        itemcontext.classList.add('item-con-text');

        let name=document.createElement('h5');
         name.innerHTML=item.name;
         itemcontext.appendChild(name);

         let price=document.createElement('div');
         price.classList.add('price');

         let spanprice=document.createElement('span');
         spanprice.innerHTML=item.price;

         let spanline=document.createElement('span');
         spanline.innerHTML='|'

         price.appendChild(spanprice);
         price.appendChild(spanline);

         let withStar=document.createElement('div');
         withStar.classList.add('withStar');

         let spannumber=document.createElement('span');
         spannumber.innerHTML=item.number;

         withStar.appendChild(spannumber);

         let imagestar=document.createElement('img');
        imagestar.src='./images/star.png';
        withStar.appendChild(imagestar);

        price.appendChild(withStar);

        itemcontext.appendChild(price);

        itemcon.appendChild(itemcontext);

        shopDiv.appendChild(itemcon);
})
    
}


document.addEventListener('DOMContentLoaded', () => {
    pageshop();
})
