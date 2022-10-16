function  get_Data(){
    console.log(this)
}
get_Data()    // It provides longer object

let data=()=>{
    console.log(this)
}
data()   // it provides an empty object