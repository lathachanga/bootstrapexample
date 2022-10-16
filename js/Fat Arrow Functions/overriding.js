var  wish=() => {
    console.log("GM")
}
wish()
var wish=() => {
    console.log("GN")
}
wish()



//using function
function wish() {
    console.log("GM")
}
wish()
                          //it is overriding it prints GN
function wish() {
    console.log("GN")
}
wish()