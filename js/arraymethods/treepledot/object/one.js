let emp={
      id:101,
      name:"Sri",
      email:"sri@gmail.com"
}
let details={
    email:"lower@gmail.com",
    sal:45000,
    loc:"banglore"
}
let emp_Details={...emp,...details}
console.log(emp_Details)