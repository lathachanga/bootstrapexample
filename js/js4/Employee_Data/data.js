let employees=[{id:101,name:"Srilatha",email:"sri@gmail.com"},
               {id:102,name:"Joshna",email:"joshna@gmail.com"},
               {id:103,name:"Priya",email:"priya@gmail.com"},
               {id:104,name:"sowmya",email:"sowmya@gmail.com"}]

function display_Data(){
    let rows="";
    employees.forEach((employee)=>{
        rows = rows+`<tr>
                     <td>${employee.id}</td>
                     <td>${employee.name}</td>
                     <td>${employee.email}</td>
                      </tr>`
    })
    document.getElementById("abc").innerHTML=rows
}