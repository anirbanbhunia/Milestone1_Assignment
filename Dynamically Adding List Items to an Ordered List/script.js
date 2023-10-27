const listItems = document.getElementsByTagName("li")
const list = document.getElementsByTagName("li")
const para = document.getElementById("para")
const butt = document.getElementById("butt")

for(let i = 0;i<list.length;i++){
    list[i].style.display = "none"
}
let count = 0
let temp
butt.addEventListener("click", function (){
    if(count<list.length){
   list[count].style.display = "block"
   count++
   return
    }else if(count == list.length){
        para.innerText = "All items have been added."
        temp = list.length
        count++
    }
    if(temp>=list.length){
        butt.innerText = "Go back"
        temp--
    }else if(temp>=0 && temp< list.length){
        list[temp].style.display = "none"
        para.innerText = ""
        temp--
        if(temp<0){
            butt.innerText = "Click Here"
            count = 0
        }
    }
})

