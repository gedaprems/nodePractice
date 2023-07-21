const yargs = require('yargs')


yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: '+argv.title)
    }
})



// console.log(yargs.argv) => 
yargs.parse()