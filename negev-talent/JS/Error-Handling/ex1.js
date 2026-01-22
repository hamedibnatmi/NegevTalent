function safeJsonParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Invalid JSON format:", error);
        return null;
    }
}


// console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: "John" }

console.log(safeJsonParse('thisisinvalidjson'));
// Output: "Invalid JSON format"
