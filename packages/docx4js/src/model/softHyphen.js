import Text from './text';

export default class softHyphen extends Text {
  static get type() {
    return 'softHyphen';
  }
  getText() {
    return String.fromCharCode(0xAD);
  }
}
