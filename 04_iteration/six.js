//forEach font return values
const program = ['1','2','3','4','6','8']

//const newProgram = program.filter( (pro) => pro > 4 )
// const newProgram = program.filter( (pro) => {
//   return pro > 4
// } )

const newProgram = []
program.forEach( (pro) => {
  if(pro>4){
    newProgram.push(pro)
  }
} )

console.log(newProgram);
