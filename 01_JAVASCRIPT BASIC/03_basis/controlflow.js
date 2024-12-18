// if statement
if(true){

}
//<
// >
// <=
// >=,operator assign
// ==,check equal
// != not equal,
// === type check,and check equal,
// !== strict check,
// && check both condition,
// || either this or the other
//short notation
const balance = 1000
//if(balance > 500) console.log("test")
// if (balance < 500) {
//  console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if(balance < 900){
//   console.log("less than 900"); 
// } else{
//   console.log("less than 1200"); 
// }

const user = true
const card = true
const logGoogle = false
const emailLog = true

if(user && card){
  console.log("allowed to buy");
}
if (logGoogle || emailLog) {
  console.log("allow to buy");
}

