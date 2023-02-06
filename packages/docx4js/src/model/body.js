import Model from '../model';

export default class Body extends Model {
  _getValidChildren() {
    return this.wXml.$('sectPr');
  }

  static get type() {
    return 'body';
  }
}
