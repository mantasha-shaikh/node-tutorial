const http = require('http');
const { readFileSync } = require('fs');
const fs = require('fs');
const path = require('path');

// Preload HTML, CSS, JS
const Reading = readFileSync('./Demo_projects/index.html');
const styleCss = readFileSync('./Demo_projects/style.css');
const JavaScript = readFileSync('./Demo_projects/main.js');

// Create Server
const server = http.createServer((req, res) => {
  const URL = req.url;
  console.log(URL);

  if (URL === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(Reading);
    res.end();
  }

  else if (URL === '/style.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(styleCss);
    res.end();
  }

  else if (URL === '/main.js') {
    res.writeHead(200, { 'Content-Type': 'text/js' }); // FIX: 'text/js' -> 'text/javascript'
    res.write(JavaScript);
    res.end();
  }

  else if (URL.startsWith('/assest/')) {
    const filepath = path.join(__dirname, 'Demo_projects', URL);
    const ext = path.extname(filepath);
    
    const mimeTypes = {
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
    };

    const ContType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filepath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': ContType });
        res.end(data);
      }
    });
  }

  else {
    // Handle unknown routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start Server
server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
