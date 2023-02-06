import Model from '../model';

export default class bookmarkStart extends Model {
  parse() {
    super.parse(...arguments);
    this.wDoc.parseContext.bookmark[this.wXml.attr('w:id')] = this.wXml.attr('w:name');
  }
  getName() {
    return this.wXml.attr('w:name');
  }
  static get type() {
    return 'bookmarkStart';
  }
}
