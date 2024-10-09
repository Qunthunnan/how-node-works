import { rejects } from "assert";
import { error } from "console";
import fs from "fs";
import { resolve } from "path";

//Non-Blocking asynchronius code with error handling, but with callback hell
// let test: string;
// fs.readFile("./txt/read-this.txt", "utf-8", (error, data) => {
// 	if (!error) {
// 		test = data;
// 		console.log(test);

// 		fs.writeFile(
// 			"./txt/newFile.txt",
// 			`New file says: \n${test}\nLast updated: ${new Date()}`,
// 			(error) => {
// 				if (!error) {
// 					fs.readFile("./txt/newFile.txt", "utf-8", (error, data) => {
// 						if (!error) console.log(data);
// 						else throw error;
// 					});
// 				} else throw error;
// 			},
// 		);
// 	} else throw error;
// });

let test: string;
const firstRead = (fileloc: string): Promise<string> => {
	return new Promise<string>((resolve, reject) => {
		fs.readFile(fileloc, "utf-8", (error, data) => {
			if (error) reject(error);
			else resolve(data);
		});
	});
};

const firstWrite = (fileloc: string, data: string): Promise<void> => {
	return new Promise<void>((resolve, reject) => {
		fs.writeFile(
			fileloc,
			`New file says: \n${data}\nLast updated: ${new Date()}`,
			"utf-8",
			(error) => {
				if (error) reject(error);
				else resolve();
			},
		);
	});
};

// fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		throw error;
// 	});

// firstRead("./txt/read-this.txt")
// 	.then((data) => {
// 		console.log(data);
// 		test = data;
// 		return firstWrite("./txt/newFile.txt", data);
// 	})
// 	.then(() => firstRead("./txt/newFile.txt"))
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		throw error;
// 	});

async function fileManipulations(): Promise<void> {
	try {
		test = await firstRead("./txt/read-this.txt");
		console.log(test);
		await firstWrite("./txt/newFile.txt", test);
		console.log(await firstRead("./txt/newFile.txt"));
	} catch (error) {
		throw error;
	}
}

fileManipulations();
