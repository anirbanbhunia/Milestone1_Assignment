const colorArr = ["red","orange","yellow","green","blue","indigo","violet"]
const butt = document.getElementById("butt")

butt.addEventListener("click",function(){
     let a = Math.floor(Math.random()*colorArr.length)
     document.body.style.backgroundColor = colorArr[a]
})