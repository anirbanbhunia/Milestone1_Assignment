const inp = document.getElementById("inp1")
const butt1 = document.getElementById("but1")
const values = document.getElementById("value")
const butt2 = document.getElementById("but2")
let arr = [] 
function addValues(){
    if(inp.value == ""){
        return
    }else{
        arr.push(inp.value+" ")
        values.innerText = arr
        localStorage["yourValue"] = arr
    }
}
butt1.addEventListener("click",addValues)