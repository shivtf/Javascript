//promise object represent the eventual completion of an asynchronous operation and the result value.
// it is a object representing the eventual completion or failure of an asynchronous operation
//three state
// 1.pending
// 2.fulfilled
// 3.rejected
// const promiseOne = new Promise(function(resolve, rejected){
//   // do an asyc task
//   // DB calls, cryptography, networkcalling
//   setTimeout(function(){
//     console.log('Asyc task complete');
//     resolve()
//   },1000)
// });
// // inside then we get a callback and it is directly connected to then
// promiseOne.then(function(){
//   console.log("promise consumed");
// })

// new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     console.log("asyc 2");
//     resolve() 
//   },1000)
// }).then(()=>{
//   console.log("asyc 2 resolved");
  
// })

// const promiseThree = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//   resolve({username:"Shivam", email:"shivam@example.com"})

// },1000)
// })
// promiseThree.then((user)=>{
//   console.log(user);
  
// })

// const promiseFour = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let error = true
//     if(!error){
//       resolve({username:"Shivam Bhandari", password:"1234"})
//     } else{
//       reject('ERROR something went wrong')
//     }
//   },2000)
// })
// promiseFour.then((user)=>{
//   console.log(user);
//   return user.username
  
// }).then((username)=>{
//   console.log(username);
  

// }).catch((err)=>{
//   console.log(err);
  

// }).finally(()=> console.log("promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject)=>{
  setTimeout(()=>{
        let error = true
        if(!error){
          resolve({username:"Javascript", password:"1234"})
        } else{
          reject('ERROR JS went wrong')
        }
      },2000)
})
async function consumePromiseFive(){
  try{
    const response = await promiseFive
    console.log(response);
  } catch(error){
    console.log(error);
    
  }
}
consumePromiseFive()

// async function getAllUser(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log('E: ',error)
//   }
// }
//getAllUser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error) => console.log(error))

