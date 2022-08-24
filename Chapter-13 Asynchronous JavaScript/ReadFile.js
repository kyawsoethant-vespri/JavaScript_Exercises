const fs = require('fs');

console.log('Before File Read');

fs.readFile('Hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File Read Complete ',data);
});

console.log('After File Read');