class Account{
    min_Bal=500;
    amount;
     open_Account(){
        console.log("Account opened successfully")
    } 
    deposit_Amount(money){
         this.amount=money;
    }
    get_Bal(){
        return this.amount+this.min_Bal
    }
  
}
let a=new Account()
a.open_Account();
a.deposit_Amount(15000)
console.log(a.get_Bal())
let a1=new Account()
a1.open_Account();
a1.deposit_Amount(25000)
console.log(a1.get_Bal())