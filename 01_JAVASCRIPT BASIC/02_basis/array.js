const myArr = [0,1,2,3,4,5]
const myHero = ["d","d"]
const myArr2 = new Array(1,2,3,4)

// array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(typeof newArr);
// console.log(myArr);

// console.log("A ",myArr);
const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
// console.log("C ",myArr);
// console.log(myn2);

// splice manipulatre the orignal array while slice just  the refrence of the orignal array

//********************************************************ARRAY PART 2 ********************************************************************* */

const marvelHero = ["c","i","h","t"]
const dcHero = ["s","b","w","a"]

// marvelHero.push(dcHero)

// console.log(marvelHero);
// console.log(marvelHero[4][1]);

// const allHero = marvelHero.concat(dcHero)
// console.log(allHero);

// spread operator

const allHeroes = [...marvelHero,...dcHero]
// console.log(allHeroes);

const anotherArr = [1,2,3,[4,5,6],7,8,[9,5]]
//flat convert all sub array into one array
const realArr = anotherArr.flat(Infinity)

// console.log(realArr);

//to make array use from
// console.log(Array.isArray("Shivam"))
// console.log(Array.from("Shivam"))
//using object to makle array
// console.log(Array.from({name:"shivam"}))// gives empty array

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3));
