function name(){
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("v");
  console.log("A");
  console.log("m");
  
}
//name()

// function addTwoNumber(num1 , num2){
//   console.log(num1+num2);
// }


function addTwoNumber(num1 , num2){
  // let result = num1 + num2
  // return result
  return num1+num2
}
// how to store result 
const result = addTwoNumber(5,8 )// these are called arguments and the above one are cld parameters
// console.log("Result", result);

//different way to take parameter

function userName(user = "aj"){
  if(!userName){
    console.log("enter user name");
    return
  }
  return `${user} just log in`
}
//console.log(userName("shivam"));
//console.log(userName("hui"));

// ************************************************************************* FUNCTION PART 2 ***********************************************************************

function cartPrize(...num1){
  return num1
}
//console.log(cartPrize(100,200,300));

const user = {
  name:"akshat",
  prize:6000
}
function handleObject(anyObject){
  console.log(`usename is ${anyObject.name} and prize is ${anyObject.prize}`);
}
//handleObject(user)
// handleObject({
//   name:"aks",
//   prize:55
// })

const newArr = [200,300,400,500]
function returnSecondValue(getArray){
  return getArray[2]
}
//console.log(returnSecondValue(newArr));
//console.log(returnSecondValue([200,300,400,500]));
