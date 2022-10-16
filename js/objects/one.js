// let emp={} //empty object
let emp={
    id:101,
    name:"Srilatha",
    sal:45000
}
console.log(emp)
//reading object properties
console.log(emp.id)
console.log(emp.name)
console.log(emp.sal)
console.log(emp.email)
//update
emp.name="Sonia"
console.log(emp.name)
console.log(emp)
emp.loc="Nellore"
console.log(emp.loc)
console.log(emp)
//deleting 
delete emp.sal
console.log(emp)