// for each
// const program = ['js','python','java','rust']
// // program.forEach( function (item) {
//   console.log(item);
  
// } )
// program.forEach((item) =>{
//   console.log(item);
   
// })

// function printME(item){
//   console.log(item);
  
// }
// program.forEach(printME)

// program.forEach( (item,index,arr) => {
//   console.log(item,index,arr);
  
// })

const myLanguage =  [
  {
    languageName:'javascript',
    fileName:'js'
  },
  {
    languageName:'java',
    fileName:'java'
  },
  {
    languageName:'python',
    fileName:'py'
  }

]
myLanguage.forEach( (item) => {
  console.log(item.languageName);
} )