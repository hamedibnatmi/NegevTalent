const http = require("http");

// Vanilla Node.js server 


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/") {
        res.end(JSON.stringify({ message: "Welcome to my server!" }));
    } else if (req.url === "/about") {
        res.end(JSON.stringify({ message: "This is the about page" }));
    }
    else if (req.url === "/contact") {
        res.end(JSON.stringify({ message: "This is the contact page" }));
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "404 - Page Not Found" }));
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
