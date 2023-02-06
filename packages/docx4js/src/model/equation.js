import Model from '../model';
import { XMLSerializer } from '@xmldom/xmldom';

export default class equation extends Model {
  constructor(wXml, wDoc, mParent, location) {
    super(...arguments);
    this.OMMLElement = mParent.wXml;
  }

  static get type() {
    return 'equation';
  }

  getOMMLElement() {
    return this.OMMLElement;
  }
}
