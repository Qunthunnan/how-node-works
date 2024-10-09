import fs from "fs";

setTimeout(() => console.log("1 timeout - done"), 0);
setImmediate(() => console.log("Imediate - done"));

console.log(process.env);

fs.readFile("text-file.txt", () => {
	console.log("I/O - done");
});

function startCallback(func: Function): void {
	func();
}

startCallback(() => {
	console.log("callback in function top level - done");
});

console.log("Top level 2 - done");
