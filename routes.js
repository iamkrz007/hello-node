const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Mesage</title></head>');
        res.write('<body><form action ="/message" method="POST" ><input type = "text" name="message"><button type="submit"> Send </button></input></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[0];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from node.js again .</h1></body>');
    res.write('</html>');
    res.end();
};

// module.exports = requestHandler;

// module.exports ={
//     handle: requestHandler,
//     someText: 'test'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'test';

exports.handler = requestHandler;
exports.someText = 'test';