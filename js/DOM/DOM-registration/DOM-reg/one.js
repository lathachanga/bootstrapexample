<<<<<<< HEAD
function validation(){
    let user=document.getElementById("name").value ;
    let mob=document.getElementById("mobile").value;
    let email=document.getElementById("mail").value;
    let male=document.getElementById("gen").value;
    let female=document.getElementById("gen").value;
   let select=document.getElementById("select").value
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
   if(gen.checked==false && gen.checked==false){
        document.getElementById("are").innerHTML="Please select one"
    }
    if(select==false){
        document.getElementById("state").innerHTML="Please Select State"
    }
    if(check==false){
        document.getElementById("and").innerHTMl="Please Click That One"
    }
    return false
=======
function validation(){
    let user=document.getElementById("name").value ;
    let mob=document.getElementById("mobile").value;
    let email=document.getElementById("mail").value;
    let male=document.getElementById("gen").value;
    let female=document.getElementById("gen").value;
   let select=document.getElementById("select").value
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
   if(gen.checked==false && gen.checked==false){
        document.getElementById("are").innerHTML="Please select one"
    }
    if(select==false){
        document.getElementById("state").innerHTML="Please Select State"
    }
    if(check==false){
        document.getElementById("and").innerHTMl="Please Click That One"
    }
    return false
>>>>>>> 46c9b71fa3d574924194fa658ea611d3d792a822
}