class Parent{
     constructor(){
        console.log("parent class const")
     }
}
class Child extends Parent{
    constructor(){
        super()
        console.log("child class const")
    }

}
let a=new Child()
console.log(a)