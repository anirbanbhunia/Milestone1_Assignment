const nm = document.getElementById("name")
let par = document.getElementById("para")
let hed = document.getElementById("header")
const but = document.getElementById("but1")
const but2 = document.getElementById("but2")

function numOfVowel(){
    let count = 0;
    for(let i = 0;i<nm.value.length;i++){
       let char = nm.value.charCodeAt(i)
       if((char<=90 && char>=65)||(char<=122 && char>=97)){
            par.innerText = ""
            let c = nm.value.charAt(i)
            if(c == "A" || c == "a"){
                count++
            }else if(c == "E" || c == "e"){
                count++
            }else if(c == "I" || c == "i"){
                count++
            }else if(c == "O" || c == "o"){
                count++
            }else if(c == "U" || c == "u"){
                count++
            }
       }else if(nm.value.charAt(i)==" "){
            par.innerText = ""
       }else{
            nm.value = ""
            par.innerText = "Enter currect name"
       }
    }
    hed.innerText = "Number of vowel in your name : "+count
}
but.addEventListener("click",numOfVowel)
but2.addEventListener("click",ref)
function ref(){
    nm.value = ""
    par.innerText = ""
    hed.innerText = "Number of vowel in your name :"
}
