# @docx-parser/docx4js

Parse docx to javascript object

输出结构为 document 实例：

```
{
  parts: {
    'word/document.xml': {
      name: 'word/document.xml',
      dir: false,
      date: 1979-12-31T16:00:00.000Z,
      comment: null,
      unixPermissions: null,
      dosPermissions: 0,
      _data: [Uint8Array],
      options: [Object],
      _initialMetadata: [Object]
    },
    'word/footnotes.xml': {
      name: 'word/footnotes.xml',
      dir: false,
      date: 1979-12-31T16:00:00.000Z,
      comment: null,
      unixPermissions: null,
      dosPermissions: 0,
      _data: [Object],
      options: [Object],
      _initialMetadata: [Object]
    },
    ...
  },
  raw: {
    files: [Object: null prototype] {
      '[Content_Types].xml': [Object],
      '_rels/.rels': [Object],
      'word/_rels/document.xml.rels': [Object],
      'word/document.xml': [Object],
      'word/footnotes.xml': [Object],
      'word/endnotes.xml': [Object],
      'word/media/image1.jpg': [Object],
      'word/theme/theme1.xml': [Object],
      'word/media/image2.png': [Object],
      'word/settings.xml': [Object],
      'word/numbering.xml': [Object],
      'word/styles.xml': [Object],
      'word/webSettings.xml': [Object],
      'docProps/core.xml': [Object],
      'docProps/app.xml': [Object],
      'customXml/itemProps1.xml': [Object],
      'customXml/item1.xml': [Object],
      'customXml/_rels/item1.xml.rels': [Object],
      'word/fontTable.xml': [Object]
    },
    comment: null,
    root: '',
    clone: [Function (anonymous)],
  },
  props: { name: 'test' },
  rels: {
    'extended-properties': 'docProps/app.xml',
    'core-properties': 'docProps/core.xml',
    officeDocument: 'word/document.xml',
    styles: 'word/styles.xml',
    endnotes: 'word/endnotes.xml',
    numbering: 'word/numbering.xml',
    footnotes: 'word/footnotes.xml',
    theme: 'word/theme/theme1.xml',
    webSettings: 'word/webSettings.xml',
    fontTable: 'word/fontTable.xml',
    settings: 'word/settings.xml'
  },
  partMain: Part {
    name: 'word/document.xml',
    doc: [Circular *1],
    documentElement: Element$1 {
      _nsMap: [Object],
      attributes: [Object],
      childNodes: [Object],
      ownerDocument: [Document$5],
      nodeName: 'document',
      tagName: 'document',
      namespaceURI: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
      prefix: 'w',
      localName: 'document',
      previousSibling: [Text],
      nextSibling: null,
      parentNode: [Document$5],
      lineNumber: 2,
      columnNumber: 1,
      firstChild: [Element$1],
      lastChild: [Element$1]
    },
    rels: {
      rId8: [Object],
      rId3: [Object],
      rId7: [Object],
      rId2: [Object],
      rId1: [Object],
      rId6: [Object],
      rId11: [Object],
      rId5: [Object],
      rId10: [Object],
      rId4: [Object],
      rId9: [Object]
    },
    relName: 'word/_rels/document.xml.rels'
  }
}
```