console.log("Argv ",process.argv);
console.log("Arch ",process.arch);
console.log("Cwd ",process.cwd());
console.log("CPU usage ",process.cpuUsage());
console.log("Enviroment ",process.env);
console.log("Execpath ",process.execPath);

console.log("User ID ",process.getuid());

console.log("Memory Usage ",process.memoryUsage());

process.nextTick(() => {
    console.log("Next Tick");
});

console.log("End");

console.log("Node Version ",process.versions);