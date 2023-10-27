const cart1 = document.getElementById("cart1")
const but3 = document.getElementById("butt3")
function customerCart(){
    if(localStorage["cartValue"] == null){
        cart1.innerText = "Empty Cart 😢"
        return
    }
   const a = localStorage["cartValue"]
   const b = a.toUpperCase()
    let splitArr = []
    splitArr = b.split(",")
    // console.log(splitArr)
    const uniq = [...new Set(splitArr)]
    cart1.innerText = uniq
}
customerCart()
function back(){
    localStorage.clear()
}
but3.addEventListener("click",back)