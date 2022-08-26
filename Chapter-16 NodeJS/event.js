const {EventEmitter} = require("events");
console.log("Event Emitter ",EventEmitter);

const firstEmitter = new EventEmitter();

function someTask(){
    setTimeout(() => {

        firstEmitter.emit("Task Completed",{data : "Something"});

    }, 2000);
}

firstEmitter.on("Task Completed",(data) => {
    console.log("On Task Completed",data);
});

console.log("Task Start");
someTask();