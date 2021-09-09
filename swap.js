let tempVar1 = 10;
let tempVar2 = 20;

temp = tempVar2;
tempVar2 = tempVar1;
tempVar1 = temp;

console.log("the value of tempVar1 is: " + tempVar1);
console.log("the value of tempVar2 is: " + tempVar2);
