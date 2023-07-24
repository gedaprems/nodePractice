const fs = require('fs')


// Function for adding notes

const addNotes = function(title, body){
    const notes = loadNotes()

    let flag = false

    for(let idx = 0; idx < notes.length; idx++){
        if(notes[idx].title===title){
            flag= true;
            break;
        }
    }

    if(flag){
        // Printing title taken! 
        console.log("Title taken!")
    }else{
        // Pushing data to the notes.json
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Note added!")
    }  
}

// Helper function to load Notes 

const loadNotes = function(){
    try{
        const notesBuffer = fs.readFileSync('./notes.json')
        const notesJSON = notesBuffer.toString()
        return JSON.parse(notesJSON)
    }
    catch(e){
        return []
    }
}

// Helper save updated notes to Notes.json

const saveNotes = function(notes){
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('./notes.json',notesJSON)
}

// Function for getting Notes 

const getNotes = function(){
    return "Your Notes..."
}

module.exports = {
    addNotes: addNotes,
    getNotes: getNotes
}