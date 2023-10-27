
function billsplitting(){
    let obj = new Object()
    const noOfDishes = prompt("How many dishes you want to order")
    let num = ""
    if(noOfDishes == null){
       return 
    }
    for(let i = 0;i<noOfDishes.length;i++){
        let findAscii = noOfDishes.charCodeAt(i)
        if(Number(findAscii)>= Number(48) && Number(findAscii) <= Number(57)){
            num += noOfDishes.charAt(i)
        }else{
            console.log("Enter valid no of dishes")
            return
        } 
    }
    if(num<=5 && num>=1){
        let arr = []
        let totalPrice = 0
        for(let i = 0;i<num;i++){
            arr[i] = prompt(`Dish${i+1} - price`)
              if(arr[i] == null || arr[i] == ""){
                 console.log("Enter your dish price")
                 return 
              }
              let num2 = ""
            for(let j = 0;j<arr[i].length;j++){
                let findAscii = arr[i].charCodeAt(j)
                if(Number(findAscii)>= Number(48) && Number(findAscii) <= Number(57)){
                    num2 += arr[i].charAt(j)
                }else{
                    console.log("Enter valid price here")
                    return
                }
            }
            totalPrice += Number(arr[i])
        }
        let noOfPeople = prompt("Enter how many people share this food")
        if(noOfPeople == null || noOfPeople == "" || noOfPeople == 0){
            console.log("Enter how many people share this food")
            return
        }
        for(let i = 0;i<noOfPeople.length;i++){
            let findAscii2 = noOfPeople.charCodeAt(i)
                if(Number(findAscii2)>= Number(48) && Number(findAscii2) <= Number(57)){
 
                }else{
                    console.log("Enter valid no of people")
                    return 
                }
        }
        obj.TotalBill = totalPrice
        let each = Number(totalPrice)/Number(noOfPeople)
        obj.PaidByEachPerson = each.toFixed(2)  
    }else if(num < 1){
        console.log("Enter valid number of dishes")
        return
    }else{
        console.log("Enter no of dishes outof 5")
        return
    }
    return obj
}
console.log(billsplitting())
