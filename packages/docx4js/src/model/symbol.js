import Text from './text';

export default class symbol extends Text {
  static get type() {
    return 'symbol';
  }
  getText() {
    return String.fromCharCode(ParseInt('0x' + this._attr('w:char')));
  }
  getFont() {
    return this._attr('w:font');
  }
}
