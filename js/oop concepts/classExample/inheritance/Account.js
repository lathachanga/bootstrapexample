class Account{
    min_Bal=500;
    get_Account_Details(){
        console.log("account Details are Displaying");
    }

}
class savings_Account extends Account{
    deposit_Amount(amount){
        console.log(this.min_Bal+amount)
    }
}
let a1=new savings_Account()
a1.get_Account_Details()
a1.deposit_Amount(500)


class current_Account extends Account{
    min_Bal=10000;
    deposit_Amount(amount){
        console.log(this.min_Bal+amount)
    }
    

}
let a2=new current_Account()
a2.get_Account_Details()
a2.deposit_Amount(5000)
