const path = require('path');
const docx4js = require('@docx-parser/docx4js');

const url = path.join(__dirname, '..', 'assets', 'test.docx');

docx4js.load(url).then(docx => {
  console.log('docx', docx);
});