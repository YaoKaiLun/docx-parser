const path = require('path');
const docx4js = require('@docx-parser/docx4js');

const url = path.join(__dirname, '..', 'assets', 'normal.docx');

docx4js.load(url).then(docx => {
  console.log(docx);
});