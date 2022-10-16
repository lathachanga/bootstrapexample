function validate(){
    let name=document.getElementById("uname").value;
    let mesg=document.getElementById("mobile").value;
   if(name ==""){
     document.getElementById("abc").innerHTML="Please Enter User Name";
   }
 /* if(name.length<3){
     document.getElementById("abc").innerHTML="Please enter min 4 char";
  }*/
   
   if(mesg==""||mesg.length<=10){
       document.getElementById("xyz").innerHTML="Please Enter Mobile Number"
   }
   return false
}