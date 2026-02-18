// ════════════════════════════════════════════
// CONFIG — change the URL here when ready
// ════════════════════════════════════════════
const SITE_URL = 'https://udovichenko.github.io/glitch-store-detector/';
// ════════════════════════════════════════════

const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, 'img');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'qr-code.png');

async function main() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  await QRCode.toFile(OUTPUT_FILE, SITE_URL, {
    type: 'png',
    width: 1024,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
    errorCorrectionLevel: 'H',
  });

  console.log('QR code generated:');
  console.log('  URL:  ' + SITE_URL);
  console.log('  File: ' + OUTPUT_FILE);
}

main().catch(function (err) {
  console.error('Failed to generate QR code:', err);
  process.exit(1);
});
