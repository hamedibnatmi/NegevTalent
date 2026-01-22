import fs from "fs";

function readFileWithErrorHandling(filePath) {
    const stats = fs.statSync(filePath, (err, stats) => {
        if (err) {
            console.error(`Error getting file stats: ${filePath}`, err);
            return null;
        }
    });
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            switch (err.code) {
                case 'ENOENT':
                    console.error(`File not found: ${filePath}`);
                    break;
                case 'EISDIR':
                    console.error(`Path is a directory: ${filePath}`);
                    break;
                default:
                    console.error(`Error reading file ${filePath}:`, err);
            }
            return null;
        }
        console.log("File read successfully. Size: ", stats.size, "bytes");
    });
}

readFileWithErrorHandling("./ex2.js");

