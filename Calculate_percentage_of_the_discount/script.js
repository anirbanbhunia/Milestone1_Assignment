const productsPrice = [{Product:"Rice/Kg",originalPrice:215,discountedPrice:99},{Product:"SunflowerOil/L",originalPrice:399,discountedPrice:243},{Product:"Tea/Kg",originalPrice:630,discountedPrice:428},{Product:"Salt/Kg",originalPrice:80,discountedPrice:64},{Product:"ToothPaste/500g",originalPrice:315,discountedPrice:296},{Product:"Cookies/100g",originalPrice:40,discountedPrice:31},{Product:"Honey/Kg",originalPrice:475,discountedPrice:365},{Product:"Pasta/Kg",originalPrice:175,discountedPrice:150},{Product:"Soap(8*100g)",originalPrice:405,discountedPrice:279},{Product:"ShowerGel(250ml)",originalPrice:259,discountedPrice:116}]

const discountPercentage = (x) => {
    for(let i = 0;i<x.length;i++){
        let op = x[i].originalPrice
        let dp = x[i].discountedPrice
        let discountmoney = op - dp
        let persentage = (discountmoney/op)*100
        if(Number.isInteger(persentage)){
            console.log("Your discount on "+x[i].Product+" is "+persentage+"%"+"\n")
        }else{
            console.log("Your discount on "+x[i].Product+" is "+persentage.toFixed(2)+"%"+"\n")
        }
    }
}
discountPercentage(productsPrice)