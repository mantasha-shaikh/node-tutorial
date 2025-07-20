const http = require('http');
const fs = require('fs');
const path = require('path');

// Preloaded files
const Reading = fs.readFileSync('./Demo_projects/index.html');
const styleCss = fs.readFileSync('./Demo_projects/style.css');
const JavaScript = fs.readFileSync('./Demo_projects/main.js');

const server = http.createServer((req, res) => {
  const URL = req.url;
  console.log(URL);

  if (URL === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(Reading);
  } else if (URL === '/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.end(styleCss);
  } else if (URL === '/main.js') {
    res.writeHead(200, { 'content-type': 'application/js' });
    res.end(JavaScript);
  } else if (URL.startsWith('/assest/')) {
    // Dynamic path banayein
const filePath = path.join(__dirname, 'Demo_projects', URL);

    const ext = path.extname(filePath);
    
    
    const mimeTypes = {
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
    };
    
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Check & read file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  } else {
    // Fallback 404

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Page Not Found');
  }
});

server.listen(5000, () => {
  console.log('✅ Server listening at http://localhost:5000');
});
