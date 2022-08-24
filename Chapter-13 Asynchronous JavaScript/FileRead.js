const fs = require('fs');

console.log('Before File Read');

fs.readFile('Hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File Read Complete ',data);

  fs.readFile(data , 'utf-8' , (err2,data2) => {
    console.log('File Content ',data2);
  })
});

console.log('After File Read');