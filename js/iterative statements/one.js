
// using for loop
//WAP to print 1 to 5
for(let i=1;i<=5;i++){
    console.log(i)
}

//WAPto print first 10 even numbers
//0,2,4,6,8,10,12,14,16,18
//initilization st: let i=0
//condition st: i<=18
//increment st: i=i+2
for(let i=0;i<=18;i=i+2){
    console.log(i)
}

//WAP to print GM 100 times
for(let i=100;i<200;i++){
    console.log("GM",i-99)
}


let m=1;
for(; ;){
    if(m<=10){ 
        console.log("GM",m);
    }
    m++
}
//if it executes it remains in for loop after executing  for loop. this can be rectified by while loop
let k=1;
while(k<=5){
    console.log(k)
    k++
}