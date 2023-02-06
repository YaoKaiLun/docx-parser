import Model from '../model';

export default class documentStyles extends Model {
  _getValidChildren() {
    return this.wXml.$('docDefaults,style');
  }
  static get type() {
    return 'documentStyles';
  }
}
