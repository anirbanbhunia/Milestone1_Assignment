const inp = document.getElementById("inp")
const para = document.getElementById("para")
const sec = document.getElementById("sec")
const but = document.getElementById("but")

function pattern(){
    if(inp.value < 1){
        para.innerText ="Enter value greater than 0"
        sec.innerText = ""
        sec.style.padding = "0px"
        return
    }else if(inp.value > 20){
        para.innerText ="Enter value out of 20"
        sec.innerText = ""
        sec.style.padding = "0px"
        return
    }
    let pat="";
    for(let i = 1;i<=inp.value;i++){
        for(let j = inp.value;j>=i;j--){
            pat +="*" 
        }
        pat += "\n"
    }
    sec.style.padding = "20px 100px"
    sec.innerText = pat
    para.innerText = ""
}
but.addEventListener("click",pattern)
