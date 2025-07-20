const fs = require('fs');

const readStream = fs.createReadStream('./content/fisrt.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('File reading finished');
});
