var msg = 'Hello World'
console.log(msg)

// console.log(__dirname)
// setInterval(() => {
//     console.log('hi'), 5
// })

const count = 12
if (count < 10){
    console.log("This is less than 10")
}else {
    console.log("This num is greater than 10")

}

// const sayHi = (name) =>{
//     consloe.log(`Hello there ${name}`);
// }


const names = require('./04-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require ('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.andrey)
