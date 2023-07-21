// Converting the object to json file

const fs = require('fs')

const book = {
    title: "My Title",
    author: "Premsagar Gedam"
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJSON)

const bookBuffer = fs.readFileSync('1-json.json')
console.log(bookBuffer.toString())