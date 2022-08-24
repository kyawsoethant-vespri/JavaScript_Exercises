const fs = require('fs');

console.log('Before File Read');

try {
  const data = fs.readFileSync('Hello.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

console.log('After File Read');
