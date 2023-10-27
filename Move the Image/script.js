const img = document.getElementById("image")
img.style.top = "0px"
img.style.bottom = "0px"
img.style.right = "0px"
img.style.left = "0px"
document.addEventListener("keydown",function(x){ 
    if(x.key == "ArrowUp"){
        img.style.top = (parseInt(img.style.top)-10)+"px"
    }else if(x.key == "ArrowDown"){
        img.style.top = (parseInt(img.style.top)+10)+"px"
    }else if(x.key == "ArrowLeft"){
        img.style.left = (parseInt(img.style.left)-10)+"px"
    }else if(x.key == "ArrowRight"){
        img.style.left = (parseInt(img.style.left)+10)+"px"
    }
})