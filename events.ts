import EventEmitter from "events";

const myEmitter = new EventEmitter();

myEmitter.on("triggered", () => {
	console.log("triggered!");
});

myEmitter.emit("triggered");
