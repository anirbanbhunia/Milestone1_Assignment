const butt = document.getElementById("but")
const heading = document.getElementById("heading")
let count = 0
butt.addEventListener("click",function change(){
    if(count%2 == 0){
        heading.innerText = "PW Skills"
    }else{
        heading.innerText = "The most affordable learning platform"
    }
    count++
})