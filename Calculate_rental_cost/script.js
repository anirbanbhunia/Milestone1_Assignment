const cartype1 = document.getElementById("car1")
const cartype2 = document.getElementById("car2")
const cartype3 = document.getElementById("car3")
const days = document.getElementById("days")
let para = document.getElementById("wrong")
const totalCost = document.getElementById("cost")
const but = document.getElementById("butt")

function rentalCost(){
    if(cartype1.checked == false && cartype2.checked == false && cartype3.checked == false){
        para.innerText = "Please select your car type"
        return
    }else if(days.value == ""){
        para.innerText = "please Enter number of days"
        return
    }else if(days.value < 0){
        para.innerText = "please Enter valid number"
        return
    }else{
        para.innerText = ""
        if(cartype1.checked){ 
            totalCost.innerText = 4000*Number(Math.floor(days.value))
        }else if(cartype2.checked){
            totalCost.innerText = 10000 * Number(Math.floor(days.value))
        }else{
            totalCost.innerText = 20000 * Number(Math.floor(days.value)) 
        }
    }
}
but.addEventListener("click",rentalCost)