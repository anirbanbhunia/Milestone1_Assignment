const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const op = document.getElementById("operator")
const result = document.getElementById("result")
const butt = document.getElementById("but")
const par = document.getElementById("para")
function calculate(){
   let val1 = Number(num1.value)
   let val2 = Number(num2.value)
   if(val1 == 0 && val2 == 0){

   }else{
      let operator = op.value
      switch(operator){
         case "+":
            result.innerText = val1 + val2
            par.innerText = ""
            break
         case "-":
            result.innerText = val1 - val2
            par.innerText = ""
            break
         case "*":
            result.innerText = val1 * val2
            par.innerText = ""
            break
         case "/":
            result.innerText = val1 / val2
            par.innerText = ""
            break
         default:
            console.log("Invalid operator")
            par.innerText = "Invalid operator"
            break
      }
   }
}
butt.addEventListener("click",calculate)
