// for (let index = 0; index<=10; index++) {
//   const element = index;
//   if(element == 5){
//     console.log("5 best element");
    
//   }
//   console.log(element);
  
  
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop ${i}`);
  
//   for (let j = 1; j <= 10; j++) {
//     //console.log(`inner element ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j); 
//   }  
// }

// let myArr = ['a','b','c','d']
// console.log(myArr.length);
// for (let i = 0; i < myArr.length; i++) {
//   const element = myArr[i];
//   console.log(element);
  
// }

// break and continue to either break or continue the loop
// for (let i = 0; i <=20; i++) {
//   if(index == 5){
//     console.log(`detected 5`);
//     break
//   }
//   console.log(`value of i is ${i}`);
// }
for (let i = 0; i <=20; i++) {
    if(index == 5){
       console.log(`detected 5`);
       continue
  }
  console.log(`value of i is ${i}`);
}
