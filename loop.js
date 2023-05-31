/*while loop:repeats some code while condition is true.
*/

//The code below loops over and over again untill a user inputs the name in the windows prompt
let name_1 ;
/*while (name_1=="" || name_1==null){
    name_1=window.prompt("entre your name");
}
console.log("hello ", name_1);*/


//do while loop:do smth then check the condition repeat if the condition is true.
do{
    name_1=window.prompt("entre your name");
}

while (name_1=="" || name_1==null){
  
}
console.log("hello ", name_1);


//for loops:used to repeat a code some given times
 
for(let counter =1; counter<=100;counter+=2){

console.log(  counter);
}
console.log("youre good now");

//break:breaks out of a loop entirely
//continue:skips an iteration of a loop
for(let i=1;i<=20;i+=1 ){
    if(i==12){
        break;
    }
    console.log(i);
}

for(let x=1; x<=20;x+=1){
    if(x==10){
        continue;
    }
    console.log(x);
}