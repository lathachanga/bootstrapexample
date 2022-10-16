let employees=[
    { id:101,name:"Priya",salary:45000},
    { id:102,name:"Sandhya",salary:35000},
    { id:103,name:"Usha",salary:25000},
    { id:104,name:"Manasa",salary:55000},
    { id:105,name:"Srilatha",salary:65000}
]
function display_Data(){
    let rows=""
    for(emp of employees) {
        rows=rows + `<tr>
                       <td>${emp.id}</td>
                       <td>${emp.name}</td>
                       <td>${emp.salary}</td>
                     <tr>`
                   
    }
    document.getElementById("abc").innerHTML= rows
}
   
       
               