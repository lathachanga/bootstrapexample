function add(a,b,c=30,d=50){
    console.log(a+b+c+d)
}
add(100,200)
add(10,20,300)   //it is overriding the parameter 'd'
add(10,20,300,400)    //it is overriding the parameters 'c','d'