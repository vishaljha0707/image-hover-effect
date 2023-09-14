var elem = document.querySelector("#elem")
var image1 = document.querySelector(".elem1 img")
var image2 = document.querySelector(".elem2 img")
var image3 = document.querySelector(".elem3 img")
var image4 = document.querySelector(".elem4 img")


var elem1 = document.querySelector(".elem1")
var elem2 = document.querySelector(".elem2")
var elem3 = document.querySelector(".elem3")
var elem4 = document.querySelector(".elem4")


elem1.addEventListener("mousemove",function(dets){
    image1.style.left = dets.x+"px"
    image1.style.top = dets.y+"px-40px"
    image1.style.opacity = 1;
    
})

elem1.addEventListener("mouseleave" ,function(dets){
   
    image1.style.opacity = 0;
})

elem2.addEventListener("mousemove",function(dets){
    image2.style.left = dets.x+"px"
    image2.style.top = dets.y+"px-40px"
    image2.style.opacity = 1;
    
})

elem2.addEventListener("mouseleave" ,function(dets){
   
    image2.style.opacity = 0;
})


elem3.addEventListener("mousemove",function(dets){
    image3.style.left = dets.x+"px"
    image3.style.top = dets.y+"px-40px"
    image3.style.opacity = 1;
    
})

elem3.addEventListener("mouseleave" ,function(dets){
   
    image3.style.opacity = 0;
})


elem4.addEventListener("mousemove",function(dets){
    image4.style.left = dets.x+"px"
    image4.style.top = dets.y+"px-40px"
    image4.style.opacity = 1;
    
})

elem4.addEventListener("mouseleave" ,function(dets){
   
    image4.style.opacity = 0;
})