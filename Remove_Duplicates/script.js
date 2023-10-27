const inp = document.getElementById("inp1")
const but1 = document.getElementById("butt")
const but2 = document.getElementById("butt2")
const cart = document.getElementById("cart")
let arr = []

function addToCart(){
    if(inp.value == ""){
        return;
    }else{
        arr.push(inp.value+" ")
        cart.innerText = arr
        localStorage["cartValue"] = arr
    }
}
but1.addEventListener("click",addToCart)