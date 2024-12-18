

// object literals

const mySymbol = Symbol("key1")

const jsUser = {
  name:"shivam",
  age:22,
  location:"dehradun",
  email:"huihuihui@gmail.com",
  [mySymbol]:"key1"
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySymbol]);

// change values
jsUser.age = 28
//freexe the current values
//Object.freeze(jsUser)
jsUser.age = 22
// console.log(jsUser)

jsUser.greeting = function(){
  console.log("hello user");  
}
jsUser.greetingTwo = function(){
  console.log(`hello user,${this.name}`);  
}


// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
// ******************************************************* OBJECT PART 2 ************************************************************************************************

// singleton made by constructor,one of its type

//const hUser = new Object()

const hUser = {}
hUser.id = "123abc"
hUser.name = "akshat"
hUser.isLogIn = "true"

// console.log(hUser);
const regularUser = {
  email:"huihuihui69@gmail.com",
  fullname:{
    username:{
      firstname:"shivam",
      lastname:"bhandari"
    }
  }

}
//console.log(regularUser.fullname.username.firstname);
const obj1 = {
  a:"1",
  b:"2",
  c:"3"
}
const obj2 = {
  d:"11",
  e:"22",
  f:"33"
}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(hUser));
// console.log(Object.values(hUser));
// console.log(Object.entries(hUser));
// console.log(hUser.hasOwnProperty('name'));
// console.log(hUser.hasOwnProperty('isLogInn'));

// ******************************************************** OBJECT PART 3 JSON API *********************************************************************************

const course = {
  name:"hindi",
  price:"999",
  instructor:"shivam"
}

const {instructor} = course
console.log(instructor);
