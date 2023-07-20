const fs = require('fs');
fs.writeFileSync('message.txt','First Line of code\n')
fs.appendFileSync('message.txt', 'data to append')