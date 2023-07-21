const yargs = require('yargs')


// yargs.version('1.1.0')

yargs.command({
    command: 'list',
    describe: 'List of note!',
    handler: function () {
        console.log('List of note!')
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading a note!',
    handler: function () {
        console.log('Reading a note!')
    }
})
console.log(yargs.argv)