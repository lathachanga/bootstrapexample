class Account{
    constructor(name,email){
        this.acc_Name=name;
        this.acc_email=email;
    }

}
class savings_Account extends Account{
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_id=id;
        this.acc_Amount=amount;
    }
}
let a=new savings_Account(101,"Srilatha","sri@gamil.com",30000);
console.log(a);
let b=new savings_Account(102,"Bujji","bujji@gamil.com",31000);
console.log(b)