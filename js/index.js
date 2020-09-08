// Your code goes here
const log=console.log;

// MOUSEOVER SECTION
const logoWork = document.querySelector(".logo-heading")
logoWork.addEventListener("mouseover" , () =>{
logoWork.style.transform = "scale(1.4)";
logoWork.style.tranistion = "all 0.3s";
logoWork.style.color = "lightblue";
});
logoWork.addEventListener("mouseleave", (event) => {
    event.target.style.transform = "scale(1.0)";
    event.target.style.color = "black";
});

// DOUBLE CLICK SECTION 
const navChange = document.querySelector(".nav")
navChange.addEventListener("dblclick", (event)=>{
        event.target.style.color="orange"
        event.preventDefault();
    })

// KEYDOWN SECTION
const entireBody = document.querySelector("body")
entireBody.addEventListener("keydown", (key)=>{
    if(key.keyCode == "65") 
    alert("The 'A' key was pressed")
})

// SCROLL SECTION
window.addEventListener("scroll", () =>{
    const scrollable = document.documentElement.scrollHeight-window.innerHeight;
    const scrolled = window.scrollY;
    
    if(Math.ceil(scrolled) === scrollable){
        alert("You've reached the bottom!")
    }
});

// WHEEL SECTION
const imgContent = document.querySelector("img-content img")
window.addEventListener("wheel", ()=>{
    imgContent.src="https://picsum.photos/400/300"
})

// RESIZE SECTION
const secImg = document.querySelector(".img-content img")

window.addEventListener("resize", () => {
    secImg.src = "https://picsum.photos/400/300";
  });

//   focus, select, drag/drop

// LOAD SECTION 
window.addEventListener("load", () =>{
    log("Page is fully Loaded!")
})

// FOCUS SECTION
navChange.addEventListener("focus", (event) =>{
    event.target.style.color="yellow";
})

// CLICK SECTION
const bottomBtn = document.querySelectorAll(".btn")
// log(bottomBtn);
bottomBtn.forEach((el)=>{
    el.addEventListener("click", (event)=>{
        event.target.innerHTML = "Clicked";
    })        
})

// DRAG SECTION

const title=document.querySelector("h2");
title.addEventListener("drag", ()=>{
    log("You're draging Welcome to FUN BUS!")
})
title.addEventListener("dragend", ()=>{
    return;
})


// NESTED SECTION 
const first = document.querySelector(".home");
const second = document.querySelector(".content-section");

first.addEventListener("click", ()=>{
    first.style.backgroundColor="pink"
    log("second")
});
second.addEventListener("click" , () =>{
    second.style.backgroundColor= "blue"
    log("first")
    event.stopPropagation();

})
