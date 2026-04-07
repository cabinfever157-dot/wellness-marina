const fs = require('fs');

const path = './rules.md';
let content = fs.readFileSync(path, 'utf8');

// Target string
const targetStr = '(e.g., DeepSeek, Qwen, Minimax)';
const replacementStr = '(e.g., DeepSeek, Qwen, Minimax, Gemma, Gemma 4)';

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    
    // Also sanitize the file so we never have to type the raw tags again
    const badThink = String.fromCharCode(60) + 'think' + String.fromCharCode(62);
    const badThought = String.fromCharCode(60) + 'thought' + String.fromCharCode(62);
    
    content = content.replace(new RegExp(badThink, 'g'), '[think]');
    content = content.replace(new RegExp(badThought, 'g'), '[thought]');
    
    fs.writeFileSync(path, content, 'utf8');
    console.log('✅ rules.md updated: Gemma 4 added to Anti-Deadlock protocols.');
} else {
    console.log('❌ Could not find the target string in rules.md.');
}
