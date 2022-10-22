class Account{
    get_Account(){
      console.log("Account class -Details Methods")
    }
}
class Savings_Account extends Account{
   get_Account(){
      console.log("Saving-Account class")
   }
}
let a=new Savings_Account();
console.log(a)
a.get_Account();