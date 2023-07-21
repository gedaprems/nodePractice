const yargs = require('yargs')


yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    handler: function () {
        console.log('Adding a new note!')
    }
})
yargs.command({
    command: 'remove',
    describe: 'Removing a new note!',
    handler: function () {
        console.log('Removing a new note!')
    }
})
console.log(yargs.argv)