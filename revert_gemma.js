const fs = require('fs');

const path = './rules.md';
let content = fs.readFileSync(path, 'utf8');

const currentStr = '(e.g., DeepSeek, Qwen, Minimax, Gemma, Gemma 4)';
const revertedStr = '(e.g., DeepSeek, Qwen, Minimax)';

if (content.includes(currentStr)) {
    content = content.replace(currentStr, revertedStr);
    fs.writeFileSync(path, content, 'utf8');
    console.log('✅ rules.md reverted: Removed Gemma from the rule list.');
} else {
    console.log('❌ Could not find the string to revert.');
}
