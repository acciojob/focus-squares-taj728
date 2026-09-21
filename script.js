const boxes=document.querySelectorAll(".square");

boxes.forEach((x)=>{
    x.addEventListener("mouseenter",()=>{
        boxes.forEach((y)=>{
            if(x===y){
                 
            }
            else{
                y.style.backgroundColor="#6F4E37"
            }
        })
    })
    x.addEventListener("mouseleave",()=>{
        boxes.forEach((y)=>{
            y.style.backgroundColor="#E6E6FA"
        })
    })
})

