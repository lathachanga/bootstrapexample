let employees=[
    { id:101,name:"Priya",salary:45000},
    { id:102,name:"Sandhya",salary:35000},
    { id:103,name:"Usha",salary:25000},
    { id:104,name:"Manasa",salary:55000},
    { id:105,name:"Srilatha",salary:65000}
]
/*function display_Data(){
    let rows=""
    for(employee of employees){
        rows=rows+`<tr>
                      <td>${employee.id}</td>
                  </tr>`
    }
    document.getElementById("abc").innerHTML=rows
    }*/
    
function display(){
    let rows="<tr> <td>101</td>  <td>Priya</td> </tr>"
    document.getElementById("abc").innerHTML=rows
   //document.getElementById("abc").innerHTML="GM"
}