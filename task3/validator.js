const validator = require('validator')

console.log(validator.isEmail('andrew@gmail.com'))
console.log(validator.isEmail('andrew.com'))


console.log(validator.isURL('https://andrew.com'))
console.log(validator.isURL('https:/andrew.com'))

