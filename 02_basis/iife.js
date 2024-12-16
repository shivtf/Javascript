// immediately invoked function (iife)
// named iife
(function chai(){
  console.log(`DB CONNECTED`);
})();

//() // tell you gthe definition of the function
//()()// this tell you the execution of the function
// we use iife to remove the poloution of the global function
//problem we face is iife does not know when to stop function to stop it we use ;
(function aurCode(){
  console.log(`DB CONNECTED TWO`);
})();
((name) => {
  console.log(`DB CONNECTED THREE ${name}`);
})('shivam');