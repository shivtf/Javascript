const email = "huihuihui@gmail.com"

if (email) {
  console.log("got it");
} else {
  console.log("dont have the email");
  
}

// Falsy Values
// false
// 0
// -0
// Bigint 0n
// ""
// indefined
// nan

//Truthy Values
// "0"
// "false"
// " "
// []
// {}
// function(){}

// if (user.length === 0) {
//   console.log("array is empty");  
// }
// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//   console.log("obj is empty");
  
// }



// nullish coalescing operator (??): null, undefined
//`let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
//val1 = null ? 10 ?? 10

//console.log(val1);

//terniary operator

//condition ? true : false

const ice = 100
ice >= 80 ? console.log("less than 80") : console.log("more than 80");

