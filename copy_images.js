const fs = require('fs');
const path = require('path');

const srcBoutique = 'C:/Users/info/.gemini/antigravity/brain/b12743aa-4306-4945-be20-541aed1abdde/boutique_hotel_final_1775745703327.png';
const destBoutique = path.join(__dirname, 'public', 'images', 'boutique_hotel_final.png');

const srcSpa = 'C:/Users/info/.gemini/antigravity/brain/b12743aa-4306-4945-be20-541aed1abdde/spa_boat_interior_1775745890171.png';
const destSpa = path.join(__dirname, 'public', 'images', 'spa_boat_interior.png');

try {
  fs.copyFileSync(srcBoutique, destBoutique);
  console.log('✅ Successfully copied Boutique Hotel Boat image!');
} catch (err) {
  console.error('❌ Failed to copy Boutique Hotel Boat image:', err.message);
}

try {
  fs.copyFileSync(srcSpa, destSpa);
  console.log('✅ Successfully copied Spa Boat image!');
} catch (err) {
  console.error('❌ Failed to copy Spa Boat image:', err.message);
}
