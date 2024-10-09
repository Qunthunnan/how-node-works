import fs from "fs";
import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
	// fs.readFile("test-file.txt", (error, data) => {
	// 	if (error) throw error;
	// 	res.end(data);
	// });

	// const readable = fs.createReadStream("ttest-file.txt");
	// readable.on("data", (chunk) => {
	// 	res.write(chunk);
	// });

	// readable.on("end", () => {
	// 	res.end();
	// });

	// readable.on("error", () => {
	// 	res.statusCode = 500;
	// 	res.end("File not found!");
	// });

	const readable = fs.createReadStream("test-file.txt");
	readable.pipe(res);
});

server.listen(8000, "localhost", () => {
	console.log("Listening on a port 8000");
});

// console.log(__dirname);
// console.log(__filename);
