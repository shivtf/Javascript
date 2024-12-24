const user = {
  username:'shivam',
  id:1452,
  signedIn:true,
  getUserDetail:function(){
    console.log(`Username:${this.username}`)
    console.log(this);

  }
}
// console.log(user.username);
// console.log(user.getUserDetail());
//console.log(this);//empty scope{}


// constructor function

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.username}`)
  }

  return this
}
const userOne = new User("shivam",15,true)
const userTwo = new User("akshat",55, false)
console.log(userOne.constructor)
//console.log(userTwo)
// when you use new it create a new object which called instance
// call construction function
// this keyword inject in the function