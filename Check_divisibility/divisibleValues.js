const value = document.getElementById("value")
const but3 = document.getElementById("but3")
function divisible(){
    if(localStorage["yourValue"] == null){
        return
    }
    const a = localStorage["yourValue"]
    let splitArr = []
    let b = []
    splitArr = a.split(",")
    for(let i = 0;i<splitArr.length;i++){
        if(splitArr[i]%2 == 0){
            continue
        }else if(splitArr[i]%3 == 0){
            b.push(splitArr[i])
        }
    }
    value.innerText = b
}
divisible()
function back(){
    localStorage.clear()
}
but3.addEventListener("click",back)
