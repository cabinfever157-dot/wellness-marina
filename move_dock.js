const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'uploads', 'dock.jpg');
const dest = path.join(__dirname, 'public', 'images', 'dock.jpg');

try {
  fs.copyFileSync(src, dest);
  console.log('✅ Successfully moved dock.jpg to the public/images folder!');
} catch (err) {
  console.error('❌ Failed to copy dock.jpg:', err.message);
}
