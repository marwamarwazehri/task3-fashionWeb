let bar=document.querySelector('.bar');
let sidebar=document.querySelector('.sidebar');
let cancel=document.querySelector('.cancel');

let catlist=document.querySelectorAll('.cat-list li');
let lineEffect=document.querySelector('.lineEffect');

let eightItem=document.querySelector('.eightItem');


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


let arrleft=document.querySelector('.arr-left');
let arrright=document.querySelector('.arr-right');
let reviewdiv=document.querySelector('.review-div');


bar.addEventListener("click",()=>{
    bar.style.display="none";
    sidebar.style.display="flex";
})

cancel.addEventListener("click",()=>{
    bar.style.display="block";
    sidebar.style.display="none";
})



function checkScreenWidth() {
    if (window.innerWidth > 860) {
        bar.style.display = "none";
        sidebar.style.display = "none";
    } else{
        bar.style.display = "block";
    }
}

// Check screen width on page load
checkScreenWidth();


window.addEventListener('resize', checkScreenWidth);


catlist.forEach((ele)=>{

    ele.addEventListener("click",()=>{
        
        catlist.forEach((element)=>{
            element.classList.remove('lineEffect');
        })

        ele.classList.add('lineEffect');

        let filteredarray=Itemsarray.filter(child=>child.category===ele.innerHTML);
        showItem(filteredarray);
        
       
})

})


function showItem(categorizedArray){

    eightItem.innerHTML="";

   categorizedArray.map((item)=>{
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

        eightItem.appendChild(itemcon);
})
    
}


window.addEventListener("load", () => {
    let filteredArray = Itemsarray.filter(child => child.category === "HOT");
    showItem(filteredArray);
});


arrleft.addEventListener("click",()=>{
    reviewdiv.style.scrollBehavior="smooth"
    reviewdiv.scrollLeft -= 500; 
});

arrright.addEventListener("click",()=>{
    reviewdiv.style.scrollBehavior="smooth"
    reviewdiv.scrollLeft += 500; 
});



let isDown = false;
let startX;
let scrollLeft;

reviewdiv.addEventListener("mousedown", (e) => {
    isDown = true;
    reviewdiv.classList.add("active"); 
    startX = e.pageX - reviewdiv.offsetLeft;
    scrollLeft = reviewdiv.scrollLeft;
});

reviewdiv.addEventListener("mouseleave", () => {
    isDown = false;
    reviewdiv.classList.remove("active");
});

reviewdiv.addEventListener("mouseup", () => {
    isDown = false;
    reviewdiv.classList.remove("active");
});

reviewdiv.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - reviewdiv.offsetLeft;
    const walk = (x - startX) * 2; 
    reviewdiv.scrollLeft = scrollLeft - walk;
});



// Touch events for mobile
reviewdiv.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - reviewdiv.offsetLeft;
    scrollLeft = reviewdiv.scrollLeft;
});

reviewdiv.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - reviewdiv.offsetLeft;
    const walk = (x - startX) * 2; 
    reviewdiv.scrollLeft = scrollLeft - walk;
});

reviewdiv.addEventListener("touchend", () => {
    isDown = false;
});


