function validation(){
    let user=document.getElementById("name").value ;
    let mob=document.getElementById("mobile").value;
    let email=document.getElementById("mail").value;
    let password=document.getElementById("pass").value;
   // let boy=document.getElementById("male").value;
   // let girl=document.getElementById("female").value;
   // let select=document.getElementById("select").value
    if(user==""){
        document.getElementById("abc").innerHTML="Please Enter User Name";
    }
   /* if(user.length<3){
        document.getElementById("abc").innerHTML="Please Enter Min 4 Char";
    }*/
    if(mob==""||mob.length<=10){
        document.getElementById("xyz").innerHTML="Please Enter Mobile Number"
    }
    if(email==""){
        document.getElementById("pqr").innerHTML="Please Enter Valid Email"
    }
    if(password==""){
        document.getElementById("klm").innerHTML="Please Enter Password"
    }
   if(male.checked==false && female.checked==false){
        document.getElementById("are").innerHTML="Please select one"
    }
    if(select==false){
        document.getElementById("state").innerHTML="Please Select State"
    }
    if(check==false){
        document.getElementById("and").innerHTMl="Please Click That One"
    }
    return false
}