const {createFileTable} = require('./helpers/multiply');
const argv = require('./config/yargs');

createFileTable(argv.b, argv.h, argv.l).then(console.log).catch(console.log);


