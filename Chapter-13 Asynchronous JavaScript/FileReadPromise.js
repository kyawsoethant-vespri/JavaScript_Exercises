const fs = require('fs/promises');
fs.readFile('Hello.txt','utf-8')
    .then(data => fs.readFile(data,'utf-8'))
    .then(finalContent => console.log('Final Content ',finalContent))
    .catch(console.error);