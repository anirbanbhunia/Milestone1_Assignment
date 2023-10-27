const inp = document.getElementById("inp")
const opt = document.getElementById("opt")
const butt = document.getElementById("butt")

function converter(){
    if(inp.value == ""){
        opt.innerText = ""
        return
    }else{
        let a = Number(inp.value)
        const b = 9/5
        const c = 32
        let d = (a * b) + c
        if(Number.isInteger(d) == false){
            opt.innerText = d.toFixed(2)+"°F"
        }else{
            opt.innerText = d+"°F"  
        }
    }
}
butt.addEventListener("click",converter)