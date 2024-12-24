// let myName = "shivam"
// console.log(myName.trueLength);
// let myHero =["thor","spiderman"]
// let heroPower = {
//   thor:"thunder",
//   spiderman:"webs",

//   getSpidermanPower: ()=>{
//     console.log(`Spidy power is ${this.spiderman}`);
//   }
// }
// Object.prototype.shivam = ()=>{
//   console.log(`power in all object`);
// }
// Array.prototype.heyShivam = ()=>{
//   console.log(`hello world`);
  
//}
// myHero.shivam()
// heroPower.shivam()
//myHero.heyShivam()

// inheritance
// const user = {
//   name:'Shivam',
//   email:'shiv@google.com'
// }
// const teacher = {
//   makeVideo: true
// }
// const teacherSupport = {
//   isAvailable: false
// }
// const TAsupport = {
//   makeAssignment: 'JS assigniment',
//   fullTime: true,
//   __proto__:teacherSupport
// }
// teacher.__proto__ = user

// // modern syntax
// Object.setPrototypeOf(teacherSupport, teacher)

let anotherUserName = 'Shivam    '
String.prototype.trueLength = function(){
  console.log(`${this}`);
  
  console.log(`True length is ${this.trim().length} `);
  
}
anotherUserName.trueLength()
'chai'.trueLength()
'samosa'.trueLength()