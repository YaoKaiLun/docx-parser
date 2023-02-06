const { wmf2png, wmf2pngBase64, wmf2pngBase64Sync } = require('@docx-parser/wmf2png');

// wmf2png('./assets/formula.wmf', './.result/formula.png').then(() => {
//   console.log('wmf2png success');
// }).catch(err => {
//   console.log('wmf2png fail', err);
// });

// wmf2pngBase64('./assets/formula.wmf').then(base64 => {
//   console.log('wmf2png success', base64);
// }).catch(err => {
//   console.log('wmf2png fail', err);
// });

try {
  const base64 = wmf2pngBase64Sync('./assets/formula.wmf');
  console.log('wmf2png success', base64);
} catch (error) {
  console.log('wmf2png fail', err);
}