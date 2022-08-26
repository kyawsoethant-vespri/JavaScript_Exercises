const os = require("os");

console.log("CPUs ",os.cpus());

console.log("Endianness ",os.endianness());
console.log("os.freemem ",os.freemem());
console.log("os.homedir ",os.homedir());
console.log("os.networks ",os.networkInterfaces());
console.log("os platform ",os.platform());
console.log("os release ",os.release());