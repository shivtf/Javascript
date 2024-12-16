
let a = 300
if(true){
  let a = 10
  const b = 20
  //console.log("inner",a);
} //scope of that program




//console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "shivam"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  //console.log(website);
  //two()
}
//one()
console.log(addOne(5))//it will run as it just function
function addOne(num){
  return num + 1
}

console.log(addTwo(5))// it will not run as you declare it in variable
const addTwo = function(num){
  return num + 2
}


