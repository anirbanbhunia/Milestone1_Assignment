const fixCart = document.getElementById("cart2")
const backButt = document.getElementById("finalBut2")
fixCart.innerText = localStorage["items"]
function clearCart(){
    localStorage["items"] = ""
}
backButt.addEventListener("click",clearCart)
