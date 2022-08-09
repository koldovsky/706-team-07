var acc = document.getElementsByClassName("deserts");
var i;
let button1 = document.querySelector(".asorti-block-button-desserts")
let button2 = document.querySelector(".asorti-block-button-ice-crem")
let button3 = document.querySelector(".asorti-block-button-drinks")

button1.addEventListener("click",()=>{
    for(i=0;i<acc.length;i++){
        acc[i].style.display="none"
        ;console.log("test")
    }
    acc[0].style.display="flex"
})
button2.addEventListener("click",()=>{
    for(i=0;i<acc.length;i++){
        acc[i].style.display="none"
        ;console.log("test")
    }
    acc[1].style.display="flex"
})
button3.addEventListener("click",()=>{
    for(i=0;i<acc.length;i++){
        acc[i].style.display="none"
        ;console.log("test")
    }
    acc[2].style.display="flex"
})
