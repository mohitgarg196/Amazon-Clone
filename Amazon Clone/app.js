const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

const leftbtn1 = document.querySelector(".btn1-a");
const rightbtn1 = document.querySelector(".btn1-b");

rightbtn1.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide1");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn1.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide1');
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

const leftbtn2 = document.querySelector(".btn2-a");
const rightbtn2 = document.querySelector(".btn2-b");

leftbtn2.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide2");
    conent.scrollLeft -= 1100;
    event.preventDefault();
});
rightbtn2.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide2");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

const leftbtn3 = document.querySelector(".btn3-a");
const rightbtn3 = document.querySelector(".btn3-b");

leftbtn3.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide3");
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

rightbtn3.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide3");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", ()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
}); 

cross.addEventListener("click", ()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
});

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", ()=>{
    black.classList.toggle("active-1"); 
    signin.classList.toggle("active");
    tri.classList.toggle("active");

})