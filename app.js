const fs = require('fs');
const notes = require('./notes.js')

const yargs = require('yargs')

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



// console.log(yargvs.argv) => 
yargs.parse()
