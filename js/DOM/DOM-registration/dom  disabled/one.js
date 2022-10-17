function display(){
  let user=document.getElementById("abc").value;
  let pass=document.getElementById("xyz").value;
  let btn= document.getElementById("pqr")
  if(user.length<5||pass.length<8){
     btn.disabled=true    //disable
  }
  if(user.length>5 && pass.length>8){
    btn.disabled=false     //enable
  }
  return false
}