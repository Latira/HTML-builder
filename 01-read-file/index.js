const path = require("path");
const fs = require("fs");
const file = path.join(__dirname, "text.txt");
console.log(file);
const readableStream = fs.createReadStream(file, "utf-8");
let data = "";
readableStream.on("data", (chunk) => {
    data += chunk;
    console.log(data);
});
readableStream.on("end", () => console.log("End", data.length));