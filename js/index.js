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
console.log(navChange)
navChange.addEventListener("dblclick", (event)=>{
    console.log(event.target)
    event.target.style.color="pink";
})

// KEYDOWN SECTION
const entireBody = document.querySelector("body")
log(entireBody)
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
window.addEventListener("wheel", ()=>{
    
})