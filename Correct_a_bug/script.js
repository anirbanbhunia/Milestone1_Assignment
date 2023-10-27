const amount = document.getElementsByClassName("realAmount")
const negButt = document.getElementsByClassName("min")
const posButt = document.getElementsByClassName("plu")
const quantity = document.getElementsByClassName("quan")
const price = document.getElementsByClassName("amount")
const cart = document.getElementById("cart")
const item = document.getElementsByTagName("h3")
const finalBut = document.getElementById("finalBut")

let arr = [null,null,null,null,null]
let arr1 = [null,null,null,null,null]

function decrease(v){
    let itemName = item[v].innerText
    let a = amount[v].textContent
    let n = a.substring(1)
    let val = Number(quantity[v].textContent)
    if(val>0){
        val--
        quantity[v].textContent = val
        price[v].textContent ="₹"+(Number(n)*val)
        arr.splice(v,1,itemName+" * "+val+"\n")
        arr1.splice(v,1,itemName+" * "+val*2+"\n")
        if(val==0){
            arr[v]=null
            arr1[v]=null
        }
        cart.innerText = arr
        localStorage["items"] = arr1
        let f = 0
        let arrSize = arr.length
        for(let i = 0; i<arr.length;i++){
            if(arr[i]==null)
             f++
        }
        if(f == arrSize){
            cart.innerText = null
        }
    }
}

function increase(v){
    let itemName = item[v].innerText
    let a = amount[v].textContent
    let n = a.substring(1)
    let val = Number(quantity[v].textContent)
    if(val>=0){
        val++
        quantity[v].textContent = val
        price[v].textContent ="₹"+(Number(n)*val)
        arr.splice(v,1,itemName+" * "+val+"\n")
        arr1.splice(v,1,itemName+" * "+val*2+"\n")
        cart.innerText = arr
        localStorage["items"] = arr1
    }
}
//for item1
posButt[0].addEventListener("click",function val1(){
    increase(0)
})
negButt[0].addEventListener("click",function val1(){
    decrease(0)
})

//for item2
posButt[1].addEventListener("click",function val1(){
    increase(1)
})
negButt[1].addEventListener("click",function val1(){
    decrease(1)
})
//for item3
posButt[2].addEventListener("click",function val1(){
    increase(2)
})
negButt[2].addEventListener("click",function val1(){
    decrease(2)
})
//for item4
posButt[3].addEventListener("click",function val1(){
    increase(3)
})
negButt[3].addEventListener("click",function val1(){
    decrease(3)
})
//for item5
posButt[4].addEventListener("click",function val1(){
    increase(4)
})
negButt[4].addEventListener("click",function val1(){
    decrease(4)
})



