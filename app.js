const fs = require('fs');
const notes = require('./notes.js')

const yargs = require('yargs')

// Add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of Notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title,argv.body)
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})



// console.log(yargvs.argv) => 
yargs.parse()
