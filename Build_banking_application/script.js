const userDetail = new Object()
userDetail.name = "Anirban"
userDetail.balance = 20000

userDetail.withdrawal = function (val){
    if(val>0 && val<= this.balance){
        this.balance -= val
        return ` Withdrawl amount $${val}.New balance is $${this.balance}.`
    }else if(val>0 && val > this.balance){
        return `You have insufficient funds!!!`
    }else{
        return `Invalid Withdrawl amount`
    }
}
userDetail.deposit = function (val){
    if(val > 0){
        this.balance += val
        return `Deposit amount $${val}.New balance is $${this.balance}`
    }else{
        return `Invalid deposit amount`
    }
}

console.log(userDetail.withdrawal(1500))
console.log(userDetail.withdrawal(-500))
console.log(userDetail.withdrawal(25000))
console.log(userDetail.deposit(25000))
console.log(userDetail.deposit(0))