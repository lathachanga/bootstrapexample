class Employee{
   /* emp_name;
    emp_id;
    emp_Email;
    emp_Sal;*/
   constructor(id,name,email,sal){
         this.emp_Id=id;
         this.emp_Name=name;
         this.emp_Email=email;
         this.emp_Sal=sal;
   }
  
}   

class Employee1 extends Employee{
   // emp_Gender;
    constructor(id,name,email,sal,gender){
        super(id,name,email,sal)
        this.emp_Gender=gender;
    }
     display_Details(){
        console.log(this.emp_Id)
        console.log(this.emp_Name)
        console.log(this.emp_Email)
        console.log(this.emp_Sal)
        console.log(this.emp_Gender)
     }


}
let a=new Employee1(101,"Sri","sri@gmail.com",30000,'f')
console.log(a)
a.display_Details()

let a1=new Employee1(102,"Bujji","bujji@gmail.com",31000,'f')
console.log(a1)
a1.display_Details()

