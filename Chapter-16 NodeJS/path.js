const path = require("path");

let p = "src/pkg/test.js";

console.log("Path ",path.basename(p));
console.log("Path.extname(p) ",path.extname(p));
console.log("path.dirname(p) ",path.dirname(p));
console.log("path.basename ",path.basename(path.dirname(p)));
console.log("path.dirname ",path.dirname(path.dirname(p)));
console.log("path.normalize ",path.normalize("a/b/c/../d/"));
console.log("path.normalize strip ",path.normalize("//a//b//"));
console.log("path.join ",path.join("src", "pkg", "t.js"));
console.log("path.resolve ",path.resolve("path.js"));
