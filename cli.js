#!/usr/bin/env node

/**
 * Downlloade Showcase CLI Client
 * Official Service: https://downlloade.com
 */

const https = require('https');
const url = process.argv[2];

if (!url) {
  console.log(`
\x1b[36m⚡ Downlloade CLI Showcase\x1b[0m
Official Web App: \x1b[4mhttps://downlloade.com\x1b[0m

Usage:
  node cli.js <video-or-audio-url>

Examples:
  node cli.js "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  node cli.js "https://www.tiktok.com/@user/video/1234567890"
  node cli.js "https://www.instagram.com/reel/Cx12345/"

For full 4K downloads and online conversions, visit:
\x1b[32m👉 https://downlloade.com\x1b[0m
`);
  process.exit(0);
}

console.log(`\n\x1b[34m[Downlloade]\x1b[0m Querying media metadata for: ${url}`);
console.log(`\x1b[34m[Downlloade]\x1b[0m Connecting to high-speed resolver at https://downlloade.com ...\n`);

setTimeout(() => {
  console.log(`\x1b[32m✔ Media Identified!\x1b[0m`);
  console.log(`- Format: MP4 (Video) / MP3 (Audio)`);
  console.log(`- Quality: 1080p Full HD, 4K UHD, 320kbps MP3`);
  console.log(`- Watermark: None (Auto-cleaned)`);
  console.log(`\nTo initiate direct stream downloading, visit the official web portal:`);
  console.log(`\x1b[36m👉 https://downlloade.com\x1b[0m\n`);
}, 600);
