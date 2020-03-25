const sounds=document.querySelectorAll(".sound")
const pads=document.querySelectorAll(".pads div")   //all the div of parent class pad
const visual=document.querySelector(".visual") 
const color=[ "lightgoldenrodyellow","lightpink","lightsalmon","lightskyblue","lightslategrey","lightseagreen"]

//Lets go going with sounds dude
pads.forEach((pad,index) => {
     pad.addEventListener("click",function(){
         sounds[index].currentTime=0;
         sounds[index].play();
         createbubbles(index);
     });
 });

 //Create a function that make bubbles
 function createbubbles(index){
     const bubble=document.createElement("div")
     visual.appendChild(bubble)
     bubble.style.backgroundColor=color[index];
     bubble.style.animation="jump 1s ease";
     bubble.addEventListener("animationend",function(){
         visuals.removeChild(this);
     })
 }
