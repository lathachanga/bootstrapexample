let emp={id:10,name:"Rahul"}
let k=Object.keys(emp)   
console.log(k)     //[id,name]  
 

if(Object.keys(emp).length>0){
    console.log("Not Empty")
}
else{
    console.log("Empty object")
}
