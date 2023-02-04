const path = require('path');
const fs = require('fs');
const docx2html = require('@docx-parser/docx2html');

const url = path.join(__dirname, '..', 'assets', 'test.docx');

docx2html(url).then(html => {
  console.log('html', html.toString());
  const url = path.join(__dirname, '..', '.result', 'test.html');
  fs.writeFileSync(url, html.toString());
});