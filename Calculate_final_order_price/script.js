const CustomerCart = [{Product:"Rice/Kg",UnitPrice:186,Quantity:2},{Product:"Sunflower Oil/L",UnitPrice:140,Quantity:6},{Product:"Tea/Kg",UnitPrice:150,Quantity:1},{Product:"Salt/Kg",UnitPrice:30,Quantity:3},{Product:"ToothPaste/500g",UnitPrice:176,Quantity:2},{Product:"Cookies/100g",UnitPrice:20,Quantity:13},{Product:"Honey/Kg",UnitPrice:99,Quantity:1},{Product:"Pasta/Kg",UnitPrice:89,Quantity:7}]

const FinalOrderPrice = (x) => {
    let totalPrice = 0;
    for(let i = 0;i<x.length;i++){
        let a = x[i].UnitPrice
        let b = x[i].Quantity
        totalPrice += a*b
    }
    return totalPrice
}
console.log("Your total cost of items is: "+FinalOrderPrice(CustomerCart)+"₹")
