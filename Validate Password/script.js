const inp1 = document.getElementById("userEmail")
const inp2 = document.getElementById("pass")
const par = document.getElementById("para")
const chackBox = document.getElementById("box")
const butt = document.getElementById("but")

chackBox.addEventListener("click",function(){
    if(chackBox.checked){
        inp2.type = "text"
    }else{
        inp2.type = "password" 
    }
})

butt.addEventListener("click",function(){
   let size = inp1.value.length
   if(inp1.value == "@gmail.com"){
    par.style.color = "red"
    par.innerText = "Invalid email or password!"
    return
   }
   if(inp1.value.includes("@gmail.com",size-10)&&(inp2.value.length>=8)){
    par.style.color = "green"
    par.innerText = "Valid email and password!"
   }else{
    par.innerText = "Invalid email or password!"
    par.style.color = "red"
    return
   }
})