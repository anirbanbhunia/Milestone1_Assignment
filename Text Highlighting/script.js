const para = document.getElementById("para")
const word =  para.textContent.split(' ')

function highlight(){
    for(let i = 0; i<word.length;i++){
        if(word[i].length > 8){
            let hc = document.createElement("span")
            hc.textContent = word[i]
            hc.className = "spot"
            para.innerHTML = para.innerHTML.replace(word[i],hc.outerHTML)
        }
    }
}
highlight()