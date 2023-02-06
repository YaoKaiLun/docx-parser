import Model from '../model';

export default class fieldEnd extends Model {
  _iterate(f, factories, visitors) {
    this.wDoc.parseContext.field.end(this, visitors);
  }
  static get type() {
    return 'fieldEnd';
  }
}
