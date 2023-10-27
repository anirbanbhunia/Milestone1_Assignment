const inp1 = document.getElementById("first")
const inp2 = document.getElementById("second")
const but = document.getElementById("butt")
let res = document.getElementById("result")
const par = document.getElementById("para")
function colorMix(){
    let val1 = inp1.value
    let val2 = inp2.value
    let mix = val1+val2
    switch(mix.toLowerCase()){
        case ("redblue"):
        case ("bluered"):
            console.log("purple")
            res.style.backgroundColor="purple"
            par.innerText = ""
            break
        case ("redyellow"):
        case ("yellowred"):
            console.log("orange")
            res.style.backgroundColor="orange"
            par.innerText = ""
            break
        case ("blueyellow"):
        case ("yellowblue"):
            console.log("green")
            res.style.backgroundColor="green"
            par.innerText = ""
            break
        default:
            res.style.backgroundColor="white"
            par.innerText = "Invalid color combination"
            console.log("Invalid color combination")
    }
}
but.addEventListener("click",colorMix)