class parent{
        asset=400
        
}
class child extends parent{
        money=500
        get_Money(){
            console.log("Money is displaying")
        }
}
let a1=new child()
console.log(a1)
a1.get_Money()