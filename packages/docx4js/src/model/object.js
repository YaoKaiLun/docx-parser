import Model from '../model';
const { wmf2pngBase64Sync } = require('@docx-parser/wmf2png');

export default class Object extends Model {
  constructor(wXml, wDoc, mParent, location) {
    super(...arguments);

    wXml.childNodes.forEach((node) => {
      if (node.tagName === 'OLEObject') {
        this.rId = node.attr('r:id');
        this.relOleObject = this.wDoc.getRelOleObject(this.rId);
      }

      if (node.tagName === 'shape') {
        node.childNodes.forEach((node) => {
          if (node.tagName === 'imagedata') {
            this.mediaRId = node.attr('r:id');
          }
        });
      }
    });
  }

  static get type() {
    return 'object';
  }

  getRId() {
    return this.rId;
  }

  getRelOleObject() {
    return this.relOleObject;
  }

  getMediaRId() {
    return this.mediaRId;
  }

  getRelMedia() {
    const buffer = this.wDoc.getRel(this.mediaRId);
    const rels = this.wDoc.getRels();
    const rel = rels[this.mediaRId];

    if (rel.type === 'image' && rel.target.indexOf('.wmf') !== -1) {
      const base64 = wmf2pngBase64Sync(buffer);
      this.relMedia = base64;
      return base64;
    }

    return null;
  }
}
