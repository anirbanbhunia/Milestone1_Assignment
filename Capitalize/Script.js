const inp1 = document.getElementById("fn")
const inp2 = document.getElementById("ln")
const inp3 = document.getElementById("pn")
const dob = document.getElementById("dob")
const eml = document.getElementById("ml")
const but1 = document.getElementById("but1")
const but2 = document.getElementById("but2")
let par = document.getElementById("para")
function validLetter(val){
   for(let i = 0;i<val.length;i++){
        if((val.charCodeAt(i)<=122 && val.charCodeAt(i)>=97)||(val.charCodeAt(i)>=65 && val.charCodeAt(i)<=90)){
            
        }else{
            return ""
        }
   }
   return val 
}
function capital(){
    //For first name
    let str = validLetter(inp1.value)
    let flett = str.charCodeAt(0)
    let isTrue = (flett>=97 && flett<=122)?true:(str == "")?false:str
    if(isTrue == true){
        let cap = String.fromCharCode(Number(flett-32))
        for(let i = 1;i<str.length;i++){
            cap+=str.charAt(i)
        }
        inp1.value = cap
    }else if(isTrue == false){
        par.innerText = "Enter valid name"
        inp1.value = ""
        return 
    }
    //For last name
    let str1 = validLetter(inp2.value)
    let llett = str1.charCodeAt(0)
    let isTrue1 = (llett>=97 && llett<=122)?true:(str1 == "")?false:str1
    if(isTrue1 == true){
        let cap = String.fromCharCode(Number(llett-32))
        for(let i = 1;i<str1.length;i++){
            cap+=str1.charAt(i)
        }
        inp2.value = cap
    }else if(isTrue1 == false){
        par.innerText = "Enter valid name"
        inp2.value = "" 
        return
    }
    //For phn number
    if(inp3.value.length == 10){
        par.innerText = ""
    }else{
        par.innerText = "Enter valid phone number"
    }
}
but1.addEventListener("click",capital)
function reset(){
    inp1.value = ""
    inp2.value = ""
    inp3.value = ""
    dob.value = ""
    eml.value = ""
    par.innerText = ""
}
but2.addEventListener("click",reset)