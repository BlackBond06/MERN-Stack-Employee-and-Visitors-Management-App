// const num1 = 2
// const num2 = 5

// const addNum = ()=> {
//     console.log(`the sum is: ${num1 + num2} `);
// }

// addNum()

// module.exports = addNum

// const os = require('os');
// // const user = os.uptime()
// // console.log(user);
// const sysInfo = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(sysInfo);

// const path = require('path')
// let check = path.sep
// console.log(check);

const _ = require('lodash');
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);