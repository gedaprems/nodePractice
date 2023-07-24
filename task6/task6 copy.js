const fs = require('fs')

const bookBuffer = fs.readFileSync('task6.json')

const bookJSON = bookBuffer.toString()

// console.log("Book JSON : "+bookJSON)

const bookObj = JSON.parse(bookJSON)
// console.log(bookObj[0])
var idx =0
var flag = false
for( idx; idx <bookObj.length; idx++){
    if(bookObj[idx].name==='Roshan'){
        flag = true;
        break;
    }
}

if(flag){
    console.log("Title not available")
}else{
    console.log("Title is present")
}