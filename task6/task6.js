const fs = require('fs')

const bookBuffer = fs.readFileSync('task6.json')

const bookJSON = bookBuffer.toString()

console.log("Book JSON : "+bookJSON)

const bookObj = JSON.parse(bookJSON)
// console.log("Book OBJ : "+bookObj)

bookObj.name = "Ram"
bookObj.age = 25

// console.log("Book Updated OBJ : "+bookObj)

const bookUpdatedJSON = JSON.stringify(bookObj)

console.log("Book Updated JSON : "+bookUpdatedJSON)

fs.writeFileSync('task6.json',bookUpdatedJSON)
