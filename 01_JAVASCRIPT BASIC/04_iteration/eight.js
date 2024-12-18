//reduce.js

const arr = [1,2,3,4]
//const initialValue = 0
const sumValue = arr.reduce((acc,current)=>{
  console.log(`acc: ${acc} and current: ${current}`);
  return acc + current
},0)
console.log(sumValue)