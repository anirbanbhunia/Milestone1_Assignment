const input = document.getElementsByClassName("arr")
let a = []
a.length = 5
const but1 = document.getElementById("sub")
const but2 = document.getElementById("ref")
let para = document.getElementById("para")
let h = document.getElementById("res")

function fillMark(){
    let mx = -1
    for(let i = 0;i<a.length;i++){
        if(input[i].value== ""){
            para.innerText = "Enter each students marks"
            return
        }
        a[i]= Number(input[i].value)
        if(a[i]>=0 && a[i]<=100){
            para.textContent = " "
            mx<a[i]?mx = a[i]:mx
        }else if(a[i]>100){
            para.textContent = "Enter marks out of 100"
            h.innerText ="Highest mark:"
            return
        }else{
            para.textContent = "Enter correct value"
            h.innerText ="Highest mark:"
            return
        }
    }
    console.log("Highest mark: "+mx)
    h.innerText = `Highest mark: ${mx}`
}
function clearPrev(){
    for(let i = 0;i<a.length;i++){
        input[i].value = ""
        h.innerText ="Highest mark:"
        para.innerText = ""
    }
}
but1.addEventListener("click",fillMark)
but2.addEventListener("click",clearPrev)
