// const myObject = {
//   js:'javascript',
//   cpp:'c++',
//   rb:'ruby',
//   swift:'swift by apple'

// }
// for (const key in myObject) {
//   console.log(`${key} for my ${myObject[key]}`);
  
// }

// const program = ['js','python','java','rust']
// for (const key in program) {
//   console.log(program[key]);
  
// }

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('fr',"france")

for(const key in map){
  console.log(key);
  
}