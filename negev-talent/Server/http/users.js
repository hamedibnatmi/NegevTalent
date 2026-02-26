const http = require("http");

// Vanilla Node.js server with query parameters
// Get all users
// Get user by id


const users = [
    { id: 1, name: "John Doe", email: "[EMAIL_ADDRESS]" },
    { id: 2, name: "Jane Smith", email: "[EMAIL_ADDRESS]" }
];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const baseUrl = "http://localhost:3000";
    const url = new URL(req.url, baseUrl);
    const id = url.searchParams.get("id");

    if (id) {
        const user = users.find(user => user.id === parseInt(id));
        if (user) {
            res.end(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: "User not found" }));
        }
    } else {
        res.end(JSON.stringify(users));
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});