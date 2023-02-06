import Paragraph from './paragraph';

export default class Document extends Paragraph {
  constructor(wXml, wDoc, mParent) {
    super(wXml, wDoc, mParent);
    wDoc.style.setDefault(this);
  }

  isDefault() {
    return true;
  }

  static get type() {
    return 'style.document';
  }
}
