let employee=[{id:101,name:"Sanju",salary:45000},
       {id:102,name:"Diya",salary:55000}   
]
function add(emp){
    //adding new employee
    employee.push(emp)
}
add({id:103,name:"Nehal",salary:55000})
console.log(employee)


